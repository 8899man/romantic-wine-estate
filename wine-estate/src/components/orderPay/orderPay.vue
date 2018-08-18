<template>
  <div class="main">
    <div id="top"></div>
    <div class="back">
      <img src="./img/payback.jpg" />
    </div>
    <section class="head clearfix" >
      <img src="./img/icon22.jpg"  @click="toBack">
      <span>确认付款</span>
    </section>
    <section class="pay-way">
      <div class="price">&yen&nbsp<span>{{data.payment}}</span></div>
      <div id="message">账号 &nbsp <span>{{data.userId}}</span> </div>
      <ul>
        <li @click="changeicon1">
          <img src="./img/beforeicon.jpg" v-show="downIcon"/>
          <img src="./img/chooseicon.jpg" v-show="!downIcon"/>
          &nbsp &nbsp 支付宝付款</li>
        <li @click="changeicon2">
          <img src="./img/beforeicon.jpg"  v-show="!downIcon"/>
          <img src="./img/chooseicon.jpg"  v-show="downIcon"/>
          &nbsp &nbsp 微信付款</li>
      </ul>
    </section>
    <section class="pay">
      <input @click="qrcode" type="button" value="立即付款">
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        downIcon: false,
        data:{}

      }
    },
    methods: {
      changeicon1() {
        this.downIcon = !this.downIcon
      },
      changeicon2() {
        this.downIcon = !this.downIcon
      },
      qrcode: function(){
        this.$router.push({
          path:'/qrcode'
        });
        this.$http.get("/api/order/apply.htm",{
          params:{
            payOrderNum:"2018081405382169551"
          }
        }).then(function (res) {
          console.log(res.data);
        }).catch(function(error) {
          console.log(error);
        });
      },
      toBack: function(){
        this.$router.back(-1)
      },
      getprice(){
        var _this = this;
        this.$http.get("/api/selectorder.htm",{
          params:{
            orderNum:"2018081615020949111"
          }
        }).then(function (res) {
          console.log(res.data);
          _this.data = res.data.data;
        }).catch(function(error) {
          console.log(error);
        })

      },
    },

 created(){
      this.getprice();
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
  .back img{
    height: 532px;
    width:750px;
  }
  .head{
    background: #f6f6f6;
    padding: 18px 0 18px 17px;
    position:relative;
  }
  .head img{
    float: left;
    width:37px;
    height:47px;
  }
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
  li img{
    width: 42px;
    height: 42px;
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
