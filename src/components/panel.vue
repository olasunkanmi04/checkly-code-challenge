<template>
  <div class="panel__wrap">
    <div class="panel__action">
      <button class="panel__btn">Start</button>
      <button class="panel__btn">Recording...</button>
      <div class="panel__action-others">
        <button class="panel__btn">Save</button>
        <button class="panel__btn">Continue</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftPanel",
  data() {
    return {
      startRecording: false,
      stopRecording: false
    };
  }
};
</script>

<style lang="scss" scoped>
.panel {
  &__wrap {
    height: calc(100vh - 50px);
    background: #e8e8e8;
    width: 290px;
    overflow-y: auto;
    position: relative;
    padding: 10px 15px;
  }
  &__action {
    position: absolute;
    width: calc(100% - 30px);
    bottom: 10px;
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
  }
}
</style>
