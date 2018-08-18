<template>
  <div class="main">
    <orderheader theme="评论详情"></orderheader>
    <section class="commentview">
      <div class="response">
        <span>全部回复</span>
      </div>
      <ul  v-for="item in data">
        <li  >
        <div class="responser">
          <img src="" alt="" >
          <span>{{item.userName}}</span>
        </div>
        <div class="responseview">
          <span>{{item.comment}}</span>
        </div>
      </li>
      </ul>
      <ul >
        <li>
          <div class="responser"  >
            <img :src="data1.headPic" alt="" >
              <span>{{data1.userName}}</span>
          </div>
          <div class="responseview">
            <span id="b">{{b}}</span>
          </div>
        </li>
      </ul>
        <div class="my-view clearfix">
          <textarea   placeholder="说点什么？" style="border: none"></textarea>
          <button @click="addmy">评论</button>
        </div>
    </section>
  </div>
</template>

<script>
  import orderheader from '../orderheader/orderheader.vue'
  export default{
    components: {orderheader},
    data() {
      return {
        data:[],
        data1:[],
        b:""
      }
    },
    methods: {
      getaddcomment() {
        var _this = this;
        this.$http.get("/api/queryCommentAllReply.htm", {
          params: {
            goodsId: "a",
            parentCommentId: "001",
          }
        }).then(function (res) {
          console.log(res.data);
          _this.data = res.data.data;
        }).catch(function (error) {
          console.log(error);
        })
      },

    addmy(){
      var _this=this;
      var acomment=document.querySelector("textarea").value;

      this.$http.get("/api/addCommentReply.htm", {
        params: {
          parentCommentId:comment,
          comment:acomment,
          prefixMatch:userId
        }
      }).then(function (res) {
        console.log(res.data);
        _this.b=acomment;
        document.querySelector("textarea").value=null
        _this.data1 = res.data.data;
      }).catch(function (error) {
        console.log(error);
      })
    },
    },
    created (){
      this.getaddcomment();
      parentcommentid=this.$route.query.parentcommentid;
      prefixmatch=this.$route.query.prefixmatch

    }
    }
</script>

<style scoped>
  @import url(../../style/common.css);
  .main{
    margin: 0 auto;
    height: 1334px;
    border-bottom: 1px #999 solid;
    overflow: hidden;
    width: 750px;
    position: relative;
  }
  .commentview{
    padding-top: 20px;
    background: #f4f4f4;
  }
  .response{
    padding: 20px 25px 30px 25px;
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
    margin-right: 35px;
    width:60px;
    height:60px
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
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  textarea{
    width: 580px;
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
