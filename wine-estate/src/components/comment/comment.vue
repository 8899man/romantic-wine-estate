<template>
    <div class="comment">
        <header>
            <span class="title"><b>{{title}}</b></span>
            <img src="./img/icon13.png" alt="#" @click="rel">
            <a href="#" @click="writeComment">{{upComment}}</a>
        </header>
        <div class="good">
            <img :src="data.data" alt="#" class="pic">
            <span>商品评分</span>
            <ul>
                <li v-for="h,index of arr" :class="{active:index<=n}" @click="change(index)"></li>
            </ul>
            <span class="word">{{arr[n]}}</span>
        </div>
        <div class="write">
            <textarea name="comment" cols="30" rows="10" placeholder="请发表你对本商品的看法吧~"></textarea>
            <img src="./img/addImg.jpg" alt="#" class="addImg">
            <div class="upImg">
                <img src="" id="fileimg">
                <input type="file" id="btn" accept="image/*" @change="upload" name="file">
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  var orderNum1 = null;
  var orderNum2 = null;
export default {
   data () {
     return {
       title: '发表评价',
       upComment: '提交',
       arr: ["很差","一般","较好","很好","完美"],
       n : -1,
       data:{}
     }
   },
   methods: {
     change(index) {
       this.n = index;
     },
     rel() {
       this.$router.go(-1)
     },
     writeComment(){
       this.$toast({
         message: '操作成功',
         iconClass: 'icon icon-success'
       });
       var oTex = document.getElementsByTagName("textarea")[0].value;
       var oWord = document.querySelector(".word").innerHTML;
       var num = null;
       switch (oWord){
         case "很差" : num = "1"; break;
         case "一般" : num = "2"; break;
         case "较好" : num = "3"; break;
         case "很好" : num = "4"; break;
         case "完美" : num = "5"; break;
       }
       this.$http.get("/api/addGoodsComment.htm",{
         params:{
           goodsId:orderNum1,
           grade:num,
           comment:oTex,
           orderNum:orderNum2
         }
       }).then((res) => {
         console.log(res.data);
       }).catch((error) => {
         console.log(error);
       })
       var file = document.getElementById("btn").files[0];
       var formdata1 = new FormData();
       formdata1.append('multipartFile',file,file.name);
       let config = {
         headers:{'Content-Type':'multipart/form-data'}
       };
       if(file){
         axios.post('/api/fileUpload.htm',formdata1,config).then((res) => {
           console.log(res.data);
         })
       }
     },
     upload() {
       let btn = document.querySelector('#btn');
       let img = document.querySelector('#fileimg');
       let file = btn.files[0];
       let reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = function(e) {
         img.src = e.target.result;
         img.style.display = 'block';
       }
     }
   },
   created:function() {
     orderNum1 = this.$route.query.goodsId;
     orderNum2 = this.$route.query.ordernum;
     this.$http.get("/api/getSmallPic.htm",{
       params:{
         goodsId:orderNum1
       }
     }).then((res) => {
       console.log(res.data);
       this.data = res.data;
     }).catch((error) => {
       console.log(error);
     })
   }
}
</script>

<style>
  @import url(../../style/common1.css);
  .comment{
    width: 750px;
    height: 1334px;
    margin: 0 auto;
  }
  header{
    width: 100%;
    height: 128px;
    background-color: #d22131;
    position: relative;
  }
  header .title{
    color: #fff;
    font-size: 40px;
    font-family: '宋体';
    position: absolute;
    left: 50%;
    margin-left: -81px;
    top: 80px;
  }
  header img{
    width: 30px;
    height: 52px;
    position: absolute;
    top: 59px;
    left: 26px;
  }
  header a{
    color: #fff;
    font-family: '宋体';
    font-weight: bold;
    font-size: 36px;
    position: absolute;
    top: 83px;
    right: 31px;
  }
  .good{
    width: 100%;
    height: 250px;
    position: relative;
    border-bottom: 3px #eee solid;
  }
  .good .pic{
    width: 180px;
    height: 240px;
    position: absolute;
    left: 10px;
    top: 0px;
  }
  .good span{
    font-family: 华文仿宋;
    font-weight: bold;
    font-size: 26px;
    color: #666;
    position: absolute;
    top: 70px;
    left: 220px;
  }
  .good ul{
    height: 35px;
    position: absolute;
    top: 130px;
    left: 220px;
  }
  .good ul li{
    width:35px;
    float:left;
    height:35px;
    cursor:pointer;
    border:1px #ff491b solid;
    margin-right:10px;
    border-radius:8px;
    transition:all 0.4s;
  }
  .good ul li.active{
    background-color:#ff491b;
  }
  .good ul li:hover{
    transform:scale(1.1,1.1);
  }
  .good .word{
    position: absolute;
    color: #ff491b;
    top: 180px;
    left: 220px;
  }
  .write{
    width: 730px;
    height: 450px;
    margin: 0 auto;
    position: relative;
  }
  .write textarea{
    width: 700px;
    height: 240px;
    font-size: 28px;
    font-family: 新宋体;
    color: #555;
    border: 0px;
    position: absolute;
    top: 30px;
    left: 20px;
  }
  .write .addImg{
    width: 163px;
    height: 163px;
    position: absolute;
    left: 20px;
    bottom: 10px;
  }
  .write #btn{
    border: 0px;
    width: 163px;
    height: 163px;
    position: absolute;
    left: 20px;
    bottom: 10px;
    opacity: 0;

  }
  .write #fileimg{
    width: 163px;
    height: 163px;
    position: absolute;
    left: 20px;
    bottom: 10px;
  }
</style>
