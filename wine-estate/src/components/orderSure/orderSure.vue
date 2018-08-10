<template>
  <div class="main">
    <div class="top"></div>
    <section class="head clearfix" >
      <img src="../../assets/icon2.png" width="39" height="52">
      <span>我的订单</span>
    </section>
    <section class="order-confirm">
      <ul class="order-message">
        <li id="name"><img src="img/people.jpg" height="34" width="30"/></li>
        <li id="phone"><img src="img/phone.jpg" height="34" width="20"/></li>
        <li id="address"></li>
      </ul>
      <ul class="good clearfix">
        <li id="wine"><img src="" alt=""></li>
        <li id="numchange">共<span></span>件</li>
      </ul>
      <ul class="clearfix express">
        <li class="grayword">配送方式</li>
        <li class="blackword">快递配送</li>
      </ul>
      <ul class="good-price clearfix">
        <li class="grayword">商品总额</li>
        <li class="redword">& yen</li>
      </ul>
      <ul class="express-price clearfix">
        <li  class="grayword">运费</li>
        <li class="redword">& yen</li>
      </ul>
      <ul class="pay-way clearfix">
        <li class="grayword">支付方式</li>
        <li class="blackword">在线支付</li>
      </ul>
    </section>
    <section class="submit">
      <ul>
      <li class="grayword">合计：</li>
      </ul>
     <input type="button" value="提交订单">
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      toBack() {
        this.$router.go(-1)
      },
      orderfinish: function () {
        this.$router.push({
          path: '/orderFinish'
        })

      },
    }
  }
</script>

<style scoped>
  @import url(../../style/common1.css);
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
  .order-confirm{
    background: #ebebeb;
    width: 750px;
    padding-top:81px;
    padding-bottom:81px;
    margin: 0 auto;
  }
  .order-message,.good,.express,.express-price{margin-bottom: 81px;background: #fff}
  .order-message{
    background: #fffae6;
    height: 138px;
  }
  .good{
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
  .express{
    height: 92px;
  }
  .good-price{
    height: 92px;
    margin-bottom: 2px;
    background: #fff
  }
  .express-price{
    height: 95px;

  }
  .pay-way{
    height: 92px;
    background: #fff;
  }
  .submit{
    height: 86px;
    width: 750px;
    margin: 0 auto;
  }
  .grayword{
    font-size: 30px;
    color: #878787;
    margin-top:31px;
    margin-left: 18px;
    float: left;}
  .blackword {
    font-size: 30px;
    color: #1e1e1e;
    float: right;
    margin-right:68px;
    margin-top: 31px;
  }
  .redword {
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

