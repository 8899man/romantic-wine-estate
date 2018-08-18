<template>
  <div class="main">
    <orderheader theme="商品评论"></orderheader>
    <section class="comment-show">
      <ul>
        <li v-for="item in data">
      <div class="commentary" >
        <div class="buyer">
          <img src="" alt="">
          <span>{{item.userName}}</span>
        </div>
        <div class="buy-message">
            <span>{{item.createTime}}</span>
        </div>
        <div class="goodcomments" :id="item.userId">
          <span>{{item.comment}}</span>
            <img class="commentpic" scr="">
          <div class="view clearfix" :id="item.commentId">
            <button class="beigin" @click="addcomment($event)" ><img src="./img/addcomment.jpg" />评论</button>
            <button @click="likethis($event)" :class='[styles]'>
              <img src="./img/like.jpg">
              <img  src="./img/redlike.jpg" class="redlike($event)" :name="item.likeNumber" :id="item.commentId"/> <span>{{item.likeNumber}}</span>
              </button>
            </div>
        </div>
      </div>
        </li >
      </ul>
    </section>
          </div>

</template>


<script>
  import orderheader from '../orderheader/orderheader.vue'
  var b = null;
  export default {
    components: {orderheader},
    data() {
      return {
        red: false,
        styles: 'beigin',
        data:[]
      }
    },
    methods:{

      likethis(event) {
        var oImg=event.currentTarget.querySelector(".redlike");
        var oS=event.currentTarget;
        var oSpan = oS.querySelector("span");
        if(oImg.style.display=="none"){
          oImg.style.display="block"
          oS.className = 'changered';
          oSpan.innerHTML=Number(oImg.name)+1;
          c="0";
          oSpan.style.color="#ff5000"
        }
        else{
          oImg.style.display="none";
          oS.className = 'beigin';
          oSpan.innerHTML=Number(oImg.name);
          c="1";
          oSpan.style.color="black"
        }
        var _this=this;
        var d=event.currentTarget.parentNode.parentNode;
        this.$http.get("/api/addLikeNum.htm", {
          params: {
            commentId: b.id,
            goodsId:goodsId,
            status: d.id
          },
        }).then(function (res) {
          console.log(res.data);

        }).catch(function (error) {
          console.log(error);
        })
      },
      addcomment(){
        var a=event.currentTarget.parentNode;
        var b=event.currentTarget.parentNode.parentNode;
        this.$router.push({
          path: '/addcomment',
          query:{
            comment:a.id,
            userId:b.id,

          }
        })
      },
      getcomment() {
            var _this = this;

            this.$http.get("/api/queryGoodsAllComments.htm", {
              params: {
                goodsId: goodId,
              }
            }).then(function (res) {
              console.log(res.data);
              _this.data = res.data.data;

            }).catch(function (error) {
              console.log(error);
            })

      }
      },

    created(){
      this.getcomment()
      goodId=this.$route.query.goodId
    }
    }

</script>

<style scoped>
  @import url(../../style/common.css);
  .main{
    margin: 0 auto;
  }
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
    margin-right: 35px;
    width:60px;
    height:60px;
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
  .goodcomments img{
    width:330px;
    height:330px;
  }
  .commentpic{
    margin-top: 20px;
    display:block;
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
    position: relative;
  }
  button img{
    float: left;
  }

  .beigin{
    border: 1px solid #999;
  }
  .beigin img{
    width: 34px;
    height: 33px;
  }
  .changered{
    border: 1px solid #ff5000;
    color: #ff5000;

  }
  .changered img{
    height:34px;
    width:38px;
  }
  .redlike{
    display: none;
    position: absolute;
    left: 20%;
  }
  .view span{
    font-size: 25px;

  }
</style>
