<template>
  <div class="main">
    <orderheader theme="订单详情"></orderheader>
    <section class="order-details">
      <img src="./img/wineback.jpg" alt="">
      <div class="message" @click="">
        <div  class="people clearfix">
          <div class="name">收货人:&nbsp <span>老李</span></div>
          <div class="phone"> <span>12345655222</span></div>
        </div>
        <div>
          <div class="clearfix"></div>
          <img src="./img/position.jpg" height="37" width="30"/>
          <div class="adress">收货地址:&nbsp  <span>我都in经常撒擦那你猜猜</span></div>
        </div>
      </div>
      <div class="good">
        <div class="store clearfix">
          <img src="../../assets/store.jpg" height="27" width="30"/>&nbsp&nbsp
          <span>王的店铺</span>
        </div>
        <div class="goodmsg">
          <img src="" alt="">
          <span>不可描述♂♂</span>
        </div>
      </div>
      <div class="train-price">运费<span>&yen0.00</span></div>
      <div class="all-price">实付款 <span>&yen22.00</span></div>
      <ul class="order-message">
        <li>订单编号 <span>2312344</span></li>
        <li>创建时间 <span>12.12.21</span></li>
        <li>付款时间 <span>12.12.21</span></li>
        <li>发货时间 <span>12.12.21</span></li>
        <li>成交时间 <span>12.12.21</span></li>
      </ul>
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
      orderpay: function () {
        this.$router.push({
          path: '/orderPay'
        })
      },
    }
  }
</script>

<style scoped>
  @import url(../../style/common1.css);
  .main{
    position: relative;
  }
  .order-details{
    width: 750px;
    margin: 0 auto;
    background: #f4f4f4;

  }
  .message{
    padding: 23px 24px 60px 30px;
    font-size: 27px;
    text-align: left;
    background: #fff;
    color: #6e6e6e;
  }
  .people img{
    float: left;
  }
  .name{
    margin:0 0 19px 42px;
    float: left;
    color: #535353;
  }
  .adress{
    margin-right: 230px;
    color: #535353;
    float: right;
  }
  .phone{
    margin-right:24px;
    float: right;
  }
  .good{
    padding-top: 25px;
    margin-top: 20px ;
    background: #fff;
  }
  .store{
    padding-left: 30px;
    text-align: left;
    font-size: 24px;
    color: #303030;
  }
  .store img{
    float: left;
  }
  .goodmsg{
    padding: 40px;
    text-align: left;
    font-size: 30px;
  }
  .goodmsg img{
    width: 120px;
    height: 120px;
    background: beige;
    float: left;
    margin-right: 30px;
  }
  .train-price,.all-price{
    height: 115px;
    background: #fff;
    padding-left: 26px;
    text-align: left;
    color: #535353;
    font-size:27px;
  }
  .train-price{
    padding-top: 80px;}
  .all-price{
    padding-top: 45px;
  }
  .train-price span,.all-price span,li span{
    float: right;
    margin-right: 40px;
  }
  ul{
    height: 364px;
  }
  ul li{
    font-size: 26px;
    padding-top: 8px;
    color: #7c7c7c;
  }
  li span {
    color:#7c7c7c ;
  }
  .forpay{
    border-top: 1px solid #ddd;
    border-bottom: 2px solid #ddd;
    width: 750px;
    height: 121px;
    padding-top: 20px;
    padding-left: 300px;
    margin:  0 auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
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
  .order-message{
    margin-top: 20px;
    background: #fff;
    text-align: left;
    padding-left:30px;
    font-size: 20px;

  }

</style>

