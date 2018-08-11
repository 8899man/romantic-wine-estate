<template>
  <div class="main">
    <orderheader theme="评论详情"></orderheader>
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
  import orderheader from '../orderheader/orderheader.vue'
  export default{
    components:{orderheader},

    }
</script>

<style scoped>
  @import url(../../style/common.css);
  .main{margin: 0 auto;}
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
    padding:23px 0 23px 40px;
  }
  textarea{
    width: 570px;
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
    width: 90px;
    height: 45px;
    border-radius: 20%;
    background: #fff;
    font-size: 24px;
  }



</style>
