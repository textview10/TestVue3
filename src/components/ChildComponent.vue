<template>
  <div id="childComponent" style="background-color: #42b983">
    <div>{{childMsg}}</div>
    <br/>
    <button @click="toSecondComponent">去第二个界面</button>
  </div>
</template>

<script>
  export default {
    name: 'childComponent',
    data: function () {
      return {
        childMsg: "This is child component"
      }
    },
    methods: {
      receiveMsgFromParent: function (msg) {
        alert("" + msg);
        this.childMsg = "receive msg = " + msg;
      },
      toSecondComponent: function () {
        this.$router.replace({path: "/SecondComponent"});
      }
    },
    created() {
      this.$parent.setComponent(this);
    }
  }
</script>

<style>

</style>
