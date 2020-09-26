<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html, body {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 8px 12px;
  height: 100%;
  background-image: linear-gradient(-120deg, rgb(194, 3, 194), rgb(51, 1, 51));
}

#nav {
  // padding: 30px;
  // position: absolute;
  top: 0;
  width: 100%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
