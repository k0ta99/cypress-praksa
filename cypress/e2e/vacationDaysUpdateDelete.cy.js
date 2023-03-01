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

    it("add vacation days", () =>{
        orgConfig.boardsPop.click()
        orgConfig.configPanel.should("be.visible")
        .and("have.css", "background-color", 'rgb(204, 204, 204)')
        orgConfig.setVacationDays();
        orgConfig.statisticsLine.should("be.visible")
        .and("have.css", "background-color", 'rgb(168, 206, 72)')
    })

    it("update vacation days", () =>{
        orgConfig.boardsPop.click()
        orgConfig.configPanel.should("be.visible")
        .and("have.css", "background-color", 'rgb(204, 204, 204)')
        cy.visit(`/organizations/${organizationId}/team`)
        orgConfig.updateVacationDays();
        let updatedVacationDays = 16 - orgConfig.updatedVacationDaysAdded;
        orgConfig.totalNumberOfUnusedDays.should("contain", 11 + 'd');
    })

    it("delete vacation days", () =>{
        orgConfig.boardsPop.click()
        orgConfig.configPanel.should("be.visible")
        .and("have.css", "background-color", 'rgb(204, 204, 204)')
        cy.visit(`/organizations/${organizationId}/team`)
        orgConfig.deleteVacationDays();
        orgConfig.totalNumberOfUnusedDays.should("contain", 16 + 'd');
    })

    after("delete org", () =>{
        cy.deleteOrg();
    })
})