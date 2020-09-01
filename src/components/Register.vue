<template>
  <div class="wrap">
    <div class="register">
      <b-form-input v-model="email" placeholder="Enter your email"></b-form-input>
      <b-form-input v-model="password" placeholder="Enter your password"></b-form-input>
    </div>
    <b-button pill variant="success" @click="loadddd">Register</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  email = ''
  password = ''

  loadddd () {
    this.$store.commit('load')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap {
  width: 100%;
}

input {
  margin: 20px 0;
}

.btn {
  margin-top: 30px;
  padding: 10px 20px;
} 
</style>
