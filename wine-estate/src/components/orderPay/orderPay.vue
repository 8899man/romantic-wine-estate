<template>
<div class="main">
  <div id="top"></div>
  <div id="header" >
    <div id="img"><img src="../../assets/icon2.png"></div>
    <span>确认付款</span>
  </div>
  <div id="back"><img src="../../assets/payback.jpg" height="532" width="750"/></div>
  <div id="content"></div>
  <div id="footer">
    <input type="button" value="立即付款">
  </div>
</div>
</template>

<script>
    export default {
        name: "orderPay"
    }
</script>

<style scoped>
  @import url(../../style/common.css);
  .main{
    margin: 0 auto;
   }
  #top{
    height: 40px;
    width:750px;
    background:#bb3437;
    margin: 0 auto;
  }
  #back{
    width: 750px;
    margin: 0 auto;}
  #header{
    background: #bb3437;
    width:750px;
    margin: 0 auto;
    padding-top: 18px;
    position:relative;
    padding-bottom: 18px;}
  #img{
    width: 39px;
    height: 52px;
    margin-left: 17px;}
  #header span{
    font-size: 37px;
    color: #fff;position:absolute;
    top:0;left:0;right:0;bottom:0;
    margin-top: 18px;}
  #content{
    border-top: 1px solid #dcdcdc;
    margin: 0 auto;
    width: 750px;
    background: #f6f6f6;
    padding: 57px 0 117px 27px;
  }


#footer{
  width: 750px;
  padding: 0 32px 29px 32px;
  margin: 0 auto;
  background:#f6f6f6 ;
}
  #footer input{
    background: #1b8de3;
    height: 84px;
    border-radius:12% ;
    width: 686px;
    font-size: 33px;
    color: #fff;
  }
</style>
