<template>
  <div class="main">
    <div id="top"></div>
    <div id="header" >
      <span>订单成功</span>
    </div>
    <div id="content">
      <div class="message">
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
    </div>
    <div id="footer"></div>
  </div>
</template>

<script>
    export default {
        name: "orderFinish"
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
    padding-bottom: 70px;}
  #header span{
    font-size: 37px;
    color: #fff;position:absolute;
    top:0;left:0;right:0;bottom:0;
    margin-top: 18px}
  #content{
    width: 750px;
    padding-bottom: 945px;
    background: #ebebeb;
    margin: 0 auto;
  }
  .message{
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


  #footer{
    width: 98px;
    border-top: 1px solid #c8c8c8;
  }
</style>
