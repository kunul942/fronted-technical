describe('Newsletter component', () => {
    it('displays the newsletter signup message in local', () => {
        cy.visit('/');
        cy.contains('Stay in touch');
    });
});
