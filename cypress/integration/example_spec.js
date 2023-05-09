describe("Example Cypress test", () => {
 it("visits the home page", () => {
  cy.visit("/");
  cy.contains("Welcome to React App"); // Replace with the text of your home page
 });
});
