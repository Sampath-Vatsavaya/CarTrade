describe("git sign up",()=>{


    it("test1",()=>{
        cy.visit("https://github.com/signup");
        cy.xpath('/html/body/div[1]/div[4]/div[4]/div[2]/footer/div/nav/ul/li[4]/a').click()
    })



})