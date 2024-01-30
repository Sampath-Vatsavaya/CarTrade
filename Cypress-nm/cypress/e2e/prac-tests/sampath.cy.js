describe('Sampath Vatsavaya Github', () => {
  it('Weather App Code is Downloaded ', () => {
    cy.visit('https://simonsmith.github.io/github-user-search/#/search')
    cy.get('#searchInput').type("Sampath-Vatsavaya")
    cy.wait(1000)
    cy.get('.SearchForm_e296pg > button').click()
    cy.wait(1000)
    cy.get('.User_abw475').click()
    cy.get('#root > div > div.u-flexGrow1 > div > div > div > div.Profile_content_rci9mp.Grid.Grid--withGutter > div.Profile_repos_koa90h.Grid-cell.u-sm-size1of2 > ul > li:nth-child(3) > div > p > a').click()
    cy.origin('https://github.com/Sampath-Vatsavaya/weatherapp', () => {
      cy.get('.cfXmZY').click({force:true})
      cy.get('#\\:rb\\:--label').click({force:true})
      
        })
  })
})