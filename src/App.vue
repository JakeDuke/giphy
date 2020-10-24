<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html, body {
  height: 100%;
}

$colour:rgb(10, 1, 2);
$grey:desaturate($colour,80%);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  padding: 8px 12px;
  height: 100%;
  // background-image: linear-gradient(-120deg, rgb(47, 9, 47), rgb(31, 1, 31));
  background-image: linear-gradient(-120deg, rgb(85, 78, 85), rgb(37, 29, 37));
}

#nav {
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
