let BASE_URL = "http://127.0.0.1:3000/index.html";

describe("Заполнение формы", () => {
    beforeEach(() => {
        cy.visit(BASE_URL);
    })

    it("Заполнение формы", () => {
        cy.get('button.hero-btn').click();

        cy.get('#form-container').should('be.visible');
        cy.get('input#firstName').should('be.visible');
        cy.get('input#lastName').should('be.visible');

        cy.get('input#firstName').clear().type("Ivan");
        cy.get('input#lastName').clear().type("Chernikov");
        cy.get('input#phone').type("+79639709320");
        cy.get('input#experience').type("Пол года");
        cy.get('#male').check();
        cy.get('button.send-btn').click();

        cy.on('window:alert', (text) => {
    expect(text).to.equal('Форма была успешно заполнена! Ожидайте обратной связи!')
        })

    });
})