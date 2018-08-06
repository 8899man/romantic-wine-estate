<template>
    <div class="addlist">
        <header>
            <span class="title">{{title}}</span>
            <div class="last" @click="lastPage">
                <img src="../../assets/icon13.png" alt="#">
            </div>
            <router-link to="newAddress" class="a">{{newadd}}</router-link>
        </header>
        <ul class="list">
            <li>
                <img src="../../assets/cut.jpg" alt="#" class="cut" @click="deleteAdd($event)">
                <div class="line"></div>
                <span class="name">{{name}}</span>
                <span class="phone">{{phone}}</span>
                <span class="add1">{{add1}}</span>
                <span class="add2">{{add2}}</span>
                <router-link to="newAddress">
                  <img src="../../assets/creat.jpg" alt="#" class="creat">
                </router-link>
            </li>
            <li>
              <img src="../../assets/cut.jpg" alt="#" class="cut" @click="deleteAdd($event)">
              <div class="line"></div>
              <span class="name">{{name}}</span>
              <span class="phone">{{phone}}</span>
              <span class="add1">{{add1}}</span>
              <span class="add2">{{add2}}</span>
              <router-link to="newAddress">
                <img src="../../assets/creat.jpg" alt="#" class="creat">
              </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
      return {
        title: '收货地址',
        newadd: '新增',
        name: '杨梦雪',
        phone: '15171139313',
        add1: '陕西  西安  长安区',
        add2: '西安邮电大学长安校区西区'
      }
    },
    methods: {
      deleteAdd(event){
          var oLi = event.currentTarget.parentNode;
          oLi.parentNode.removeChild(oLi);
      },
      lastPage(){
          this.$router.go(-1)
      }
    }
}
</script>

<style>
  @import url(../../style/common1.css);
  .addlist{
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
  header .a{
    color: #fff;
    font-family: '宋体';
    font-weight: bold;
    font-size: 36px;
    position: absolute;
    top: 83px;
    right: 31px;
  }
  .list{
    width: 100%;
    height: 1206px;
    background-color: #f2f2f2;
    padding-top: 20px;
  }
  .list li{
    width: 100%;
    height: 230px;
    margin-bottom: 10px;
    background-color: #fff;
    position: relative;
  }
  .list li .cut{
    position: absolute;
    top: 0px;
    right: 5px;
    opacity: 0.7;
  }
  .list li .line{
    width: 100%;
    height: 1px;
    background: #ccc;
    position: absolute;
    top: 60px;
  }
  .list li .name{
    font-family: 华文宋体;
    font-weight: bold;
    font-size: 32px;
    color: #666;
    position: absolute;
    top: 80px;
    left: 10px;
  }
  .list li .phone{
    font-family: 华文宋体;
    font-size: 26px;
    color: #666;
    position: absolute;
    top: 85px;
    left: 120px;
  }
  .list li .add1{
    font-family: 新宋体;
    font-size: 26px;
    font-weight: bold;
    color: #666;
    position: absolute;
    top: 130px;
    left: 10px;
  }
  .list li .add2{
    font-family: 新宋体;
    font-size: 26px;
    font-weight: bold;
    color: #666;
    position: absolute;
    top: 180px;
    left: 10px;
  }
  .list li .creat{
    position: absolute;
    top: 100px;
    right: 10px;
  }
</style>
