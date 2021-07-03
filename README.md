# checkly-code-challenge

Build a proof-of-concept that implements the mocked up flow:

- One screen, divided in a left panel and main area. No login or anything else required.
- Fake the website by just hard coding a simple form with some headers, input fields, radio buttons and submit buttons inside the app.
- The emphasis is on the left panel where the user can:
  - Start a recording.
  - Stop a recording and continue.
  - Edit or delete the recorded steps.
- The recorded steps should reflect the actual CSS selectors.
- You are free to add things you really find necessary or important.
- Use Vue.js and whatever other library you want.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Run E2E test

```
npx cypress run
```

## How I approached the challenge

I start by setting up my development environment using Vue CLI as the challenge required I use Vuejs.
I then proceed to break the challenge into stages.

- [Code the UI interface](#component-base-approach)
  - [Component-base approach](#component-base-approach)
  - [SCSS for styling](#scss-for-styling)
- [Code the functionalities](#code-the-functionalities)
- [Add E2E testing](#add-e2e-testing)

## Code the UI interface

### Component-base approach

I split the UI into components.
I made the left panel, the step recorder and the form individual components.
This will make the various components reusable in the future and with every components being a single file it makes code readablility easier.

### SCSS for styling

I installed sass-loader and node-sass loader to enable me use SCSS.
I stuck to styling in individual components instead of creating a style sheet, because, it's a small project that don't need so much of unnecessary files that I could do away with. I also used the BEM stylying methodology to enable a self explanatory class naming convenention.

## Code the functionalities

I created an interaction between the components using `props` and `$emit`.
I then introduced a couple of variables in the root component, `App.vue`

#### startRecording:

This works as a recording status to determine the start of recording and the end of it depending on its boolean state.
I pass it to the child component, `panel.vue` to determine the state of the start, stop, save and continue `button`.
I also pass it to the child component, `formField.vue` to determine when to start listening to clicks.

#### editMode:

This works as an edit status to determine edit state depending on its boolean state
I pass it to the child component, `panel.vue` to determine the edit state of the steps.
I also pass it to the child component, `formField.vue` to determine when to pause on listening to clicks on the form elements.

#### steps:

The recorded steps are stored in this variable `array`.
I pass this `array` of steps to the `panel.vue` component, loop through the recorded steps and display using the `step.vue` component.

The variables listed above are now passed to the child components using `props` and I created different methods that are called from the various child components using `$emit` to determine their state.

### Recorder

To record a step I had to create a method that listen to click event on each form element and then return the event dom
data. I checked the `target` key and extract the `localName`, `type` and `classes` of the clicked element.
I added `type` because there are different input types and it helps to differenciate the inputs in the recorder.

### Edit step

When the 'Recording...' `button` is clicked it stops/pause the recorder by changing the boolean state of [editMode](#editMode) to enable the edit of the recorded step by undisabling the `input` field.
I initially made the [steps](#steps) an `array` of `strings` but once I edit the step and click save it returns back to it's intial state, so I had to make [steps](#steps) an `array` of `objects` and passing the value to Vue `v-model` it then became editable and stays same after save is clicked.

### Delete step

I impplemented a delete function that takes the index of the step whose delete was clicked and remove it from the steps `array` using `splice`

## Add E2E testing

I added e2e testing to test the click events on the various buttons.
Using [Cypress](https://www.cypress.io/) for the testing, I tested the click on the Start `button` which should change the boolean state of the [startRecording](#startRecording) to true and I used Vue conditional rendering `v-if` to render the Recording `button`.
I also did same for Recording `button` which on click acts as stop/pause `button` and changes the boolean state of the [editMode](#editMode) which then renders the Save and Continue `button`s.

In order to test the recording of steps, I wrote a test to listen for a click on the only button on the form and check that the step component is rendered by checking if the `.recorder` class exist in the application. I also had a test for delete function.

All test passed!
