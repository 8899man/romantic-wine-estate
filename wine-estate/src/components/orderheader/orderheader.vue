<template>
  <div class="order-header">
      <header>
          <span class="title">{{item}}</span>
          <img src="../../assets/icon2.png" alt="#" @click="routerBack">
      </header>
  </div>
</template>

<script>
  export default {
        data () {
          return {
          }
        },
        methods:{
            routerBack(){
              this.$router.push({
                path:'/accountPage',
              })
            },
            props:{
              theme:String,
              default:"我的订单"
            }
        }
    }
</script>

<style>
  .order-header{
    width: 750px;
    margin: 0 auto;
  }
  header{
    width: 100%;
    height: 128px;
    background-color: #d22131;
    position: relative;
  }
  header .title{
    color: #fff;
    font-size: 40px;
    position: absolute;
    left: 50%;
    margin-left: -81px;
    top: 80px;
  }
  header img{
    width: 30px;
    height: 52px;
    position: absolute;
    top: 59px;
    left: 26px;
  }
</style>
