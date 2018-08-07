<template>
    <div class="comment">
        <header>
            <span class="title"><b>{{title}}</b></span>
            <img src="../../assets/icon13.png" alt="#" @click="rel">
            <a href="#" @click="writeComment">{{upComment}}</a>
        </header>
        <div class="good">
            <img src="../../assets/wine44.jpg" alt="#" class="pic">
            <span>商品评分</span>
            <ul>
                <li v-for="h,index of arr" :class="{active:index<=n}" @click="change(index)"></li>
            </ul>
            <span class="word">{{arr[n]}}</span>
        </div>
        <div class="write">
            <textarea name="comment" cols="30" rows="10" placeholder="请发表你对本商品的看法吧~"></textarea>
            <img src="../../assets/addImg.jpg" alt="#" class="addImg" @click="loadImg">
            <input type="file" class="upload">
            <img id="imgContent">
        </div>
    </div>
</template>

<script>
export default {
   data () {
     return {
       title: '发表评价',
       upComment: '提交',
       arr: ["很差","一般","较好","很好","完美"],
       n : -1
     }
   },
   methods: {
     change(index){
       this.n = index;
     },
     rel(){
       this.$router.go(-1)
     },
     writeComment(){
       this.$toast({
         message: '操作成功',
         iconClass: 'icon icon-success'
       })
     },
     loadImg(){
       alert('123');
       var file = document.querySelector(".upload").files[0];
       var reader = new FileReader();
       var imgFile = 0;
       reader.load = function(e) {
         imgFile = e.target.result;
         document.querySelector("#imgContent").attr('src', imgFile);
       };
       reader.readAsDataURL(file);
     }
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
    position: absolute;
    left: 20px;
    top: 30px;
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
    position: absolute;
    left: 20px;
    bottom: 10px;
  }
  .tian{
    position: absolute;
    bottom: 20px;
    left: 200px;
  }
</style>
