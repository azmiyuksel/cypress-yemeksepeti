class loginPage {

    usernameValidationMessage = "Lütfen kullanıcı adınızı/e-postanızı giriniz."
    passwordValidationMessage = "Lütfen şifrenizi giriniz."
    elements = {
        tbUsername: () => {
            return cy.get("#UserName");
        },
        tbPassword: () => {
            return cy.get("#password");
        },
        btnLogin: () => {
            return cy.get("#ys-fastlogin-button");
        },
        pnlError: () => {
            return cy.get(".ys-xl > strong");
        },
        lblUsernameValidation: () => {
            return cy.get(":nth-child(1) > div > .help-block");
        },
        lblPasswordValidation: () => {
            return cy.get(":nth-child(2) > div > .help-block");
        },

    };
    login = (username, password) => {
        if (username != "") {
            this.elements.tbUsername().type(username);
        }

        if (password != "") {
            this.elements.tbPassword().type(password);
        }
        this.elements.btnLogin().click();
    };


}
module.exports = new loginPage();