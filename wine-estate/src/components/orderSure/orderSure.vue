<template>
  <div class="main">
    <orderheader theme="订单确认"></orderheader>
    <section class="order-confirm">
      <ul class="order-message clearfix">
        <li id="name"><img src="./img/people.jpg" height="30" width="25"/>&nbsp<span>老李</span></li>
        <li id="phone"><img src="./img/phone.jpg" height="32" width="20"/>&nbsp<span>12345678</span></li>
        <li id="address"><span>你是不是但hi会所啊电脑就行你</span></li>
      </ul>
      <ul class="good clearfix">
        <li id="wine"><img src="" alt=""></li>
        <li id="numchange">共<span>0</span>件</li>
      </ul>
      <ul class="clearfix express">
        <li class="grayword">配送方式</li>
        <li class="blackword">快递配送</li>
      </ul>
      <ul class="good-price clearfix">
        <li class="grayword">商品总额</li>
        <li class="redword">&yen&nbsp<span>23.00</span></li>
      </ul>
      <ul class="express-price clearfix">
        <li  class="grayword">运费 </li>
        <li class="redword">&yen&nbsp<span>0.00</span></li>
      </ul>
      <ul class="pay-way clearfix">
        <li class="grayword">支付方式</li>
        <li class="blackword">在线支付</li>
      </ul>
    </section>
    <section class="submit">
      <input @click="orderfinish" type="button" value="提交订单">
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
      orderfinish: function () {
        this.$router.push({
          path: '/orderFinish'
        })

      },
    }
  }
</script>

<style scoped>
  @import url(../../style/common.css);
  .main{margin: 0 auto;}
  .order-confirm{
    background: #ebebeb;
    width: 750px;
    padding:81px 0 81px;
    margin: 0 auto;
  }
 .good,.express,.express-price{margin-bottom: 81px;background: #fff}
  .order-message{
    background: #fffae6;
    height: 148px;
    text-align: left;
    position: relative;
    margin-bottom: 71px;
  }
  .order-message span{
    color: #878787;
  }
  .good{
    height:123px;
  }
  #name {
    float: left;
    margin: 25px 0 0 23px;
    font-size: 25px;
    position: absolute;
    color: #878787;
  }
  #phone{
    margin-top: 25px;
    float: left;
    font-size: 25px;
    position: absolute;
    margin-left: 150px;

  }
  #address{
    margin: 74px 0 0 30px;
    font-size: 32px;
  }
  #wine{
    width: 85px;
    height: 85px;
    border: 1px solid #eaece9;
    margin: 18px 0 0 20px;
    float: left;
  }
  #numchange{
    font-size: 26px;
    color: #6e6e6e;
    margin:50px 74px 0 0;
    float: right;
  }
  .express{
    height: 92px;
  }
  .good-price{
    height: 92px;
    margin-bottom: 2px;
    background: #fff;
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
    margin:31px 0 0 18px;
    float: left;}
  .blackword {
    font-size: 30px;
    color: #1e1e1e;
    float: right;
    margin: 31px 68px 0 0;
  }
  .redword {
    color: #e24e4c;
    float: right;
    font-size: 27px;
    margin: 34px 100px 0 0;
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

