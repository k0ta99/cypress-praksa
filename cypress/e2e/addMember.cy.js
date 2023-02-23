/// <reference types="Cypress"/>

import { addUser } from "../pageObjects/addUser";

describe("add user", () =>{

    before("log into the app", () =>{
        cy.loginViaBackend();
        cy.visit("/boards/14302")
    })

    it("add member", () =>{
        cy.addUser();
    })
})
