<template>
  <div class="main">
    <div class="top"></div>
    <section class="head clearfix" >
      <img src="../../assets/icon2.png" width="39" height="52">
      <span>商品评价</span>
    </section>
    <section class="comment-show">
      <div class="commentary">
        <div class="buyer">
          <img src="" alt="" width="60px" height="60px">
          <span>sss</span>
        </div>
        <div class="buy-message">
            <span>1777</span>
        </div>
        <div class="goodcomments">
          <span>sda</span>
            <img src="" alt="" width="330px" height="330px">
          <div class="view clearfix">
            <button class="beigin" @click="addcomments"><img src="./img/addcomment.jpg" height="33" width="34"/>评论</button>
            <button @click="likethis(index)" :class='[styles]'><img src="./img/like.jpg" height="34" width="38" v-show="!red"/>
              <img src="./img/redlike.jpg" height="34" width="38" v-show="red"/>{{likenum}}
              </button>
            </div>
        </div>
      </div>
    </section>
          </div>

</template>


<script>
    export default {
      name: 'commentlist',
      data() {
        return {
          red: false,
          likenum:0,
          styles:'beigin'
        }
      },
      methods: {
        likethis() {
          this.red = !this.red
          if (this.red) {
            this.likenum++;
            this.styles = 'changered'
          }
          else {
            this.likenum--;
            this.styles = 'beigin'
          }
        },
        addcomments: function () {
          this.$router.push({
            path: '/'
          })
        }

    }
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
    padding: 18px 0 18px 17px;
    position:relative;
  }
  .head span{
    font-size: 37px;
    color: #fff;position:absolute;
    top:0;left:0;right:0;bottom:0;
    margin-top: 18px}
  .head img{
    float: left}
  .comment-show{
    padding-top: 20px;
    background: #f4f4f4;
    width: 750px;
    margin: 0 auto;
  }
  .buyer {
    padding: 42px 0 20px 40px;
    background: #fff;
    font-size: 32px;
    text-align: left;
  }
  .buyer img{
    border-radius: 50%;
    background: bisque;
    margin-right: 35px;
   }
  .buy-message{
    padding: 20px 0 20px 40px;
    background: #fff;
    text-align: left;
  }
  .buy-message{
    color: #999;
    font-size: 25px;
  }
  .goodcomments{
    padding: 20px 0 50px 30px;
    background: #fff;
    text-align: left;
  }
  .goodcomments span {
    font-size: 45px;
  }
  .goodcomments img{
    display:block;
    background: antiquewhite;

  }
  .view{
    padding: 20px 0 20px 340px;
    background: #fff;
  }
  button{
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
  .beigin{
    border: 1px solid #999;
  }
  .changered{
    border: 1px solid #ff5000;
    color: #ff5000;
  }
</style>
