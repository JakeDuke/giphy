<template>
  <div class="container">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/8/82/Giphy-logo.svg"
      alt=""
      class="logo"
    />

    <b-form-input
      v-model="searchQuery"
      placeholder="Type giphy name here"
      debounce="300"
    ></b-form-input>

    <div v-if="error">
      <h3>{{ error }}</h3>
    </div>

    <div v-else-if="giphys" class="wrap">
      <div class="results">
        <div v-for="giphy in giphys" :key="giphy.id" class="item">
          <img :src="giphy.images.original.url" alt="giphy" />
        </div>
      </div>

      <b-pagination
        v-if="totalCount > perPage"
        v-model="currentPage"
        :total-rows="totalCount"
        :per-page="perPage"
      ></b-pagination>
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
  perPage = 21;
  currentPage = 1;
  totalCount = 0;
  giphys = [];
  error = "";

  get offset() {
    return this.perPage * (this.currentPage - 1);
  }

  get url() {
    return `https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${this.searchQuery}&offset=${this.offset}&limit=${this.perPage}`;
  }

  async getGiphys() {
    this.error = "";
    this.giphys = [];
    try {
      const { data } = await axios.get(this.url);
      this.totalCount = data.pagination.total_count;
      this.giphys = data.data;
    } catch (e) {
      this.error = "Nothing was found";
    }
  }

  @Watch("searchQuery")
  onSearchQuerychanged() {
    this.getGiphys();
  }

  @Watch("currentPage")
  onCurrentPagechanged() {
    this.getGiphys();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px 5px;
  margin: 3rem 0;
  width: 100%;
}

.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
