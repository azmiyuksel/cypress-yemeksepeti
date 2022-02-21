class favoritesPage {
    elements = {
        listRestaurants: () => {
            return cy.get(".favorites");
        },

        cbRestaurant: (index) => {
            return cy.get(":nth-child(" + index + ") > input");
        },

        btnDelete: () => {
            return cy.get(".actions > .ys-btn");
        },
        pnlNoFavorite: () => {
            return cy.get(".no-favorite");
        },
    };

    removeRestaurant = (index) => {
        this.elements.cbRestaurant(index).click();
        this.elements.btnDelete().click();
    };
}

module.exports = new favoritesPage();