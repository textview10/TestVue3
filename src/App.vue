<template>
  <div id="app" style="background-color: brown">
    <div></div>

    <router-view/>
  </div>
</template>

<script>
  import ChildComponent from "./components/ChildComponent.vue";

  var curComponent;
  export default {
    name: 'App',
    components: {
      ChildComponent
    },
    data: function () {
      return {
        richtext: "App.vue receive msg"
      }
    },
    methods: {
      setComponent: function (component) {
        curComponent = component;
      }
    },
    created() {
      this.$router.push({path: "ChildComponent"});
    },
  }

  window["receiveMsgFromNative"] = function (msg) {
    curComponent.receiveMsgFromParent(msg);
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
