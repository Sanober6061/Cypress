const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  "reporter" : "mochawesome",
  "reporterOptions": {
    "charts": true,
    "overwrite": false,
    "html": false,
    "json": true,
    "reportDir": "cypress/report"

  
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.watchForFileChanges= false
      allureWriter(on, config);
      return config
    },
  },
});
