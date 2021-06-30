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

### Compiles and minifies for production

```
npm run build
```

## How I approached the challenge

I set up my development environment using Vue CLI as the challenge required I use Vuejs.
I then proceed to break the challenge into stages.

- Code the UI interface
  - Component-base approach
  - SCSS for styling
- Code the functionalities

## Code the UI interface

### Component base approach

I split the UI into components.
I made the left panel a component, the step recorder a component and the form a component.
This will make the various components reusable in the future and with every components being a single file it makes code readablility easier

### SCSS for styling

I installed sass-loader and node-sass loader to enable me use SCSS.
I stuck to styling in individual components instead of creating a styling sheet because it's a small project that don't need so much of unnecessary files that I could do away with. I also used the BEM stylying methodology to enable a self explanatory class naming convenention.

## Code the functionalities

I created an interaction between the components using `props` and `$emit`.
I introduced a couple of variables in the root component, App.vue

#### startRecording:

This works as a recording status to determine the start of recording and the end of it depending on its boolean state.
I pass it to the child component, panel.vue to determine the state of the start, stop, save and continue button.
I also pass it to the child component, formField.vue to determine when to start listening to clicks.

#### editMode:

This works as an edit status to determine edit state depending on its boolean state
I pass it to the child component, panel.vue to determine the edit state of the steps.
I also pass it to the child component, formField.vue to determine when to pause on listening to clicks on the form elements.

#### steps:

The recorded steps are stored in this variable array.
I pass this array of steps to the panel.vue component and loop through the recorded steps and display using the step.vue component.

The Various variables are passed to the child components using `props` and I created different methods that are called from the various child components using `$emit` to determine the state of the various variables.
