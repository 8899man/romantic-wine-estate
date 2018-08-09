<template>
  <div class="main">
    <div class="top"></div>
    <section class="head clearfix" >
      <div @click="toBack()"><img  src="../../assets/icon2.png" width="39" height="52"></div>
      <span>我的订单</span>
    </section>
    <div class="nav clearfix">
      <ul>
        <li id="choose" @click="allorders"><a href="">全部订单</a></li>
        <li @click="obligation"><a href="">待付款</a>
        <li @click="forgoods"><a href="">待收货</a></li>
        <li @click="forevaluate"><a href="">待评价</a></li>
      </ul>
    </div>
    <section class="my-orders">
      <div class="completed-order">
        <div class="state"><span >买家已付款</span></div>
        <div class="good clearfix" >
          <div id="good-pic" ><img src="" alt=""></div>
          <div id="good-name" ></div>
        </div>
      </div>
    </section>
    <section class="all-price"><span > 共一件商品&nbsp合计:&yen19.90（含运费&yen0.00</span></section>
  </div>
</template>

<script>
export default{
  data () {
    return {
    }
  },
  methods: {
    toBack () {
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

    }
  }
}
</script>

<style scoped>
  @import url(../../style/common.css);
  .main{margin: 0 auto;}
  .top{
    height: 40px;
    width:750px;
    background:#bb3437;
    margin: 0 auto;
  }
  .head{
    background: #bb3437;
    width:750px;
    margin: 0 auto;
    padding: 18px 0px 18px 17px;
    position:relative;
  }
  img{
    float: left}
  .head span{
    font-size: 37px;
    color: #fff;position:absolute;
    top:0;left:0;right:0;bottom:0;
    margin-top: 18px}
  .nav{
    width: 750px;
    background-image:url("../../assets/navback.jpg");
    margin: 0 auto;}
  .nav li{
    width:187px;
    height:88px;
    float:left;
    padding: 30px;

  }
  .nav ul li a{
    font-size:30px;
    color: #878787;
    text-align: center;
  }
  #choose a{color: #bb3437;}
  .my-orders{
    background: #f4f4f4;
    padding-top: 27px ;
    width: 750px;
    margin: 0 auto;
  }
  .completed-order{
    padding-top: 42px;
    padding-bottom: 28px;
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
    padding: 20px 7px 25px 24px;
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
    font-size: 30px;
    margin-left: 180px;
  }
</style>
