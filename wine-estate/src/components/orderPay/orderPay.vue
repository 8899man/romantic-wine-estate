<template>
  <div class="main">
    <div id="top"></div>
    <div class="back">
      <img src="../../assets/payback.jpg" height="532" width="750"/>
    </div>
    <section class="head clearfix" >
      <img src="../../assets/icon22.jpg" width="39" height="52">
      <span>我的订单</span>
    </section>
    <section class="pay-way">
      <div class="price">&yen<span></span></div>
      <div id="message">账号</div>
      <ul>
        <li @click="change1">
          <img src="../../assets/beforeicon.jpg" height="42" width="42" v-show="downIcon1"/>
          <img src="../../assets/chooseicon.jpg" height="42" width="42" v-show="!downIcon1"/>
          &nbsp &nbsp 支付宝付款</li>
        <li @click="change1">
          <img src="../../assets/beforeicon.jpg" height="42" width="42" v-show="downIcon2"/>
          <img src="../../assets/chooseicon.jpg" height="42" width="42" v-show="!downIcon2"/>
          &nbsp &nbsp 微信付款</li>
      </ul>
    </section>
    <section class="pay">
      <input type="button" value="立即付款">
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        downIcon1: true,
        downIcon2: true
      }
    },
    methods : {
      change1(){
          this.downIcon1 = !this.downIcon1
          this.downIcon2 = !this.downIcon2
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
    width:750px;
    background:#bb3437;
  }
  .back{
    height: 532px;
  }
  .head{
    background: #f6f6f6;
    width:750px;
    margin: 0 auto;
    padding: 18px 0px 18px 17px;
    position:relative;
  }
  img{
    float: left}
  .head span{
    font-size: 37px;
    position:absolute;
    top:0;left:0;right:0;bottom:0;
    margin-top: 18px}
  .pay-way{
    border-top: 1px solid #dcdcdc;
    width: 750px;
    background: #f6f6f6;
    padding: 57px 0 117px 27px;
    text-align: left;
  }
  .price{
    font-size: 50px;
    margin:0 0 68px 238px;
  }
  #message{
    font-size: 30px;
    margin-bottom: 36px;
    color: #676767;
    border-bottom: #eaeaea solid 1px;

  }
  ul li{
    font-size: 30px;
    margin: 30px 0 30px;
    color: #676767;
    border-bottom: #eaeaea solid 1px;
  }
  .pay{
    width: 750px;
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
