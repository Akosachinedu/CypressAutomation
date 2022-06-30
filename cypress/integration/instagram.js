/// <reference types= "cypress" />

describe("Instagram Regression Test suite",  () => {
   it("Validate that user with valid details can login to the Instagram successfully",  () => {
    cy.visit("https://www.instagram.com/")
    cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ').type("nat_alyaanderson")
    cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type("DOSKIPLUG")
    cy.get('.sqdOP > .qF0y9').click()
   });

  });
  