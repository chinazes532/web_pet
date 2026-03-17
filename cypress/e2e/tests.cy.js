let BASE_URL = "http://127.0.0.1:5500/index.html";

describe("Заполнение формы", () => {
    beforeEach(() => {
        cy.visit(BASE_URL);
    })

    it("Заполнение формы", () => {
        cy.get('button.hero-btn').click();

        cy.get('#form-container').should('be.visible');
        cy.get('input#firstName').should('be.visible');
        cy.get('input#lastName').should('be.visible');

        cy.get('input#firstName').type("Ivan").wait(10);
        cy.get('input#lastName').type("Chernikov");
        cy.get('input#phone').type("+79639709320");
        cy.get('input#experience').type("Пол года");
        cy.get('#male').check();
        cy.get('button.send-btn').click();
    });
})