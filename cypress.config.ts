import { defineConfig } from "cypress";

export default defineConfig({
  screenshotOnRunFailure: true,
  video: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  viewportWidth: 1024,
  viewportHeight: 768,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    overwrite: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  }
});
