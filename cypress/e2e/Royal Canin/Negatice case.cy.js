import Basic from './Page Object Royal Canin/Basic Plus page page object'

describe("PageBasicPlus", function() {

  it("Negative case", function() {
  cy.visit('https://rh-sc-rlt-weu-01.rlt.royalcanin.com/us/dogs/breeds/Peruvian%20Inca%20Orchid')
  cy.get('#onetrust-accept-btn-handler').click()

  Basic.pageHeaderHeadline().invoke('text').then((text) => {expect(text.length).to.be.at.least(5)})
  Basic.socialShare().should('be.visible')
  Basic.pageHeaderParagraph().invoke('text').then((text) => {
  expect(text.length).to.be.at.least(10)
})
   // Basic.aboutBreed2().should('be.visible')
    Basic.aboutBreedTitle().should('include.text', 'About')
    Basic.breedSpecifics().should('be.visible')
    Basic.keyFacts().should('be.visible')
    Basic.healthyStart().should('be.visible')
    //Basic.LifetimeOfHealth().should('be.visible')
    //Basic.healthyStartBlock().should('be.visible')
    //Basic.LifetimeOfHealtBlock().should('be.visible')
    Basic.learnMoreButton1().should('be.visible')
    Basic.learnMoreButton2().should('be.visible')
    Basic.socialShareLarge().should('be.visible')
})
  
});
    

  
  