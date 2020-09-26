<template>
  <div class="wrap">
    <div class="register">
      <b-form-group label="Хронические заболевания" class="mb-3">
        <b-form-radio v-model="сhronicDiseases" name="some-radios1" :value="true">Есть</b-form-radio>
        <b-form-radio v-model="сhronicDiseases" name="some-radios2" :value="false">Нет</b-form-radio>
      </b-form-group>
      <b-form-textarea
        v-if="сhronicDiseases"
        class="mb-3"
        id="textarea"
        v-model="сhronicDiseasesText"
        placeholder="Введите хронические заболевания"
        rows="3"
        max-rows="3"
    ></b-form-textarea>
      <b-form-group label="Текущие заболевания" class="mb-3">
        <b-form-radio v-model="currentDiseases" name="some-radios3" :value="true">Есть</b-form-radio>
        <b-form-radio v-model="currentDiseases" name="some-radios4" :value="false">Нет</b-form-radio>
      </b-form-group>
      <b-form-textarea
        v-if="currentDiseases"
        class="mb-3"
        id="textarea"
        v-model="currentDiseasesText"
        placeholder="Введите текущие заболевания"
        rows="3"
        max-rows="3"
    ></b-form-textarea>
      <b-form-group label="Аллергия" class="mb-3">
        <b-form-radio v-model="allergy" name="some-radios5" :value="true">Есть</b-form-radio>
        <b-form-radio v-model="allergy" name="some-radios6" :value="false">Нет</b-form-radio>
      </b-form-group>
      <b-form-textarea
        v-if="allergy"
        class="mb-3"
        id="textarea"
        v-model="allergyText"
        placeholder="Введите аллергии"
        rows="3"
        max-rows="3"
    ></b-form-textarea>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  
  сhronicDiseases = null
  currentDiseases = null
  allergy = null

  сhronicDiseasesText = ''
  currentDiseasesText = ''
  allergyText = ''
}
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
}

input {
  margin: 20px 0;
}

.register {
  padding: 30px;
}
</style>

<style lang="scss">
.bv-no-focus-ring {
  display: flex;
  justify-content: space-between;
}
</style>
