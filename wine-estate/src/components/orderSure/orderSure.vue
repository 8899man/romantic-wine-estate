<template>
  <div class="main">
    <div id="top"></div>
    <div id="header" >
      <div id="img"><img src="../../assets/icon2.png"></div>
      <span>订单确认</span>
    </div>
    <div id="content">
      <div id="message">
        <div id="name"></div>
        <div id="phone"></div>
        <div id="address"></div>
      </div>
      <div id="good" class="clearfix">
        <div id="wine"><img src="" alt=""></div>
        <div id="numchange">共<span></span>件</div>
      </div>
      <div id="express" class="clearfix">
        <div id="grayword">配送方式</div>
        <div id="blackword">快递配送</div>
      </div>
      <div id="good-price" class="clearfix">
        <div id="grayword">商品总额</div>
        <div id="redword">&yen</div>
      </div>
      <div id="express-price" class="clearfix">
        <div  id="grayword">运费</div>
        <div id="redword">&yen</div>
      </div>
      <div id="pay-way" class="clearfix">
        <div id="grayword">支付方式</div>
        <div id="blackword">在线支付</div>
      </div>
    </div>
    <div id="footer">
      <div id="grayword">合计：</div>
      <input type="button" value="提交订单">
    </div>
  </div>

</template>

<script>
  export default {
        name: "orderSure"
    }
</script>

<style scoped>
  @import url(../../style/common.css);
  .main{margin: 0 auto;}
  #top{
    height: 40px;
    width:750px;
    background:#bb3437;
    margin: 0 auto;
  }
  #header{
    background: #bb3437;
    width:750px;
    margin: 0 auto;
    padding-top: 18px;
    position:relative;
    padding-bottom: 18px;
  }
  #img{
    width: 39px;
    height: 52px;
    margin-left: 17px;
  }
  #header span{
    font-size: 37px;
    color: #fff;position:absolute;
    top:0;left:0;right:0;bottom:0;
    margin-top: 18px;
  }
  #content{
    background: #ebebeb;
    width: 750px;
    padding-top:81px;
    padding-bottom:81px;
    margin: 0 auto;
  }
  #message,#good,#express,#express-price{margin-bottom: 81px;background: #fff}
  #message{
    background: #fffae6;
    height: 138px;
  }
  #good{
    height:123px;

  }
  #wine{
    width: 85px;
    height: 85px;
    border: 1px solid #eaece9;
    margin-top: 18px;
    margin-left: 20px;
    float: left;
  }
  #numchange{
    font-size: 26px;
    color: #6e6e6e;
    margin-right: 74px;
    float: right;
    margin-top: 50px;
  }
  #express{
    height: 92px;
  }
  #good-price{
    height: 92px;
    margin-bottom: 2px;
    background: #fff
  }
  #express-price{
    height: 95px;

  }
  #pay-way{
    height: 92px;
    background: #fff;
  }
  #footer{
    height: 86px;
    width: 750px;
    margin: 0 auto;
  }
  #grayword{
    font-size: 30px;
    color: #878787;
    margin-top:31px;
    margin-left: 18px;
    float: left;}
  #blackword {
    font-size: 30px;
    color: #1e1e1e;
    float: right;
    margin-right:68px;
    margin-top: 31px;
  }
  #redword {
    color: #e24e4c;
    float: right;
    margin-top: 34px;
    margin-right: 154px;
  }
  input{
    background: #e64348;
    width: 240px;
    height: 86px;
    float: right;
    color: #e8ffe2;
    font-size: 30px;
    text-decoration: underline;
  }
</style>
