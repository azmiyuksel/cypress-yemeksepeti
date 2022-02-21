/// <reference types="cypress" />

class basePage {
    navigate = () => { cy.visit("/ankara") }
}
module.exports = new basePage();