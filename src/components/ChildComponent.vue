<template>
  <div id="childComponent">
    <richtext>
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
    created() {
    },
    mounted() {
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
