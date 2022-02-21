class mainPage {
    elements = {
        pnlUserInfo: () => {
            return cy.get("#user-info");
        },
        btnLogout: () => {
            return cy.get(".btnUserLogout");
        },
        tbSearch: () => {
            return cy.get(".col-md-7 > .form-control");
        },
        btnSearch: () => {
            return cy.get(".col-md-1 > .form-control");
        },
        cmbDistrict: () => {
            return cy.get(".select2-selection__placeholder");
        },
        tbDistrict: () => {
            return cy.get(
                "#ys-areaSelector-droparea > span > span > span.select2-search.select2-search--dropdown > input"
            );
        },
        pnlChoice: () => {
            return cy.get(".splash-modal");
        },
        btnCloseChoiceBox: () => {
            return cy.get(".modal-header-close", { timeout: 20000 });
        },
        btnFavorites: () => {
            return cy.get('.ys-userSettings > ul > :nth-child(4) > a');
        },
    };
    logout = () => {
        this.elements.pnlUserInfo().click();
        this.elements.btnLogout().click();
    };
    search = (distinct, query) => {
        this.elements.cmbDistrict().click();
        this.elements.tbDistrict().type(distinct + " {enter}");
        this.elements.btnCloseChoiceBox().click();
        this.elements.tbSearch().type(query);
        this.elements.btnSearch().click();
    };
    closeChoiceBox() {
        //var pnlIsOpen = cy.wrap(this.elements.pnlChoice().)
        //cy.log("Result: " + pnlIsOpen)
        return this.elements.pnlChoice().then(($panel) => {
            if ($panel.hasClass("active")) {
                this.elements.btnCloseChoiceBox().click();
            }
        });
    }
}

module.exports = new mainPage();