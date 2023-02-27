/// <reference types="Cypress"/>

import { orgConfig } from "../pageObjects/orgConfiguration";
import { faker } from "@faker-js/faker";
import {flatpickr} from "flatpickr";


describe("check if reported days off deduct from total number of days off ", () =>{
   
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
            orgConfig.boardsPop.click()
    })

    it("set vacation days", () =>{
        orgConfig.configPanel.should("be.visible")
        .and("have.css", "background-color", 'rgb(204, 204, 204)')
        orgConfig.setVacationDays();
        let deductedVacationDays = 16 - orgConfig.vacationDaysAdded;
        orgConfig.totalNumberOfUnusedDays.should("contain",  12 + 'd');
    })


    after("delete org", () =>{
        cy.deleteOrg();
    })
})