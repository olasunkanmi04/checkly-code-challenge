// https://docs.cypress.io/api/introduction/api.html
// npx cypress run
describe("Buttons action test", () => {
  it("Click start button", () => {
    cy.visit("http://localhost:8080");
    cy.get("#startBtn").click();
    cy.get("#recordingBtn").should("exist");
    cy.get("#recordStep").click();
    cy.get(".recorder").should("exist");
  });

  it("Click stop recording", () => {
    cy.get("#recordingBtn").click();
    cy.get("#editMode").contains("button", "Save");
  });

  it("Click delete", () => {
    cy.get(".recorder__delete").click();
    cy.get(".recorder").should("not.exist");
  });

  it("Click save button", () => {
    cy.get("#saveBtn").click();
    cy.get("#startBtn").should("exist");
  });
});
