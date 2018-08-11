<template>
  <div class="order-header">
  <div class="top"></div>
  <section class="head clearfix" >
    <div @click="toBack()"><img  src="../../assets/icon2.png" width="39" height="52"></div>
    <span>{{theme}}</span>
  </section>
  </div>
</template>

<script>
    export default {
        data () {
          return {
          }
        },
        methods:{
          toBacka: function(){
            this.$router.back(-1)
          }
        },
      props: {
        theme: {
          type: String,
          default: '我的订单'
        }
      }

    }
</script>

<style scoped>
  .order-header{
    width: 750px;
    margin: 0 auto;
    overflow: hidden;

  }
  .top{
    height: 40px;
    background:#bb3437;

  }
  .head{
    background: #bb3437;
    padding: 18px 0 18px 17px;
    position:relative;
    height: 52px;

  }
  img{
    float: left}
  .head span{
    font-size: 37px;
    color: #fff;position:absolute;
    top:0;left:0;right:0;bottom:0;
    margin-top: 18px}
</style>
