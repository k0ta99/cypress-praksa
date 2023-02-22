/// <reference types="Cypress"/>

import { loginPage } from "../pageObjects/loginPOM";

describe("log into the app",() =>{
    it("login via BE", () =>{
        cy.loginViaBackend();
    })
})