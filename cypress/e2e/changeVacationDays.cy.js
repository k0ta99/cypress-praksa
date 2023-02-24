/// <reference types="Cypress"/>

import { orgConfig } from "../pageObjects/orgConfiguration";
import { faker } from "@faker-js/faker";


describe("check if changed vacation days affect time off days per member", () =>{
    let orgConfigNumbers = {
        vacationDays: faker.datatype.number({
            min: 20,
            max: 25
        })
    }
    
    let organizationId;
    let boardId;

    before("set up state", () => {
        cy.loginViaBackend();
        cy.createOrg();
        cy.readFile('cypress/fixtures/ids.json').then((ids) =>{
            cy.wrap(ids).as('orgId');
            organizationId = ids.organizationId;
        })
        cy.addBoard();
        cy.readFile('cypress/fixtures/ids.json').then((ids) =>{
            cy.wrap(ids).as('boardId');
            boardId = ids.boardId;
        })
        cy.addUser();
       
    })

    beforeEach("visit organization", () =>{
            cy.loginViaBackend();
            cy.visit(`/organizations/${organizationId}/boards`);
            cy.url().should("include", organizationId);
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
        cy.visit(`/boards/${boardId}/team`)
        cy.url().should("include", boardId)
        orgConfig.checkIfVacationDaysChanged();
        orgConfig.timeOffTab.should("be.visible")
        .and("have.text", "Time Off")
        orgConfig.numberOfVacationDaysOnThisDay.should("have.value", orgConfigNumbers.vacationDays - 5);
    })

    after("delete org", () =>{
        cy.deleteOrg();
    })
})