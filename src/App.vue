<template>
  <div class="layout">
    <div class="layaut__header">
      Application
    </div>
    <div class="layout__content">
      <div class="layaut__side-bar">
        <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </div>
      <div class="layaut__main">
        <router-view :test="'123'"/>
      </div>

    </div>
  </div>

</template>

<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;


}

.layout {

  .layaut__header {
    min-height: 80px;
    background: #CCC;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
  }

  .layout__content {
    display: flex;
    width:100%;

    .layaut__side-bar {
      padding: 10px;
      min-width: 300px;
      background: #42b983;
      min-height: calc(100vh - 80px);
    }

    .layaut__main {
      box-sizing: border-box;
      padding: 10px;
      height: calc(100vh - 80px);
      width:100%;
    }
  }

  #nav {
    padding: 30px;

    a {
      margin: 10px;
      font-weight: bold;
      color: #2c3e50;
      display: block;
      text-decoration: none;

      &.router-link-exact-active {
        color: #fff;
      }
    }
  }
}
</style>
