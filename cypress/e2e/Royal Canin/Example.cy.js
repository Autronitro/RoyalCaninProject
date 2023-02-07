describe("PageBasicPlus", function() {
  
  
  it("Test", function() {
  cy.visit('https://rh-sc-rlt-weu-01.rlt.royalcanin.com/us/dogs/breeds/perro-de-presa-mallorquin')
  cy.get('#onetrust-accept-btn-handler').click()

  //Basic.pageHeaderHeadline().invoke('text').then((text) => {expect(text.length).to.be.at.least(5)}) 
  cy.get('[data-qa="pageheader-headline"]').invoke('text').then((text) => {expect(text.length).to.be.at.least(5)})

  cy.get('[data-qa="social-share"]').should('be.visible')
  cy.get('[data-qa="pageheader-paragraph"]').invoke('text').then((text) => {
  expect(text.length).to.be.at.least(10)
})
    // cy.get('[style="color: #384047; margin-right: 0px; margin-bottom: 25px; margin-left: 0px; border: none;"]').invoke('text').then((text) => {
    // expect(text.length).to.be.at.least(15)
    // })
    cy.contains('Source: key facts and characteristics sourced from Fédération Cynologique Internationale (FCI)').should('be.visible')
    cy.get(':nth-child(3) > [data-qa="variation"] > :nth-child(1) > [data-qa="content-block"] > [data-qa="content-block-variant-inner"] > [data-qa="content-blocks-text"] > [data-qa="content-block-title"]').should('include.text', 'About')
    cy.contains('Breed Specifics').should('be.visible')
    cy.contains('Key facts').should('be.visible')
    cy.contains('A healthy start to life').should('be.visible')
    cy.contains('Lifetime of health').should('be.visible')
    cy.contains('Puppyhood is a time of massive physical and behavioral change, and a steep learning curve for new owners. Find out how you can provide your puppy with the best start to life so they develop into strong, healthy dogs.').should('be.visible')
    cy.contains('Get advice and information on how to provide the best care for your dog at every stage of life.').should('be.visible')
    cy.get(':nth-child(1) > [data-qa="content-block"] > [data-qa="content-block-variant-inner"] > [data-qa="content-blocks-text"] > .sc-gJfQTX > [data-qa="btn-content-block-secondary"]').should('be.visible')
    cy.get(':nth-child(2) > [data-qa="content-block"] > [data-qa="content-block-variant-inner"] > [data-qa="content-blocks-text"] > .sc-gJfQTX > [data-qa="btn-content-block-secondary"]').should('be.visible')
    cy.get('[data-qa="large-social-share"]').should('be.visible')
})
  
});
    

    
  