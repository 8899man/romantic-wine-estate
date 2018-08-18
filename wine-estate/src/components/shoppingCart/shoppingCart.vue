<template>
    <!--未登录购物车-->
    <div class="shopping-cart">
        <header class="head">
            <span><b>{{title}}</b></span>
        </header>
        <img src="./img/shopping.jpg" alt="#" class="shop" width="200px" height="200px">
        <p class="tip">你的购物车内还没有商品哦</p>
        <div class="your-like">
          <img src="./img/line.jpg" alt="#" class="left">
          <span class="like">猜你喜欢</span>
          <img src="./img/line.jpg" alt="#" class="right">
        </div>
        <ul class="goods">
           <li v-for="item in data">
              <img :src="item.smallPic" alt="#">
              <span class="name">{{item.goodsTitle}}</span>
              <span class="price">¥ {{item.goodsPrice}}</span>
           </li>
        </ul>
        <div class="like1" @click="likeGoods($event)">点击加载</div>
        <ul class="goods">
            <li v-for="item in data1">
            <img :src="item.smallPic" alt="#">
            <span class="name">{{item.goodsTitle}}</span>
            <span class="price">¥ {{item.goodsPrice}}</span>
        </li>
      </ul>
        <div style="width: 750px; height: 280px;"></div>
        <bottom></bottom>
        <img src="./img/shop_1.jpg" alt="#" class="shop_1">
    </div>
</template>

<script>
import bottom from '../bottom/bottom.vue'
var a = 1;
export default {
  components: {bottom},
  data () {
    return {
      title: '购物车',
      data:[],
      data1:[]
    }
  },
  methods: {
    youLike(){
      this.$http.get("/api/guessYouLike.htm",{
        params:{move:a}
      }).then((res) =>{
        this.data = res.data.data;
      }).catch(function(error) {
        console.log(error);
      })
    },
    likeGoods(event){
      a = 5;
      this.$http.get("/api/guessYouLike.htm",{
        params:{move:a}
      }).then((res) =>{
        this.data1 = res.data.data;
      }).catch(function(error) {
        console.log(error);
      })
      event.currentTarget.style.display = "none";
    }
  },
  created:function() {
    this.youLike();
  }
}
</script>

<style>
  @import url(../../style/common1.css);
  .shopping-cart{
    width: 750px;
    margin: 0 auto;
  }
  .head{
    width: 100%;
    height: 128px;
    background-color: #d22131;
    position: relative;
  }
  .head span{
    color: #fff;
    font-size: 40px;
    font-family: '宋体';
    position: absolute;
    top: 66px;
    left: 50%;
    margin-left: -61px;
  }
  .shop{
    width: 200px;
    height: 200px;
    box-sizing: content-box;
    padding-top: 80px;
  }
  .tip{
    font-family: '华文仿宋';
    font-size: 32px;
    font-weight: bold;
    color: #666;
    padding-top: 60px;
  }
  .your-like{
    width: 100%;
    padding-top: 50px;
    position: relative;
  }
  .your-like .like{
    font-family: '华文仿宋';
    font-size: 34px;
    font-weight: bold;
    color: #666;
  }
  .your-like .left{
    width: 281px;
    height: 41px;
    position: absolute;
    top: 50px;
    left: 15px;
  }
  .your-like .right{
    width: 281px;
    height: 41px;
    position: absolute;
    top: 50px;
    right: 15px;
  }
  .goods{
    width: 100%;
    position: relative;
  }
  .goods > li{
    display: inline-block;
    width: 370px;
    height: 350px;
    position: relative;
  }
  .goods li img{
    position: absolute;
    top: 30px;
    left: 50px;
    width: 250px;
    height: 250px;
  }
  .goods .name{
    position: absolute;
    top: 290px;
    left: 0px;
    letter-spacing: -1px;
    font-family: '新宋体';
    font-weight: bold;
    font-size: 26px;
    color: #3d3d3d;
  }
  .goods .price{
    position: absolute;
    top: 360px;
    left: 130px;
    font-family: '新宋体';
    font-weight: bold;
    font-size: 26px;
    color: red;
  }
  .shop_1{
    width: 71px;
    height: 86px;
    position: fixed;
    bottom: 4px;
    left: 50%;
    margin-left: 80px;
  }
  .like1{
    width: 750px;
    height: 30px;
    font-size: 20px;
    font-family: 新宋体;
    color: #848484;
    line-height: 30px;
    position: fixed;
    bottom: 96px;
  }
</style>
