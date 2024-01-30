describe('EMI Test', function()
{
    it('Input Test' , function()
    {
        cy.visit("https://suryadegala1117.github.io/EMI-Calculator/");
        cy.get("#loan").type('10000');
        cy.get('#Interest').type('10');
        cy.get('#time').type('10');
        cy.get('#calculate_op').click();
        cy.get('#output').should('contain','2000');
    })
    it('-ve case' , function()
    {
        cy.visit("https://suryadegala1117.github.io/EMI-Calculator/");
        cy.get("#loan").type('10000');
        cy.get('#Interest').type('10');
        cy.get('#time').type('15');
        cy.get('#calculate_op').click();
        cy.get('#output').should('not.eq','1667');
    })
}
)