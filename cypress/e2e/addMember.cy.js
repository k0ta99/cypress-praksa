/// <reference types="Cypress"/>

import { addUser } from "../pageObjects/addUser";

describe("add user", () =>{
    let userEmail = {
        user: "remadija98@gmail.com"
    }

    before("log into the app", () =>{
        cy.loginViaBackend();
        cy.visit("/boards/14302")
    })

    it("add member", () =>{
        cy.addUser();
    })
})
