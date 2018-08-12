<template>
  <div class="main">
    <div id="top"></div>
    <div class="back">
      <img src="./img/payback.jpg" height="532" width="750"/>
    </div>
    <section class="head clearfix" >
      <img src="./img/icon22.jpg" width="37" height="47" @click="toBack">
      <span>确认付款</span>
    </section>
    <section class="pay-way">
      <div class="price">&yen&nbsp<span>24.00</span></div>
      <div id="message">账号 &nbsp <span>123456</span> </div>
      <ul>
        <li @click="changeicon1">
          <img src="./img/beforeicon.jpg" height="42" width="42" v-show="downIcon"/>
          <img src="./img/chooseicon.jpg" height="42" width="42" v-show="!downIcon"/>
          &nbsp &nbsp 支付宝付款</li>
        <li @click="changeicon2">
          <img src="./img/beforeicon.jpg" height="42" width="42" v-show="!downIcon"/>
          <img src="./img/chooseicon.jpg" height="42" width="42" v-show="downIcon"/>
          &nbsp &nbsp 微信付款</li>
      </ul>


    </section>
    <section class="pay">
      <input @click="orderpay" type="button" value="立即付款">
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        downIcon: true,

      }
    },
    methods: {
      changeicon1() {
        this.downIcon = !this.downIcon
      },
      changeicon2() {
        this.downIcon = !this.downIcon
      },
      orderpay: function(){
        this.$router.push({
          path:'/orderPay'
        })
      },
      toBack: function(){
        this.$router.back(-1)
      }

    }


  }
</script>

<style scoped>
  @import url(../../style/common.css);
  .main{
    margin: 0 auto;
    width: 750px;
  }
  #top{
    height: 40px;
    background:#bb3437;
  }
  .back{
    height: 532px;
  }
  .head{
    background: #f6f6f6;
    padding: 18px 0px 18px 17px;
    position:relative;
  }
  .head img{
    float: left}
  .head span{
    font-size: 37px;
    position:absolute;
    top:0;left:0;right:0;bottom:0;
    margin-top: 18px}
  .pay-way{
    border-top: 1px solid #dcdcdc;
    background: #f6f6f6;
    padding: 54px 0 117px 27px;
    text-align: left;
  }
  .price{
    font-size: 50px;
    margin:0 0 60px 250px;
  }
  #message{
    padding-bottom: 36px;
  }
  ul li, #message{
    font-size: 30px;
    color: #676767;
    border-bottom: #eaeaea solid 1px;
  }
  ul li{
    padding: 25px 0 25px;
  }
  .pay{
    padding: 0 32px 29px 32px;
    background:#f6f6f6 ;
  }
  .pay input{
    background: #1b8de3;
    height: 84px;
    border-radius:12% ;
    width: 686px;
    font-size: 33px;
    color: #fff;
  }
</style>
