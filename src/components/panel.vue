<template>
  <div class="panel">
    <div class="panel__content">
      <div class="panel__recorder">
        <Step
          :editMode="editMode"
          :step="step"
          :index="index"
          v-for="(step, index) in steps"
          :key="index"
          @deleteStep="deleteCurrentStep"
        ></Step>
      </div>
      <div class="panel__action">
        <button
          id="startBtn"
          class="panel__btn"
          v-if="!startedRecording"
          @click="$emit('updateStartRecording', true)"
        >
          Start
        </button>
        <button
          id="recordingBtn"
          class="panel__btn"
          v-if="startedRecording && !editMode"
          @click="$emit('updateEditMode')"
        >
          Recording...
        </button>
        <div id="editMode" class="panel__action-others" v-if="editMode">
          <button id="saveBtn" class="panel__btn" @click="saveRecording">
            Save
          </button>
          <button
            id="continueBtn"
            class="panel__btn"
            @click="$emit('updateEditMode')"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Step from "./step.vue";
export default {
  name: "leftPanel",
  components: {
    Step
  },
  props: {
    startedRecording: Boolean,
    editMode: Boolean,
    steps: Array
  },
  data() {
    return {
      edit: false
    };
  },
  methods: {
    saveRecording() {
      this.$emit("updateStartRecording", false);
      this.$emit("updateEditMode", false);
    },
    deleteCurrentStep(index) {
      this.$emit("deleteCurrentStep", index);
    }
  }
};
</script>

<style lang="scss">
.panel {
  height: calc(100vh - 50px);
  background: #e8e8e8;
  width: 290px;
  overflow-y: auto;
  position: relative;
  padding: 10px 15px;
  &__content {
    position: absolute;
    width: calc(100% - 30px);
    bottom: 10px;
  }

  &__action {
    &-others {
      display: flex;
      .panel__btn {
        &:first-child {
          margin-right: 30px;
        }
      }
    }
  }
  &__btn {
    width: 100%;
    background: #c4c4c4;
    border-radius: 4px;
    height: 38px;
    border: none;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #000000;
    font-weight: 600;
    cursor: pointer;
  }

  &__recorder {
    height: auto;
    max-height: calc(100vh - 100px);
    margin-bottom: 10px;
    overflow-y: auto;
  }
}
</style>
