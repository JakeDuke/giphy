<template>
  <div class="main">
    <b-spinner v-if="loading" />
    <div v-else class="w-100">
      <!-- <Register /> -->
      <!-- <Credentials /> -->
      <BasicInfo />
      <b-button pill variant="success" @click="load">Далее</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Register from "@/components/Register.vue";
import Credentials from "@/components/Credentials.vue";
import BasicInfo from "@/components/BasicInfo.vue";

@Component({
  components: {
    Register,
    Credentials,
    BasicInfo
  }
})
export default class Home extends Vue {
  get loading() {
    return this.$store.state.loading
  }

  load () {
    this.$store.commit('load')
  }
}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.spinner-border {
  width: 4rem;
  height: 4rem;
}

.btn {
  margin-top: 30px;
  padding: 10px 20px;
  min-width: 120px;
} 
</style>
