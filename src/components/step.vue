<template>
  <div class="recorder">
    <p class="recorder__step">Step {{ index + 1 }}</p>
    <span
      class="recorder__delete"
      v-if="editMode"
      @click="
        () => {
          $emit('deleteStep', index);
        }
      "
      >Delete</span
    >
    <div class="recorder__step-element">
      <p class="recorder__step" style="margin-bottom:0">Element</p>
      <input
        type="text"
        :disabled="!editMode"
        class="recorder__step-input"
        :value="step"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "recoder",
  props: {
    editMode: Boolean,
    step: String,
    index: Number
  }
};
</script>

<style lang="scss" scoped>
.recorder {
  background: #fdfbfb;
  border-radius: 4px;
  width: 100%;
  padding: 17px 22px;
  box-sizing: border-box;
  margin-bottom: 9px;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }

  &__step {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
    margin-bottom: 23px;
    margin-top: 0;

    &-input {
      font-weight: normal;
      color: #000000;
      margin-left: 14px;
      background: #fdfbfb;
      border: 1px solid #000000;
      box-sizing: border-box;
      height: 26px;
      padding: 6px;
      &:disabled {
        background: #fdfbfb;
        border: none;
      }
    }

    &-element {
      display: flex;
      align-items: center;
      .recorder-step {
        margin-bottom: 0;
      }
    }
  }

  &__delete {
    cursor: pointer;
    position: absolute;
    color: red;
    font-size: 12px;
    top: 17px;
    right: 22px;
  }
}
</style>
