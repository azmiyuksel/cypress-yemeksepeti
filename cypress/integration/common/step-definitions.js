import {
    Before,
    After,
    Given,
    Then,
    When,
    And,
} from "cypress-cucumber-preprocessor/steps";
import basePage from "../../page-objects/basePage";
import favoritesPage from "../../page-objects/favoritesPage";
import loginPage, { login } from "../../page-objects/loginPage";
import mainPage from "../../page-objects/mainPage";
import restaurantPage from "../../page-objects/restaurantPage";
import resultsPage from "../../page-objects/resultsPage";

Given("Yemeksepeti application is up and working", () => {
    basePage.navigate();
});

When(
    "Login with credentials as username: {string} and password: {string}",
    (username, password) => {
        loginPage.login(username, password);
    }
);

Then("Login successful and main page is displayed", () => {
    mainPage.elements.pnlUserInfo().should("be.visible");
});

Then("Login credentials are wrong and error message is displayed", () => {
    loginPage.elements
        .pnlError()
        .should("be.visible")
        .should("contain.text", "Hatalı giriş");
});

Then("Logout", () => {
    mainPage.logout();
});

Then(
    "Validation text is visible for username: {string} and password: {string}",
    (username, password) => {
        if (username.trim() == "") {
            loginPage.elements
                .lblUsernameValidation()
                .should("be.visible")
                .should("have.text", loginPage.usernameValidationMessage);
        }
        if (password == "") {
            loginPage.elements
                .lblPasswordValidation()
                .should("be.visible")
                .should("have.text", loginPage.passwordValidationMessage);
        }
    }
);

When("User searched for {string} in {string}", (restaurant, distinct) => {
    mainPage.search(distinct, restaurant);
});

Then(
    "Results page is opened and first result contains {string}",
    (restaurant) => {
        resultsPage.elements
            .lblRestaurantName(1)
            .should("contain.text", restaurant);
    }
);

When("Add {string} restaurant to the list", (restaurantName) => {
    resultsPage.elements.lblRestaurantName(1).click();
    restaurantPage.elements.btnAddToFavorites().click();
});

Then("Favorite restaurant count should be {int}", (restaurantCount) => {
    mainPage.elements.pnlUserInfo().click();
    mainPage.elements.btnFavorites().click();
    if (restaurantCount != 0) {
        favoritesPage.elements
            .listRestaurants()
            .children()
            .should("have.length", restaurantCount);
    } else {
        favoritesPage.elements.pnlNoFavorite().should("be.visible")
    }
});

When("Removing first restaurant from the list", () => {
    mainPage.elements.pnlUserInfo().click();
    mainPage.elements.btnFavorites().click();
    favoritesPage.removeRestaurant(1)
});