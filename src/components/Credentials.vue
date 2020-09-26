<template>
  <div class="wrap">
    <div class="register">
      <b-form-input v-model="email" placeholder="Имя"></b-form-input>
      <b-form-input v-model="password" placeholder="Фамилия"></b-form-input>
      <b-form-input v-model="age" placeholder="Возраст"></b-form-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  name = ''
  lastname = ''
  age = ''
}
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
}

input {
  margin: 20px 0;
}
</style>
