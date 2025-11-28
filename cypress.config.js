const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qa-challenge.codesubmit.io",
    specPattern: "cypress/e2e/**/*.spec.js",
    supportFile: "cypress/support/e2e.js",
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    video: false,

    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        // Disable service workers to stop Backtrace 401 spam
        if (browser.family === 'chromium') {
          launchOptions.args.push('--disable-service-worker');
        }
        return launchOptions;
      });
    }
  }
});
