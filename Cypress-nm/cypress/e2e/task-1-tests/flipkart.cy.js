describe('flipkart',()=>{
    [];
    it('test',()=>
    {
        cy.visit('https://www.flipkart.com/')
        cy.get('.Pke_EE').click()
        cy.get('.Pke_EE').type('iphone{enter}')
        cy.get('#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2) > div:nth-child(2) > div > div > div > a ').invoke('removeAttr','target').click()
        cy.wait(4000)  
        // cy.get('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-5-12._78xt5Y > div:nth-child(2) > div > ul > li:nth-child(1) > button > svg').click()


    })

})