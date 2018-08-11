<template>
  <div class="main">
    <orderheader></orderheader>
    <div class="nav clearfix">
      <ul>
        <li id="choose">全部订单</li>
        <li @click="obligation">待付款</li>>
        <li @click="forgoods">待收货</li>
        <li @click="forevaluate">待评价</li>
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
    <section class="all-price"><span >共一件商品&nbsp合计:&yen19.90（含运费&yen0.00）</span></section>
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
    methods : {
      toBack(){
        this.$router.go(-1)
      },
      allorders:function () {
        this.$router.push({
          path:'/allOrders'
        })

      },
      forevaluate:function () {
        this.$router.push({
          path:'/forEvaluate'
        })

      },
      forgoods:function () {
        this.$router.push({
          path:'/forGoods'
        })

      },
      obligation:function () {
        this.$router.push({
          path:'/obliGation'
        })

      },


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
    padding: 30px;

  }
  .nav ul li {
    font-size:30px;
    color: #878787;
    text-align: center;
  }
  #choose {color: #bb3437;}
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
