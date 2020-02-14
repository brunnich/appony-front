<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "../node_modules/bulma/bulma";
  html {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
  body {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>
