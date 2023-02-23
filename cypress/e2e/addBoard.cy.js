/// <reference types="Cypress"/>

import { createOrg } from "../pageObjects/createOrg";
import { addB } from "../pageObjects/addBoard";
import { faker } from "@faker-js/faker";

describe("add board", () =>{
   
    let boardData = {
        boardName: faker.random.word()
    }

    before("log into the app", () =>{
        cy.loginViaBackend();
        cy.visit("/organizations/25934/boards")
    })

    it("add board", () =>{
        cy.addBoard();
        
    })

})