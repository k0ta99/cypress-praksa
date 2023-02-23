// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginViaBackend", () =>{
    cy.request({
      method: "POST",
      url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
      body: {
        email: Cypress.env("userEmail"),
        password: Cypress.env("userPassword"),
      },
    }).then((resp) => {
      expect(resp.status).to.equal(200);
      expect(resp.body).to.have.property("token");
      expect(resp.body).to.have.property("user");
      window.localStorage.setItem("token", resp.body.token);
      window.localStorage.setItem("user", JSON.stringify(resp.body.user));
      window.localStorage.setItem("user_id", resp.body.user.id);
    });
  })

  Cypress.Commands.add("addUser", () =>{
    cy.request({
      method: "POST",
      url: `https://cypress-api.vivifyscrum-stage.com/api/v2/boards/${boardId}/users`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: {
        access: "admin",
        email: "remadija98@gmail.com",
        'g-recaptcha-response': '',
      },
    })
  })

  let organizationId;
  let boardId;
  Cypress.Commands.add("createOrg", () =>{
    cy.request({
      method: "POST",
      url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: {
        name: "org name"
      },
    }).its("body").then(response => {
      organizationId = response.id;
    })
  })

  Cypress.Commands.add("addBoard", () =>{
    cy.request({
      method: "POST",
      url: "https://cypress-api.vivifyscrum-stage.com/api/v2/boards",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: {
        name: "board",
        type: "scrum_board",
        organization_id: organizationId
      },
    }).its("body").then(response =>{
      boardId = response.id;
    })
  })

  Cypress.Commands.add("deleteOrg", () =>{
    cy.request({
      method: "POST",
      url: `https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/${organizationId}`,
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: {
        passwordOrEmail: "test1234"
      },
    })
  })

  

  // function getEntityId(){
  //   const url = window.location.href
  //   let linkSplit = url.split("/")
  //   let linkId = linkSplit[linkSplit.length - 2]

  //   return linkId;
  // }