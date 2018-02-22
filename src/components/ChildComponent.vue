<template>
  <div id="childComponent" style="background-color: #42b983">
    <richtext >
      this is child component
    </richtext>
    <br/>
    <button>{{childMsg}}</button>
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
        this.childMsg = "receive msg = " + msg;
      }
    }
  }
</script>

<style>

</style>
