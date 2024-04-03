const { defineConfig } = require("cypress");


module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  chromeWebSecurity: false,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  video: false,

  requestTimeout: 15000,

  e2e: {
    baseUrl: "https://docs.cypress.io/guides/overview/why-cypress",
    experimentalRunAllSpecs: true,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 60000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {

    });

      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      
      })
    },
  },

});
