<template>
  <div class="wrap">
    <div class="register">
      <b-form-input id="search" placeholder="Giphy name"></b-form-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Search extends Vue {}
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
