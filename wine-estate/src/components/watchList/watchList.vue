<template>
  <!--关注列表-->
    <div class="watch-list">
        <header class="head">
            <span class="title"><b>{{title}}</b></span>
            <a href="#" @click="redact" v-bind="bOn">{{write}}</a>
            <router-link to="accountPage">
                <img src="../../assets/icon13.png" alt="#">
            </router-link>
        </header>
        <ul class="list" ref="goods">
            <li>
              <img src="../../assets/delete.png" alt="#" @click="deleteGood($event)">
              <div class="goods" v-bind:class="className">
                  <img src="../../assets/wine33.jpg" alt="#">
                  <span class="wine-name"><b>奔富138西粒子歌海螺幕合怀特干红...</b></span>
                  <span class="wine-price">￥ 279.00</span>
              </div>
            </li>
            <li>
              <img src="../../assets/delete.png" alt="#" @click="deleteGood($event)">
              <div class="goods" v-bind:class="className">
                  <img src="../../assets/wine33.jpg" alt="#">
                  <span class="wine-name"><b>奔富138西粒子歌海螺幕合怀特干红...</b></span>
                  <span class="wine-price">￥ 280.00</span>
              </div>
            </li>
            <li>
              <img src="../../assets/delete.png" alt="#" @click="deleteGood($event)">
              <div class="goods" v-bind:class="className">
                  <img src="../../assets/wine33.jpg" alt="#">
                  <span class="wine-name"><b>奔富138西粒子歌海螺幕合怀特干红...</b></span>
                  <span class="wine-price">￥ 281.00</span>
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
      bOn: true
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
    }
  }
}
</script>

<style>
  @import url(../../style/common.css);
  .watch-list{
    width: 750px;
    height: 1334px;
    margin: 0 auto;
    padding: 0;
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
  .head a{
    color: #fff;
    font-family: '宋体';
    font-weight: bold;
    font-size: 36px;
    position: absolute;
    top: 83px;
    right: 31px;
  }
  .head img{
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
    left: 160px;
  }
</style>
