<template>
    <!--未登录购物车-->
    <div class="shopping-cart">
        <header class="head">
            <span><b>{{title}}</b></span>
        </header>
        <img src="./img/shopping.jpg" alt="#" class="shop">
        <p class="tip">你的购物车内还没有商品哦</p>
        <div class="your-like">
          <img src="./img/line.jpg" alt="#" class="left">
          <span class="like">猜你喜欢</span>
          <img src="./img/line.jpg" alt="#" class="right">
        </div>
        <ul class="goods">
           <li>
              <img src="./img/wine11.jpg" alt="#">
              <span class="name">傲葡山庄干红葡萄酒</span>
              <span class="price">¥ 398.0</span>
           </li>
           <li>
              <img src="./img/wine11.jpg" alt="#">
              <span class="name">傲葡山庄干红葡萄酒</span>
              <span class="price">¥ 398.0</span>
           </li>
        </ul>
        <bottom></bottom>
        <img src="./img/shop_1.jpg" alt="#" class="shop_1">
    </div>
</template>

<script>
import bottom from '../bottom/bottom.vue'
export default {
  components: {bottom},
  data () {
    return {
      title: '购物车'
    }
  }
}
</script>

<style>
  @import url(../../style/common1.css);
  .shopping-cart{
    width: 750px;
    height: 1334px;
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
    position: absolute;
    top: 50px;
    left: 15px;
  }
  .your-like .right{
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
    position: relative;
  }
  .goods .name{
    position: absolute;
    top: 290px;
    left: 70px;
    letter-spacing: -1px;
    font-family: '新宋体';
    font-weight: bold;
    font-size: 26px;
    color: #3d3d3d;
  }
  .goods .price{
    position: absolute;
    top: 330px;
    left: 130px;
    font-family: '新宋体';
    font-weight: bold;
    font-size: 26px;
    color: red;
  }
  .shop_1{
    position: fixed;
    bottom: 4px;
    left: 50%;
    margin-left: 80px;
  }
</style>
