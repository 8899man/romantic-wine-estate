<template>
  <div class="main">
    <div class="top"></div>
    <section class="head clearfix" >
      <div @click="toBack()"><img  src="../../assets/icon2.png" width="39" height="52"></div>
      <span>评论详情</span>
    </section>
    <section class="commentview">
      <div class="response">
        <span>全部回复</span>
      </div>
      <div class="responser">
        <img src="" alt="" width="60px" height="60px">
        <span>sss</span>
      </div>
      <div class="responseview">
        <span>sda</span>
      </div>
        <div class="my-view clearfix">
          <textarea   placeholder="说点什么？" style="border: none"></textarea>
          <button>评论</button>
        </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "addcomments"
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
  .commentview{
    padding-top: 20px;
    background: #f4f4f4;
    width: 750px;
    margin: 0 auto;
  }
  .response{
    padding: 20px 0 30px 25px;
    background: #fff;
    text-align: left;
  }
  .response span{
    font-size: 30px;
    color: #999;

  }
  .responser{
    padding: 42px 0 20px 40px;
    background: #fff;
    font-size: 32px;
    text-align: left;
  }
  .responser img{
    border-radius: 50%;
    background: bisque;
    margin-right: 35px;
  }

  .responseview{
    padding: 20px 0 50px 40px;
    background: #fff;
    text-align: left;
  }
  .responseview span {
    font-size: 40px;
  }
  .my-view{
    width:750px;
    margin: 0 auto;
    background: #fff;
    padding:23px 0 23px 30px;
  }
  textarea{
    width: 530px;
    height: 54px;
    font-size: 26px;
    border-radius: 10%;
    background: #f5f5f5;
    line-height: 60px;
    padding-left: 16px;
    overflow: hidden;
    float: left;
    margin-right: 30px;
    resize:none;
  }
  textarea::-moz-placeholder  {
     color: #d9d9d9;}
  .my-view button {
    float: left;
    width: 70px;
    height: 45px;
    border-radius: 20%;
    background: #fff;
    font-size: 20px;


  }



</style>
