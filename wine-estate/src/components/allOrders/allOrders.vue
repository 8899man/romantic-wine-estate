<template>
  <div class="main">
    <orderheader></orderheader>
    <div class="nav clearfix">
      <ul>
        <li id="choose"><a href="">全部订单</a></li>
        <li @click="obligation">待付款</li>
        <li @click="forgoods">待收货</li>
        <li @click="forevaluate">待评价</li>
      </ul>
    </div>
    <section class="my-orders">
      <div class="completed-order">
        <div  class="storemsg clearfix" >
          <img src="../../assets/store.jpg" height="30" width="30"/>
          <span id="storename">ss</span>
          <span class="state">买家已付款</span>
        </div>
        <div class="good clearfix">
          <div id="good-pic"><img src="" alt=""></div>
          <div id="good-name"></div>
        </div>
        <div class="all-price"><span >共一件商品&nbsp合计:&yen19.90（含运费&yen0.00）</span></div>
      </div>
    </section>
  </div>
</template>

<script>
  import orderheader from '../orderheader/orderheader.vue'
  export default{
    components:{orderheader},
    data(){
      return {

      }
    },
    methods:{

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
  .completed-order{
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


</style>
