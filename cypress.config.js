const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    "baseUrl": 'https://cypress.vivifyscrum-stage.com/',
    watchForFileChanges: false,
    env:{
      userEmail: "kota99@gmail.com",
      userPassword: "test1234"
    },
    
    
  },
});
