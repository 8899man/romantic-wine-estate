<template>
  <div class="main">
    <orderheader></orderheader>
    <div class="nav clearfix">
      <ul>
        <li @click="allorders">全部订单</li>
        <li id="choose" @click="obligation"><a href="">待付款</a>
        <li @click="forgoods"><a href="">待收货</a></li>
        <li @click="forevaluate"><a href="">待评价</a></li>
      </ul>
    </div>
    <section class="my-orders">
      <div class="pay-money">
        <div  class="state" ><span >等待买家付款</span></div>
        <div class="good clearfix">
          <div id="good-pic"><img src="" alt=""></div>
          <div id="good-name"></div>
        </div>
        <div class="all-price"><span >共一件商品&nbsp合计:&yen19.90（含运费&yen0.00）</span></div>
  </div>
  </section>
  <section class="forpay">
    <input type="button" value="取消订单" id="no-order">
    <input @click="orderpay" type="button" value="付款" id="pay-m">

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
      allorders() {
        this.$router.push({
          path: '/allOrders'
        })

      },
      forevaluate() {
        this.$router.push({
          path: '/forEvaluate'
        })

      },
      forgoods () {
        this.$router.push({
          path: '/forGoods'
        })

      },
      obligation(){
        this.$router.push({
          path: '/obliGation'
        })

      },
      orderpay(){
        this.$router.push({
          path:'/orderPay'
        })
      }
    }
  }
</script>

<style scoped>
  @import url(../../style/common.css);
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
  .nav ul li {
    font-size:30px;
    color: #878787;
    text-align: center;
  }
  #choose{color: #bb3437;}
  .my-orders{
    background: #f4f4f4;
    padding-top: 27px ;
    width: 750px;
    margin:  0 auto;
  }
  .pay-money{
    padding-top: 42px;
    background: #fff;
  }
  .state{
    font-size: 30px;
    margin-left: 500px;
    margin-bottom: 40px;
  }
  .state span{color: #bb3437;}
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
    padding-top: 20px;
    padding-left: 300px;
    margin:  0 auto;
  }
  input{
    height: 75px;
    background: #fff;
    font-size: 30px;
    display: inline-block;

  }
  #no-order{
    width: 170px;
    border-radius: 40%;
    border: 2px solid #bababa;
    margin-right:35px ;
  }
  #pay-m{
    width: 150px;
    border-radius: 40%;
    border: 2px solid #bb3437;
    color:#bb3437;
  }
</style>

