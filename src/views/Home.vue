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

    <template v-if="loading && allLoaded === false">
      <div class="text-center">
        <b-spinner variant="primary"></b-spinner>
      </div>
    </template>

    <template v-else>
      <div v-if="error">
        <h3>{{ error }}</h3>
      </div>

      <div v-else-if="giphys" class="wrap">
        <h3 v-show="allLoaded === false" class="text-center">
          Loading your giphies...
        </h3>
        <div v-show="allLoaded" class="results">
          <div v-for="giphy in giphys" :key="giphy.id" class="item">
            <img
              :src="giphy.images.preview_gif.url"
              alt="giphy"
              @load="handleLoad"
            />
          </div>
        </div>

        <b-pagination
          v-if="totalCount > perPage"
          v-model="currentPage"
          :total-rows="totalCount"
          :per-page="perPage"
        ></b-pagination>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import axios from "axios";

@Component({
  components: {}
})
export default class Home extends Vue {
  searchQuery = "";
  perPage = 12;
  currentPage = 1;
  totalCount = 0;
  giphys: null | object[] = null;
  error = "";
  loading = false;
  imgLoaded = 0;
  allLoaded: null | boolean = null;

  get offset(): number {
    const offsetCount = this.perPage * (this.currentPage - 1);
    if (!this.totalCount) {
      return offsetCount;
    } else {
      return this.totalCount - offsetCount < this.perPage
        ? this.totalCount - 12
        : offsetCount;
    }
  }

  get url(): string {
    return `https://api.giphy.com/v1/gifs/search?api_key=YGUDAC01pUo51unOUAZCUSGcq7BbED7y&q=${encodeURIComponent(
      this.searchQuery
    )}&offset=${this.offset}&limit=${this.perPage}`;
  }

  async getGiphys(): Promise<void> {
    this.$router.push({
      path: `${"/search/" + this.searchQuery}`,
      query: {
        offset: `${this.offset}`,
        limit: `${this.perPage}`
      }
    });
    this.imgLoaded = 0;
    this.loading = true;
    this.error = "";
    this.giphys = [];
    this.allLoaded = false;
    try {
      const { data } = await axios.get(this.url);
      this.totalCount = data.pagination.total_count;
      this.giphys = data.data;
    } catch (e) {
      this.error = "Something went wrong";
    } finally {
      this.loading = false;
      if (this.giphys && !this.giphys.length) this.error = "Nothing was found";
    }
  }

  // Display gifs when all of them are loaded
  handleLoad() {
    this.imgLoaded++;
    if (this.totalCount > 0 && this.totalCount < this.perPage) {
      this.allLoaded = this.imgLoaded === this.totalCount;
    } else {
      this.allLoaded = this.imgLoaded === this.perPage;
    }
  }

  @Watch("searchQuery")
  onSearchQuerychanged() {
    this.currentPage = 1;
    this.getGiphys();
  }

  @Watch("currentPage")
  onCurrentPagechanged() {
    this.getGiphys();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  @Watch("$route", { immediate: true, deep: true })
  onUrlChange() {
    if (this.$route.params.id) this.searchQuery = this.$route.params.id;
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
