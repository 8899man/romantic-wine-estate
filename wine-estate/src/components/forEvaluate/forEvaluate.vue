<template>
  <div class="main">
    <orderheader></orderheader>
    <div class="nav clearfix">
      <ul>
        <li @click="allorders">全部订单</li>
        <li @click="obligation">待付款</li>
        <li @click="forgoods">待收货</li>
        <li  id="choose" ><a>待评价</a></li>
      </ul>
    </div>
    <section class="my-orders">
      <div class="accept-order">
        <div  class="storemsg clearfix" >
          <img src="../../assets/store.jpg" height="30" width="30"/>
          <span id="storename">ss</span>
          <span class="state">交易成功</span>
        </div>
        <div class="good clearfix">
          <div id="good-pic"><img src="" alt=""></div>
          <div id="good-name"></div>
        </div>
        <div class="all-price"><span >共一件商品&nbsp合计:&yen19.90（含运费&yen0.00）</span></div>
        <div class="forpay">
          <input type="button" value="评价" id="evalutation">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import orderheader from '../orderheader/orderheader.vue'
  export default{
    components:{orderheader},
    data() {
      return {}
    },
    methods: {
      toBack() {
        this.$router.go(-1)
      },
      allorders: function () {
        this.$router.push({
          path: '/allOrders'
        })

      },
      forevaluate: function () {
        this.$router.push({
          path: '/forEvaluate'
        })

      },
      forgoods: function () {
        this.$router.push({
          path: '/forGoods'
        })

      },
      obligation: function () {
        this.$router.push({
          path: '/obliGation'
        })
      },
      orderpay: function () {
        this.$router.push({
          path: '/orderpay'
        })
      }
    }
  }
</script>

<style>
  @import url(../../style/common1.css);
  .main{margin: 0 auto;}
  .nav{
    width: 750px;
    background-image:url("../../assets/navback.jpg");
    margin: 0 auto;}
  .nav li{
    width:187px;
    height:88px;
    float:left;
    padding: 31px;

  }
  .nav ul li{
    font-size:30px;
    color: #878787;
    text-align: center;
  }
  #choose a{color: #bb3437;}
  .my-orders{
    background: #f4f4f4;
    padding-top: 27px ;
    width: 750px;
    margin:  0 auto;
  }
  .accept-order{
    padding-top: 42px;
    background: #fff;
  }
  .storemsg{
    font-size: 30px;
    margin:0 0 40px 40px ;
  }
  .storemsg img{
    float: left;
    margin-right: 25px;
  }
  #storename{
    float: left;

  }
  .state{
    color: #bb3437;
    display: block;
    float: right;
    margin-right: 50px;
  }
  .good{
    background: #f4f4f4;
    padding: 13px 7px 47px 24px;
    margin-bottom: 38px;
  }
  #good-pic{
    width:140px;
    height:140px;
    background: antiquewhite;
    float: left;
    margin-right: 30px;
  }
  #good-name{
    width: 20px;
    height:80px;
    background: aquamarine;
    float: left;
    margin-top: 25px;
  }
  .all-price{
    margin-bottom: 35px;
    font-size: 30px;
    margin-left: 180px;
  }
  .forpay{
    border-top: 1px solid #ddd;
    border-bottom: 2px solid #ddd;
    width: 750px;
    height: 121px;
    padding: 20px 0 0 300px;

  }
  input{
    height: 75px;
    background: #fff;
    font-size: 30px;
    display: inline-block;

  }
  #evalutation{
    width: 150px;
    border-radius: 40%;
    border: 2px solid #bb3437;
    color:#bb3437;
    margin-left:205px ;
  }
</style>
