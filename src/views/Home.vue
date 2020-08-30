<template>
  <div class="main">
    <Register msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Register from "@/components/Register.vue"; // @ is an alias to /src

@Component({
  components: {
    Register
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
