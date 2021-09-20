<template>
  <div class="container">
    <!-- <b-spinner v-if="loading" /> -->

    <img
      src="https://upload.wikimedia.org/wikipedia/commons/8/82/Giphy-logo.svg"
      alt=""
      class="logo"
    />

    <b-form-input
      v-model="searchQuery"
      placeholder="Giphy name"
      debounce="300"
    ></b-form-input>

    <div v-if="giphys" class="results">
      <div v-for="giphy in giphys" :key="giphy.id" class="item">
        <img :src="giphy.images.original.url" alt="giphy" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import axios from "axios";

@Component({
  components: {},
})
export default class Home extends Vue {
  searchQuery = "";

  giphys = [];

  get url() {
    return `https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${this.searchQuery}`;
  }

  async getGiphys() {
    const { data } = await axios.get(this.url);
    this.giphys = data.data;
  }

  @Watch("searchQuery")
  onSearchQueryhanged() {
    this.getGiphys();
  }
}
</script>

<style lang="scss" scoped>
.container {
  justify-content: center;
}

.results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px 5px;
}

.item {
  img {
    height: 200px;
    width: 300px;
  }
}

.logo {
  max-width: 500px;
  margin: 3rem 0;
}

input {
  max-width: 300px;
  margin: 3rem auto;
}
</style>
