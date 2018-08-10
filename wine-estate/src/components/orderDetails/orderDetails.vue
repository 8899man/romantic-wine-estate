<template>
  <div class="main">
    <div class="top"></div>
    <section class="head clearfix" >
      <img src="../../assets/icon2.png" width="39" height="52">
      <span>订单详情</span>
    </section>
    <section class="order-details">
      <img src="img/wineback.jpg" alt="">
      <div class="message">
        <div  class="people clearfix">
          <div class="name">收货人: <span></span></div>
          <div class="phone"> <span>12345655222</span></div>
        </div>
        <div class="adress">收货地址: <span></span></div>
      </div>
      <div class="good"></div>
      <div class="train-price"><span>运费</span></div>
      <div class="all-price"><span>实付款</span></div>
    </section>
    <section class="forpay">
      <input type="button" value="取消订单" id="no-order">
      <input @click="orderpay" type="button" value="付款" id="pay-m">
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
  .head img{
    float: left}
  .head span{
    font-size: 37px;
    color: #fff;position:absolute;
    top:0;left:0;right:0;bottom:0;
    margin-top: 18px;}
  .order-details{
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
  .name{
    margin:0 0 19px 32px;
    float: left;
    color: #535353;
  }

  .adress{
    margin-left: 32px;
    color: #535353;
  }
  .phone{
    margin-right:24px;
    float: right;
  }
  .good{
    padding-top: 92px;
    margin-top: 20px ;
    background: #fff;
  }
  .train-price,.all-price{
    height: 115px;
    background: #fff;
    padding-left: 26px;
    text-align: left;
  }
  .train-price{padding-top: 40px;}
  .all-price{
    padding-top: 55px;

  }
  input{
    height: 75px;
    background: #fff;
    font-size: 30px;
    display: inline-block;

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
