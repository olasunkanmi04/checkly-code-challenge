// https://docs.cypress.io/api/introduction/api.html
// npx cypress run
describe("Buttons action test", () => {
  it("Click start button", () => {
    cy.visit("http://localhost:8083");
    cy.get("#startBtn").click();
    cy.get("#recordingBtn");
    cy.get("#recordStep").click();
    cy.get(".recorder");
  });

  it("Click stop recording", () => {
    cy.get("#recordingBtn").click();
    cy.get("#editMode").contains("button", "Save");
  });

  it("Click save button", () => {
    cy.get("#saveBtn").click();
    cy.get("#startBtn").contains("Start");
  });
});
