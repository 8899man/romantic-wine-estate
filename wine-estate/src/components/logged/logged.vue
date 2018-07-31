<template>
  <!--已登录购物车-->
    <div class="logged">
        <header class="head">
            <span><b>{{title}}</b></span>
            <a href="#">{{finish}}</a>
        </header>
        <section class="body">
            <div class="ad">
                <p>手机下单也买酒商品满99元包运费</p>
            </div>
            <ul class="goods">
                <li>
                    <div class="line"></div>
                    <img src="../../assets/wine22.jpg" alt="#">
                    <span class="name">拉菲传说波尔多红葡萄酒</span>
                    <span class="price">¥ 62.0</span>
                    <button class="sub" @click="sub($event)"></button>
                    <input type="text" class="number" value="1" @keyup="number($event)">
                    <button class="add" @click="add($event)"></button>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: '购物车',
      finish: '完成'
    }
  },
  methods : {
    number(event){
      var ev = event.currentTarget;
      ev.value = ev.value.replace(/[^0-9-]+/,'');
      if(ev.value <= 1){
        ev.value = 1;
      }
      if(ev.value >= 999){
        ev.value = 999;
      }
    },
    sub(event){
      var oTex = event.currentTarget.parentNode.querySelector(".number");
      oTex.value = Number(oTex.value)-1;
      if(oTex.value <= 1){
        oTex.value = 1;
      }
    },
    add(event){
      var oTex = event.currentTarget.parentNode.querySelector(".number");
      oTex.value = Number(oTex.value)+1;
      if(oTex.value >= 999){
        oTex.value = 999;
      }
    }
  }
}
</script>

<style scoped>
 @import url(../../style/common1.css);
  .logged{
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
  .head a{
    color: #fff;
    font-family: '宋体';
    font-weight: bold;
    font-size: 36px;
    position: absolute;
    top: 70px;
    right: 31px;
  }
  .body{
    width: 100%;
    height: 1206px;
    background-color: #eaeaea;
  }
  .body .ad{
    width: 100%;
    height: 40px;
    background-color: #fff;
    position: relative;
  }
  .body .ad p{
    font-family: '华文宋体';
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #848484;
    position: absolute;
    top: 5px;
    left: 170px;
  }
  .body .goods{
    padding-top: 15px;
    width: 100%;
  }
  .body .goods li{
    width: 100%;
    height: 340px;
    background-color: #ffffff;
    position: relative;
  }
  .body .goods li .top{
    position: absolute;
    top: 0px;
    left: 0px;
    font-family: '华文中宋';
    color: #848484;
  }
  .body .goods li .line{
    width: 100%;
    height: 1px;
    background: #d6d6d6;
    position: absolute;
    top: 54px;
  }
  .body .goods li img{
    position: absolute;
    top: 85px;
    left: 90px;
  }
  .body .goods li .name{
    font-family: '新宋体';
    font-size: 24px;
    font-weight: bold;
    color: #666;
    position: absolute;
    top: 110px;
    left: 250px;
  }
  .body .goods li .price{
    font-family: '新宋体';
    font-size: 24px;
    color: red;
    position: absolute;
    top: 180px;
    left: 250px;
  }
  .body .goods li .sub{
    width: 50px;
    height: 50px;
    border: 0;
    outline: none;
    background-image: url(../../assets/sub.jpg);
    position: absolute;
    top: 240px;
    left: 250px;
  }
  .body .goods li .add{
    width: 50px;
    height: 50px;
    border: 0;
    outline: none;
    background-image: url(../../assets/add.jpg);
    position: absolute;
    top: 240px;
    left: 400px;
  }
  .body .goods li .number{
    width: 100px;
    height: 50px;
    border: 0px;
    border-top: 1px #d6d6d6 solid;
    border-bottom: 1px #d6d6d6 solid;
    text-align: center;
    font-size: 18px;
    color: #6a6a6a;
    position: absolute;
    top: 240px;
    left: 300px;
  }
</style>
