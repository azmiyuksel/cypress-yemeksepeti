class restaurantPage {
    elements = {
        btnAddToFavorites: () => {
            return cy.get(".add > b");
        },
    };
}

module.exports = new restaurantPage();