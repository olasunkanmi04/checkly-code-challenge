<template>
  <form class="form">
    <h3>MOCK UP FORM</h3>
    <input class="form__field" type="text" placeholder="Input box 1" />
    <input class="form__field" type="text" placeholder="Input box 2" />
    <div class="form__radio-wrap">
      <input class="form__radio" type="radio" name="radio" id="radio1" />
      <label for="radio1">Radio button 1</label>
    </div>
    <div class="form__radio-wrap">
      <input class="form__radio" type="radio" name="radio" id="radio2" />
      <label for="radio2">Radio button 2</label>
    </div>
    <div class="form__radio-wrap">
      <input class="form__radio" type="radio" name="radio" id="radio3" />
      <label for="radio3">Radio button 3</label>
    </div>
    <button class="form__button">Button 1</button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss">
.form {
  padding-left: 100px;
  padding-right: 20px;

  &__field {
    display: block;
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    margin-bottom: 18px;
    padding: 9px 18px;
    width: 490px;
  }

  &__radio {
    cursor: pointer;

    &-wrap {
      margin-bottom: 12px;
    }
    label {
      font-weight: 600;
      color: #000000;
      margin-left: 10px;
      cursor: pointer;
    }
  }

  &__button {
    background: #c4c4c4;
    border-radius: 4px;
    width: 111px;
    height: 32px;
    border: none;
  }
}
</style>
