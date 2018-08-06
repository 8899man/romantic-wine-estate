<template>
  <div class="main">
    <div class="top"></div>
    <section class="head clearfix" >
      <img src="../../assets/icon2.png" width="39" height="52">
      <img src="" alt="">
    </section>
    <section class="comment-show">
      <div class="commentary">
        <div class="buyer">
          <img src="" alt="">
          <span class="head-portrait"></span>
        </div>
        <div class="buy-message">
            <span></span>
        </div>
        <span></span>
        <img src="" alt="" width="58px" height="58px">
        <div class="view">
          <input type="button" value="评论">
          <input type="button">
        </div>

      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "commentlist"
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
  .comment-show{
    padding-top: 20px;
    background: #f4f4f4;
    width: 750px;
    margin: 0 auto;
  }

</style>
