<template>
  <div id="app">
    <Panel></Panel>
    <Form></Form>
  </div>
</template>

<script>
import Panel from "./components/panel.vue";
import Form from "./components/form.vue";
export default {
  name: "App",
  components: {
    Panel,
    Form
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
