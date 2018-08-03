<template>
    <div class="add">
        <header>
            <span class="title">{{title}}</span>
            <img src="../../assets/icon13.png" alt="#">
        </header>
        <div class="top"></div>
        <mt-field label="收件人" placeholder="请输入收件人姓名" v-model="username"></mt-field>
    </div>
</template>

<script>
export default {
    data (){
      return {
        title: '收货地址'
      }
    }
}
</script>

<style>
  @import url(../../style/common1.css);
  .add{
    width: 750px;
    height: 1334px;
    margin: 0 auto;
  }
  header{
    width: 100%;
    height: 128px;
    background-color: #d52131;
    position: relative;
  }
  header .title{
    color: #fff;
    font-size: 40px;
    font-family: '宋体';
    font-weight: bold;
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
  .top{
    width: 100%;
    height: 24px;
    background-color: #f2f2f2;
  }
</style>
