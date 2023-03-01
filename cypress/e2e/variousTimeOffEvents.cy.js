/// <reference types="Cypress"/>

import { orgConfig } from "../pageObjects/orgConfiguration";
import { faker } from "@faker-js/faker";
import {flatpickr} from "flatpickr";


describe("check how various time off events reflects on statistics and total number of vacation days off ", () =>{
   
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

    it("add two events", () =>{
        orgConfig.configPanel.should("be.visible")
        .and("have.css", "background-color", 'rgb(204, 204, 204)')
        orgConfig.addEvents();
        orgConfig.parentalLeaveSickLeave()
        orgConfig.statisticsLineParental.should("have.css", "background-color", 'rgb(224, 148, 238)')
        orgConfig.statisticsLineSick.should("have.css", "background-color", 'rgb(72, 206, 149)')
    })

    it("add third event", () =>{
        orgConfig.addEvents();
        orgConfig.parentalSickPaidLeave()
        orgConfig.statisticsLineParental.should("have.css", "background-color", 'rgb(224, 148, 238)')
        orgConfig.statisticsLineSick.should("have.css", "background-color", 'rgb(72, 206, 149)')
        orgConfig.statisticsLinePaid.should("have.css", "background-color", 'rgb(237, 176, 68)')
    })

    after("delete org", () =>{
        cy.deleteOrg();
    })
})