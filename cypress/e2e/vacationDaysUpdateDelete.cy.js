/// <reference types="Cypress"/>

import { orgConfig } from "../pageObjects/orgConfiguration";
import { faker } from "@faker-js/faker";
import {flatpickr} from "flatpickr";


describe("check if updated/deleted vacation days off deduct correctly", () =>{
   
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

    it("set vacation days", () =>{
        orgConfig.boardsPop.click()
        orgConfig.configPanel.should("be.visible")
        .and("have.css", "background-color", 'rgb(204, 204, 204)')

        orgConfig.setVacationDays();
        orgConfig.memberModal.should("be.visible")
        .and("have.css", "background-color", 'rgb(255, 255, 255)')
        cy.get('.is-left > .el-date-table > tbody > :nth-child(5) > :nth-child(7)').click()
        cy.get('.is-left > .el-date-table > tbody > :nth-child(6) > :nth-child(3)').click()
        orgConfig.addButton.click()
        orgConfig.vacationDays.should("have.value", 14)

    })


    after("delete org", () =>{
        cy.deleteOrg();
    })
})