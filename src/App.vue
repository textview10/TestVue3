<template>
  <div id="app" style="background-color: brown">
    <ChildComponent ref="child"></ChildComponent>
    <richtext >{{richtext}}</richtext>
  </div>
</template>

<script>
  import ChildComponent from "./components/ChildComponent.vue";

  var globalVue;
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
    methods: {},
    created() {
      globalVue = this;
    },
  }

  window["receiveMsgFromNative"] = function (msg) {
    globalVue.richtext = "parent receive msg from Android  webview = " + msg;
    globalVue.$refs.child.receiveMsgFromParent(msg);
  }
//  window["receiveMsgFromNative"] = function () {
//    var msg = "native webview";
//    globalVue.richtext = "parent receive msg from Android native webview = " + msg;
//    globalVue.$refs.child.receiveMsgFromParent(msg);
//  }
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
