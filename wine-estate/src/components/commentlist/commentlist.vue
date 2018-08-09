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
          <img src="" alt="" width="30px" height="30px">
          <span>sss</span>
        </div>
        <div class="buy-message">
            <span>1777</span>
        </div>
        <div class="goodcomments">
          <span>sda</span>
            <img src="" alt="" width="330px" height="330px">
          <div class="view clearfix">
            <button><img src="img/addcomment.jpg" height="33" width="34"/>评论</button>
            <button><img src="img/like.jpg" height="33" width="34"/>0</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'commentlist'
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
  .head img{
    float: left}
  .comment-show{
    padding-top: 20px;
    background: #f4f4f4;
    width: 750px;
    margin: 0 auto;
  }
  .buyer {
    padding: 42px 0 42px 40px;
    background: #fff;
    font-size: 25px;
    text-align: left;
  }
  .buyer img{
    border-radius: 50%;
  }
  .buy-message{
    padding: 30px 0 30px 40px;
    background: #fff;
    text-align: left;
  }
  .buy-message{
    color: #999;
    font-size: 30px;
  }
  .goodcomments{
    padding: 20px 0 50px 30px;
    background: #fff;
    text-align: left;
  }
  .goodcomments span {
    font-size: 42px;
    margin-bottom: 45px;
  }
  .goodcomments img{
    display: block;
  }
  .view{
    padding: 20px 0 20px 340px;
    background: #fff;
  }
  button{
    border: 1px solid #999;
    font-size: 24px;
    width: 150px;
    height: 60px;
    padding:13px 30px 15px 30px;
    background: #fff;
    border-radius: 40%;
    float: left;
    margin-right: 20px;
  }
  button img{
    float: left;
  }
</style>
