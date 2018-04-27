<template>
  <div>
    {{msg}}
  </div>
</template>
<script>
 export default {
   data:function () {
     return {
       msg : "This is Second Component"
     }
   },
   methods: {
     receiveMsgFromParent: function (msg) {
       this.msg = "receive msg = " + msg;
     }
   },
   created() {
     this.$parent.setComponent(this);
   }
 }
</script>
<style>

</style>
