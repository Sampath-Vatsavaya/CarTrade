describe('flipkart', () => {

    it('test', () => {
        cy.visit('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=674842289437&hvpos=&hvnetw=g&hvrand=7780045313866445998&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9179915&hvtargid=kwd-10573980&hydadcr=14453_2316415')
        cy.get('#twotabsearchtextbox').click()
        cy.get('#twotabsearchtextbox').type('iphone{enter}')
        cy.get('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.s-wide-grid-style.sg-row > div.sg-col-20-of-24.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span.rush-component.s-latency-cf-section > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(7) > div > div > div > div > span > div > div > div > div.puisg-col.puisg-col-4-of-12.puisg-col-8-of-16.puisg-col-12-of-20.puisg-col-12-of-24.puis-list-col-right > div > div > div.a-section.a-spacing-none.puis-padding-right-small.s-title-instructions-style > h2 > a').invoke('removeAttr', 'target').click()
        cy.wait(4000)


    })

})