/// <reference types="Cypress"/>

import { orgConfig } from "../pageObjects/orgConfiguration";
import { faker } from "@faker-js/faker";


describe("check if changed vacation days affect time off days per member", () =>{
    let orgConfigNumbers = {
        vacationDays: faker.datatype.number({
            min: 20,
            max: 30
        })
    }

    let organizationId;

    before("set up state", () => {
        cy.loginViaBackend();
        cy.createOrg();
        cy.addBoard();
        cy.addUser();
       
    })

    beforeEach("visit organization", () =>{
        cy.visit(`/organizations/${cy.createOrg().organizationId}/boards`);
    })

    it("change vacation days", () =>{
        orgConfig.boardsPop.click()

        orgConfig.configPanel.should("be.visible")
        .and("have.css", "background-color", 'rgb(204, 204, 204)')

        orgConfig.changeVacationDaysPerYear(
            orgConfigNumbers.vacationDays
        )

        orgConfig.vacationDaysPerYear.should("have.value", orgConfigNumbers.vacationDays)
    })

    it("check if vacation days changed", () =>{
        orgConfig.checkIfVacationDaysChanged();
    })

    after("delete org", () =>{
        cy.deleteOrg();
    })
})