<template>
    <div class="comment">
        <header>
            <span class="title"><b>{{title}}</b></span>
            <img src="../../assets/icon13.png" alt="#">
            <a href="#">{{upComment}}</a>
        </header>
        <div class="good">
            <img src="../../assets/wine44.jpg" alt="#" class="pic">
            <span>商品评分</span>
        </div>
        <div class="write"></div>
        <div class="middle"></div>
        <footer></footer>
    </div>
</template>

<script>
export default {
   data () {
     return {
       title: '发表评价',
       upComment: '提交'
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
    border: 1px #ccc solid;
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
  .write{
    width: 730px;
    height: 450px;
    border: 1px #ccc solid;
  }
  .middle{
    width: 100%;
    height: 20px;
    background-color: #eaeaea;
  }
</style>
