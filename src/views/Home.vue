<template>
  <div class="main">
    <b-spinner v-if="loading" />
    <Register v-else msg="Welcome to Your Vue.js + TypeScript App" />
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
export default class Home extends Vue {
  get loading() {
    return this.$store.state.loading
  }
}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
