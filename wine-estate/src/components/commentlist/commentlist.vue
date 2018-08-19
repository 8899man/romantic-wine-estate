<template>
  <div class="main">
    <header>
      <span class="title">商品评论</span>
      <img src="../../assets/icon2.png" alt="#" @click="routerBack">
    </header>
    <section class="comment-show">
      <ul>
        <li v-for="item in data">
          <div class="commentary" >
            <div class="buyer">
              <img :src="item.headPic" alt="">
              <span>{{item.userName}}</span>
            </div>
            <div class="buy-message">
              <span>{{item.createTime}}</span>
            </div>
            <div class="goodcomments"  >
              <span>{{item.comment}}</span>
              <img class="commentpic" :src="item.picAddress">
              <div class="view clearfix" :id="item.userId">
                <button class="beigin" @click="addcomment($event)" :id="item.commentId">
                  <div :class="item.commentId" id="none">
                    <div :class="item.userId"></div>
                  </div>
                  <img src="./img/addcomment.jpg" />评论</button>
                <button @click="likethis($event)" :class='[styles]' :name="item.commentId">
                  <img src="./img/like.jpg">
                  <img  src="./img/redlike.jpg" class="redlike" :name="item.likeNumber"/> <span>{{item.likeNumber}}</span>
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
  var goodsId=null;
  import orderheader from '../orderheader/orderheader.vue'
  export default {
    components: {orderheader},
    data() {
      return {
        red: false,
        styles: 'beigin',
        data:[],
        theme:"商品评论"
      }
    },
    methods:{
      routerBack(){
        this.$router.go(-1)
      },
      likethis(event) {
        var oImg=event.currentTarget.querySelector(".redlike");
        var oS=event.currentTarget;
        var oSpan = oS.querySelector("span");
        var c = null;
        var w = event.currentTarget.name;
        console.log(w);
        if(oS.className == 'changered'){
          oS.className = 'beigin';
          oSpan.innerHTML=Number(oImg.name);
          c=1;
          oImg.style.display="none";
          oSpan.style.color="black";
        }
        else{
          oImg.style.display="block";
          oS.className = 'changered';
          oSpan.innerHTML=Number(oImg.name)+1;
          c=0;
          oSpan.style.color="#ff5000";
        }
        var _this = this;
        this.$http.get("/api/addLikeNum.htm", {
          params: {
            commentId: w,
            goodsId:goodsId,
            status: c
          },
        }).then(function (res) {
          console.log(res.data);
        }).catch(function (error) {
          console.log(error);
        })
      },
      addcomment(event){
        var a=event.currentTarget.id;
        var b=event.currentTarget.parentNode.id;
        console.log(b)
        this.$router.push({
          path: '/addcomment',
          query:{
            commentId:a,
            userId:b,
            goodsId:goodsId
          }
        })
      }
    },
    created(){
        goodsId=this.$route.query.goodsId;
        let _this = this;
        this.$http.get("/api/queryGoodsAllComments.htm", {
          params: {
            goodsId: goodsId
          }
        }).then(function (res) {
          console.log(res.data);
          if(res.data.data==null){
            alert("查询失败或者该商品没有评论")
          }
          else{
          _this.data = res.data.data;
          }
        }).catch(function (error) {
          console.log(error);
        })
    }
  }

</script>
<style scoped>
  @import url(../../style/common1.css);
  .main{
    margin: 0 auto;
  }
  header{
    width: 100%;
    height: 128px;
    background-color: #bb3437;
    position: relative;
  }
  header .title{
    color: #fff;
    font-size: 40px;
    position: absolute;
    left: 50%;
    margin-left: -81px;
    top: 60px;
  }
  header img{
    width: 30px;
    height: 52px;
    position: absolute;
    top: 59px;
    left: 26px;
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
    left:20%;
  }
  .view span{
    font-size: 25px;
  }

</style>
