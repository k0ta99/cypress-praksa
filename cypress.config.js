const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "https://cypress.vivifyscrum-stage.com/",
    env:{
      userEmail: "kotoganmarko5@gmail.com",
      userPassword: "test1234"
    }
  },
});
