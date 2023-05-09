describe("Example Cypress test", () => {
 it("visits the home page", () => {
  cy.visit("/");
 });
});

describe("Navigate and login user", () => {
 it("should navigate to the login form and log in a user, then display the profile page with the dashboard", () => {
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
  });

  it("should pause for 5 seconds", () => {
   cy.pause();
   cy.wait(2000);
  });

  it("Should navigate user to the tab for venues", () => {
   cy.get('[data-cy="venue-tab"]').click();
  });
 });
});
