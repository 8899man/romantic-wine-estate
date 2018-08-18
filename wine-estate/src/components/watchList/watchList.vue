<template>
  <!--关注列表-->
    <div class="watch-list">
        <header class="head">
            <span class="title">{{title}}</span>
            <span @click="redact" v-bind="bOn" class="a">{{write}}</span>
            <img src="./img/icon13.png" alt="#" @click="rel">
        </header>
        <ul class="list" ref="goods">
            <li v-for="item in data" :id="item.goodsId">
              <img src="./img/delete.png" alt="#" @click="deleteGood($event)">
              <div class="goods" v-bind:class="className">
                  <img :src="item.smallPic" alt="#">
                  <span class="wine-name">{{item.goodsTitle}}</span>
                  <span class="wine-price">¥ {{item.goodsPrice}}</span>
              </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: '我的关注',
      write: '编辑',
      className: {'goods': true, 'change': false},
      bOn: true,
      data:[]
    }
  },
  methods :{
    redact() {
      if(this.bOn){
        this.bOn = false;
        this.write = '完成';
        this.className.goods = false;
        this.className.change = true;
      }else{
        this.bOn = true;
        this.write = '编辑';
        this.className.goods = true;
        this.className.change = false;
      }
    },
    deleteGood(event) {
        var oLi = event.currentTarget.parentNode;
        this.$refs.goods.removeChild(oLi);
        var Id = oLi.id;
        this.$http.get("/api/cancelAttention.htm",{
          params:{
            goodsId: Id
          }
        }).then((res) => {
          console.log(res.data);
        }).catch((error) => {
          console.log(error);
        })
    },
    rel(){
        this.$router.push({
          path: '/accountPage'
        })
    },
    watchGoods(){
      this.$http.get("/api/searchAttention.htm",{
        params:{}
      }).then((res) => {
        this.data = res.data.data;
      }).catch((error) => {
        console.log(error);
      })
    }
  },
  created:function() {
    this.watchGoods();
  }
}
</script>

<style>
  @import url(../../style/common1.css);
  .watch-list{
    width: 750px;
    height: 1334px;
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
  }
  .head{
    width: 100%;
    height: 128px;
    background-color: #d22131;
    position: relative;
  }
  .head .title{
    color: #fff;
    font-size: 40px;
    font-family: '宋体';
    position: absolute;
    left: 50%;
    margin-left: -81px;
    top: 80px;
  }
  .head .a{
    color: #fff;
    font-family: '宋体';
    font-size: 36px;
    position: absolute;
    top: 83px;
    right: 31px;
  }
  .head img{
    width: 30px;
    height: 52px;
    position: absolute;
    top: 59px;
    left: 26px;
  }
  .list{
    list-style: none;
    width: 750px;
  }
  .list li{
    width: 100%;
    position: relative;
    list-style: none;
  }
  .list li img{
    width: 40px;
    height: 40px;
    position: absolute;
    top: 85px;
    left: 40px;
  }
  .list li .goods{
    background-color: #fff;
    width: 750px;
    height: 195px;
    position: relative;
  }
  .list li .change{
    background-color: #fff;
    width: 750px;
    height: 195px;
    position: relative;
    margin-left: 80px;
  }
  .list li .goods img{
    width: 146px;
    height: 169px;
    position: absolute;
    top: 10px;
    left: 5px;
  }
  .list li .goods .wine-name{
    color: #000;
    font-size: 28px;
    font-family: '新宋体';
    position: absolute;
    top: 55px;
    left: 160px;
  }
  .list li .goods .wine-price{
    color: #e35d5d;
    font-size: 21px;
    position: absolute;
    top: 133px;
    left: 170px;
  }
</style>
