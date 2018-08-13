<template>
  <div class="main">
    <orderheader theme="商品评论"></orderheader>
    <section class="comment-show">
      <div class="commentary">
        <div class="buyer">
          <img src="" alt="" width="60px" height="60px">
          <span>王的直视</span>
        </div>
        <div class="buy-message">
            <span>2018.08.06</span>
        </div>
        <div class="goodcomments">
          <span>我举得还阔以，给个好评</span>
            <img class="commentpic" width="330px" height="330px">
          <div class="view clearfix">
            <button class="beigin" @click="addcomment"><img src="./img/addcomment.jpg" height="33" width="34"/>评论</button>
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
  import orderheader from '../orderheader/orderheader.vue'
  export default{
    components:{orderheader},
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
        addcomment: function () {
          this.$router.push({
            path: '/addcomment'
          })
        }

    }
    }

</script>

<style scoped>
  @import url(../../style/common1.css);
  .main{margin: 0 auto;}
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
    padding: 20px 20px 50px 30px;
    background: #fff;
    text-align: left;
  }
  .goodcomments span {
    font-size: 45px;
  }
  .commentpic{
    margin-top: 20px;
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
