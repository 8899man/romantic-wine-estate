<template>
  <div class="main">
    <div class="top"></div>
    <section class="head clearfix" >
      <img src="../../assets/icon2.png" width="39" height="52">
      <span>我的订单</span>
    </section>
    <div class="nav clearfix">
      <ul>
        <li><a href="" v-on:click="change" >全部订单</a></li>
        <li><a href="" v-on:click="change">待付款</a></li>
        <li id="choose"><a href="" v-on:click="change">待收货</a></li>
        <li><a href="" v-on:click="change">待评价</a></li>
      </ul>
    </div>
    <section class="my-orders">
      <div class="accept-order">
        <div class="state"><span>交易成功</span></div>
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
    export default {
        name: "forEvaluate"
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
    padding: 31px;

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
    margin:  0 auto;
  }
  .accept-order{
    padding-top: 42px;
    background: #fff;
  }
  .state{
    font-size: 30px;
    margin-left: 500px;
    margin-bottom: 40px;
  }
  .state span{color:  #bb3437;}
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
