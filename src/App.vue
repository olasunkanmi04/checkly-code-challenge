<template>
  <div id="app">
    <Panel
      :startedRecording="startedRecording"
      :editMode="editMode"
      :steps="steps"
      @updateStartRecording="startRecording"
      @updateEditMode="toggleEditMode"
      @deleteCurrentStep="deleteStep"
    ></Panel>
    <FormField
      @updateStep="addStep"
      :startedRecording="startedRecording"
      :editMode="editMode"
    ></FormField>
  </div>
</template>

<script>
import Panel from "./components/panel.vue";
import FormField from "./components/formField.vue";
export default {
  name: "App",
  components: {
    Panel,
    FormField
  },
  data() {
    return {
      startedRecording: false,
      editMode: false,
      steps: []
    };
  },
  methods: {
    startRecording(value) {
      this.startedRecording = value;
    },
    toggleEditMode() {
      this.editMode = !this.editMode;
    },
    addStep(step) {
      this.steps.push(step);
    },
    deleteStep(index) {
      this.steps.splice(index, 1);
    }
  },
  watch: {
    startedRecording(newValue) {
      if (!newValue) {
        this.steps = [];
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 17px 16px;
  width: 100%;
  max-width: 1366px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
</style>
