/// <reference types= "cypress" />

describe("Instagram Regression Test suite",  () => {
    it("Validate that user can login to instagram successfully",  () => {
    cy.visit("https://www.instagram.com")
    cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ').type("nat_alyaanderson")
    cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type("DOSKIPLUG")
    cy.get(':nth-child(3) > .sqdOP').click()
    cy.get(':nth-child(2) > .oajrlxb2 > ._ab6-').should("be.visible").click()
    



    });
  
  });
