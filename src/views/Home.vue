<template>
  <div class="main">
    <b-spinner v-if="loading" />
    <div v-else class="w-100">
      <h3>{{ headerName }}</h3>
      <Register v-if="visibleComponent === 1" />
      <Credentials v-if="visibleComponent === 2" />
      <BasicInfo v-if="visibleComponent === 3" />
      <SosButton v-if="visibleComponent === 4" />
      <b-button v-if="visibleComponent !== 4" pill variant="primary" @click="setVisible">
        {{ visibleComponent === 1 ? 'Войти' : 'Далее' }}
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Register from "@/components/Register.vue";
import Credentials from "@/components/Credentials.vue";
import BasicInfo from "@/components/BasicInfo.vue";
import SosButton from "@/components/SosButton.vue";

@Component({
  components: {
    Register,
    Credentials,
    BasicInfo,
    SosButton
  }
})
export default class Home extends Vue {
  get loading() {
    return this.$store.state.loading
  }

  load () {
    this.$store.commit('load')
  }

  get headerName () {
    switch (this.visibleComponent) {
      case 2:
      return 'Личные данные'

      case 3:
      return 'Информация о болезнях'

      default:
      return ''
    }
  }

  visibleComponent = 1

  setVisible () {
    this.visibleComponent++
    this.load()
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
  position: relative;
}

.spinner-border {
  width: 4rem;
  height: 4rem;
}

.btn {
  margin-top: 60px;
  padding: 12px 30px;
  min-width: 160px;
  font-size: 18px;
}

h3 {
  position: absolute;
  top: 0;
  text-align: center;
  width: 100%;
  font-size: 22px;
}
</style>
