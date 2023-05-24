describe("Log in user, create a new venue post", () => {
 it("Visit the create venue form page", () => {
  cy.visit("/");
  cy.get('[data-cy="navigation-icon-button"]').click();
  cy.get('[data-cy="dropdown-menu"]').should("be.visible");
  cy.get('[data-cy="login-button"]').click();
  cy.fixture("example").then((data) => {
   cy.get('[data-cy="email-input"]').type(data.email);
   cy.get('[data-cy="password-input"]').type(data.password);
   cy.get('[data-cy="login-button"]').click();
   cy.url().should("include", "/profile");
   cy.wait(2000);
   cy.visit("/venue/create");
   cy.fixture("venueForm").then((data) => {
    cy.get('[data-cy="venueName"]').type(data.name);
    cy.get('[data-cy="venueDescription"]').type(data.description);
    cy.get('[data-cy="wifi"]').click();
    cy.get('[data-cy="parking"]').click();
    cy.get('[data-cy="breakfast"]').click();
    cy.get('[data-cy="pets"]').click();
    cy.get('[data-cy="venueImage"]').type(data.image);
    cy.get('[data-cy="address"]').type(data.address);
    cy.get('[data-cy="city"]').type(data.city);
    cy.get('[data-cy="zip"]').type(data.zip);
    cy.get('[data-cy="country"]').type(data.country);
    cy.get('[data-cy="continent"]').type(data.continent);
    cy.get('[data-cy="price"]').type(data.price);
    cy.get('[data-cy="maxGuests"]').type(data.guests);
    cy.get('[data-cy="postVenue"]').click();
    cy.wait(2000);
    cy.url().should("include", "/venue/");
   });
  });
 });
});
