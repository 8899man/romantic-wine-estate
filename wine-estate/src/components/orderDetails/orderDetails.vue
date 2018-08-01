<template>
  <div class="main">
    <div class="top"></div>
    <section class="head clearfix" >
      <img src="../../assets/icon2.png" width="39" height="52">
      <span>订单详情</span>
    </section>
    <div class="content">
      <img src="../../assets/wineback.jpg" alt="">
      <div class="message">
        <div id="people" class="clearfix">
          <div id="name">收货人: <span></span></div>
          <div id="phone"> <span>12345655222</span></div>
        </div>
        <div id="adress">收货地址: <span></span></div>
      </div>
      <div id="good"></div>
      <div id="train-price"><span>运费</span></div>
      <div id="all-price"><span>实付款</span></div>
    </div>
    <div id="footer"></div>
  </div>
</template>

<script>
    export default {
        name: "orderDetails"
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
    padding-top: 18px;
    position:relative;
    padding-bottom: 18px;}
  img{
    float: left}
  .header span{
    font-size: 37px;
    color: #fff;position:absolute;
    top:0;left:0;right:0;bottom:0;
    margin-top: 18px;}
  .content{
    width: 750px;
    margin: 0 auto;
    background: #f4f4f4;
    padding-bottom: 180px;
  }
  .message{
    padding: 23px 24px 63px 30px;
    font-size: 27px;
    text-align: left;
    background: #fff;
  }
  span{
    color: #535353;
    font-size:27px;
  }
  #name{
    margin:0 0 19px 32px;
    float: left;
    color: #535353;
  }

  #adress{
    margin-left: 32px;
    color: #535353;
  }
  #phone{
    margin-right:24px;
    float: right;
  }
  #good{
    padding-top: 92px;
    margin-top: 20px ;
    background: #fff;
  }
  #train-price,#all-price{
    height: 115px;
    background: #fff;
    padding-left: 26px;
    text-align: left;
  }
  #train-price{padding-top: 40px;}
  #all-price{
    padding-top: 55px;

  }
  #footer{

  }

</style>
