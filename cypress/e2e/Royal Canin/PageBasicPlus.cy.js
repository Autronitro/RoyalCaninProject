import Basic from './Page Object Royal Canin/Basic Plus page page object'

describe("PageBasicPlus", function() {
  
const jsonData = require('C:/Users/vitaliy.tsalko/Downloads/RoyalCaninProject/cypress/fixtures/PagesBasicPlus.json')
jsonData.Pages.forEach((page) => {
  
  it(`${page.title}`, function() {
  cy.visit(page.url)
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
  
})
    

    })
  