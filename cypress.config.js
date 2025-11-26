const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa-challenge.codesubmit.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    specPattern: 'cypress/integration/**/*.spec.js',
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    video: false
  }
})
