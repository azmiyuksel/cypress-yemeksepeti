class resultsPage {
    elements = {
        listRestaurants: () => {
            return cy.get(".restaurantName");
        },

        lblRestaurantName: (index) => {
            return cy.get(
                ":nth-child(" +
                index +
                ") > .ys-result-header > .restaurant-main-info > .head > .restaurant-display-name > .restaurantName"
            );
        },
    };
}

module.exports = new resultsPage();