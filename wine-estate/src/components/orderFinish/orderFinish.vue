<template>
  <div class="main">
    <div class="top"></div>
    <section class="head" >
      <span>订单成功</span>
    </section>
    <section class="order-success">
      <div class="order-message">
        <div class="orders">订单编号
          <span></span>
        </div>
        <div class="orders">订单金额
          <span></span>
        </div>
        <div class="orders">付款方式
          <span>在线支付</span>
        </div>
      </div>
    </section>
    <footer>
      <bottom></bottom>
      <img src="img/shop_1.jpg" height="86" width="71" id="shop_1"/></footer>
  </div>
</template>

<script>
import bottom from '../bottom/bottom.vue'
export default {
  components: {bottom},
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
    padding-bottom: 70px;}
  .head span{
    font-size: 37px;
    color: #fff;position:absolute;
    top:0;left:0;right:0;bottom:0;
    margin-top: 18px}
  .order-success{
    width: 750px;
    padding-bottom: 945px;
    background: #ebebeb;
    margin: 0 auto;
  }
  .order-message{
    width: 750px;
    padding-top: 6px;
    background: #fff;
    padding-bottom: 28px;
  }
  .orders{
    margin: 18px 31px 0 31px;
    font-size:26px;
    color:#434343;
    text-align: left;
  }
  footer{
    width: 98px;
    border-top: 1px solid #c8c8c8;
    position: relative;
  }
  #shop_1{
    position: fixed;
    bottom: 4px;
    left: 50%;
    margin-left: 80px;
  }
</style>
