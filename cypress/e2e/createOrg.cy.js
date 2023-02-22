/// <reference types="Cypress"/>

import { createOrg } from "../pageObjects/createOrg";
import { loginPage } from "../pageObjects/loginPOM";
import { faker } from "@faker-js/faker";

describe("create org", () =>{
    let orgData = {
        orgName: faker.random.word()
    }

    before("log into the app", () =>{
        cy.loginViaBackend();
    })

    it("create org", () =>{
        createOrg.createOrgDiv.should("be.visible")
        .and("have.css", "background-color", 'rgb(230, 230, 230)');
        createOrg.createOrg(orgData.orgName);
        createOrg.addNewBoardElement.should("exist")
        .and("have.css", "background-color", 'rgb(230, 230, 230)' )
    })
})