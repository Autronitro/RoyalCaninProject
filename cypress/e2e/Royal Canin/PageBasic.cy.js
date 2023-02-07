import Basic from './Page Object Royal Canin/Basic Plus page page object'

describe("PageBasicPlus", function() {
  
const jsonData = require('C:/Users/vitaliy.tsalko/Downloads/RoyalCaninProject/cypress/fixtures/PagesBasic.json')
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
    Basic.socialShareLarge().should('be.visible')
})
  
})
    
    })
  