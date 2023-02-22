/// <reference types="Cypress"/>

import { createOrg } from "../pageObjects/createOrg";
import { addB } from "../pageObjects/addBoard";
import { faker } from "@faker-js/faker";


describe("add board", () =>{
    let orgData = {
        orgName: faker.random.word()
    }
    let boardData = {
        boardName: faker.random.word()
    }

    before("log into the app", () =>{
        cy.loginViaBackend();
        createOrg.createOrg(orgData.orgName);
    })

    it("add board", () =>{
        addB.addNewBoard.should("be.visible")
        .and("have.css", "background-color", 'rgb(230, 230, 230)');
        addB.addBoard(boardData.boardName);
    })

})