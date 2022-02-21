const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json", // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    openReportInBrowser: true,
    pageTitle: "Yemek Sepeti - Sample Test Page",
    reportName: "Yemek Sepeti Case Report",
    metadata: {
        browser: {
            name: "Chrome",
            version: "97",
        },
        device: "Local test machine",
        platform: {
            name: "linux",
            version: "1.2",
        },
    },
    displayReportTime: true,
    displayDuration: true

});