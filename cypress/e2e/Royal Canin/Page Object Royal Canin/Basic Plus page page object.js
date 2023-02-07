class Basic {

    Basic(){
        return this
    }
    
    pageHeaderHeadline(){
        return  cy.get('[data-qa="pageheader-headline"]')
    }
    
    socialShare(){
        return  cy.get('[data-qa="social-share"]')
    
    }
    
    pageHeaderParagraph(){
        return cy.get('[data-qa="pageheader-paragraph"]')
    }

    aboutBreed1(){
        return cy.get('[style="color: #384047; margin-right: 0px; margin-bottom: 25px; margin-left: 0px; border: none;"]')
    }

    aboutBreed2(){
        return cy.contains('Source: key facts and characteristics sourced from Fédération Cynologique Internationale (FCI)')
    }

    aboutBreedTitle(){
        return cy.get(':nth-child(3) > [data-qa="variation"] > :nth-child(1) > [data-qa="content-block"] > [data-qa="content-block-variant-inner"] > [data-qa="content-blocks-text"] > [data-qa="content-block-title"]')
    }

    breedSpecifics(){
        return cy.contains('Breed Specifics')
    }

    keyFacts(){
        return cy.contains('Key facts')
    }

    healthyStart(){
        return cy.contains('A healthy start to life')
    }

    LifetimeOfHealth(){
        return cy.contains('Lifetime of health')
    }

    healthyStartBlock(){
        return cy.contains('Puppyhood is a time of massive physical and behavioral change, and a steep learning curve for new owners. Find out how you can provide your puppy with the best start to life so they develop into strong, healthy dogs.')
    }

    LifetimeOfHealtBlock(){
        return cy.contains('Get advice and information on how to provide the best care for your dog at every stage of life.')
    }

    learnMoreButton1(){
        return cy.get(':nth-child(1) > [data-qa="content-block"] > [data-qa="content-block-variant-inner"] > [data-qa="content-blocks-text"] > .sc-gJfQTX > [data-qa="btn-content-block-secondary"]')
    }

    learnMoreButton2(){
        return cy.get(':nth-child(2) > [data-qa="content-block"] > [data-qa="content-block-variant-inner"] > [data-qa="content-blocks-text"] > .sc-gJfQTX > [data-qa="btn-content-block-secondary"]')
    }

    socialShareLarge(){
        return  cy.get('[data-qa="large-social-share"]')
    
    }

    }
    
    export default new Basic;