<template>
  <!--已登录购物车-->
    <div class="logged">
        <header>
            <span><b>{{title}}</b></span>
            <a href="#" @click="change1">{{finish}}</a>
        </header>
        <section class="body">
            <div class="ad">
                <p>手机下单也买酒商品满99元包运费</p>
            </div>
            <ul class="goods">
                <li>
                    <div class="line"></div>
                    <div @click="change2($event)">
                      <img src="../../assets/no.jpg" alt="#" class="no2">
                      <img src="../../assets/yes.jpg" alt="#" class="yes2">
                    </div>
                    <img src="../../assets/wine22.jpg" alt="#">
                    <span class="name">拉菲传说波尔多红葡萄酒</span>
                    <span class="price">¥ 62.0</span>
                    <button class="sub" @click="sub($event)"></button>
                    <input type="text" class="number" value="1" @keyup="number($event)">
                    <button class="add" @click="add($event)"></button>
                </li>
              <li>
                <div class="line"></div>
                <div @click="change2($event)">
                  <img src="../../assets/no.jpg" alt="#" class="no2">
                  <img src="../../assets/yes.jpg" alt="#" class="yes2">
                </div>
                <img src="../../assets/wine22.jpg" alt="#">
                <span class="name">拉菲传说波尔多红葡萄酒</span>
                <span class="price">¥ 62.0</span>
                <button class="sub" @click="sub($event)"></button>
                <input type="text" class="number" value="1" @keyup="number($event)">
                <button class="add" @click="add($event)"></button>
              </li>
              <li>
                <div class="line"></div>
                <div @click="change2($event)">
                  <img src="../../assets/no.jpg" alt="#" class="no2">
                  <img src="../../assets/yes.jpg" alt="#" class="yes2">
                </div>
                <img src="../../assets/wine22.jpg" alt="#">
                <span class="name">拉菲传说波尔多红葡萄酒</span>
                <span class="price">¥ 62.0</span>
                <button class="sub" @click="sub($event)"></button>
                <input type="text" class="number" value="1" @keyup="number($event)">
                <button class="add" @click="add($event)"></button>
              </li>
              <li>
                <div class="line"></div>
                <div @click="change2($event)">
                  <img src="../../assets/no.jpg" alt="#" class="no2">
                  <img src="../../assets/yes.jpg" alt="#" class="yes2">
                </div>
                <img src="../../assets/wine22.jpg" alt="#">
                <span class="name">拉菲传说波尔多红葡萄酒</span>
                <span class="price">¥ 62.0</span>
                <button class="sub" @click="sub($event)"></button>
                <input type="text" class="number" value="1" @keyup="number($event)">
                <button class="add" @click="add($event)"></button>
              </li>
            </ul>
            <div style="width: 750px; height: 165px;"></div>
            <div class="bottom1">
              <div @click="change3($event)">
                <img src="../../assets/no.jpg" alt="#" class="all-no">
                <img src="../../assets/yes.jpg" alt="#" class="all-yes">
                <span class="all">全选</span>
              </div>
              <button class="del" @click="cancel($event)">{{del}}</button>
            </div>
            <footer>
              <bottom></bottom>
              <img src="../../assets/shop_1.jpg" alt="#" class="shop_1">
            </footer>
        </section>
    </div>
</template>

<script>
  import bottom from '../bottom/bottom.vue'
export default {
  components: {bottom},
  data() {
    return {
      title: '购物车',
      finish: '完成',
      del: '删除'
    }
  },
  methods: {
    number(event) {
      var ev = event.currentTarget;
      ev.value = ev.value.replace(/[^0-9-]+/, '');
      if (ev.value <= 1) {
        ev.value = 1;
      }
      if (ev.value >= 999) {
        ev.value = 999;
      }
    },
    sub(event) {
      var oTex = event.currentTarget.parentNode.querySelector(".number");
      oTex.value = Number(oTex.value) - 1;
      if (oTex.value <= 1) {
        oTex.value = 1;
      }
    },
    add(event) {
      var oTex = event.currentTarget.parentNode.querySelector(".number");
      oTex.value = Number(oTex.value) + 1;
      if (oTex.value >= 999) {
        oTex.value = 999;
      }
    },
    change1(){
      if(this.finish == "完成"){
        this.finish = "返回";
        this.del = "去结算";
      }else{
        this.finish = "完成";
        this.del = "删除";
      }
    },
    change2(event) {
      var oImg = event.currentTarget.querySelector(".yes2");
      if (oImg.style.display == 'none') {
        oImg.style.display = "block";
      } else {
        oImg.style.display = "none";
      }
    },
    change3(event) {
      var oImg = event.currentTarget.querySelector(".all-yes");
      var oUl = document.querySelector(".goods");
      var aLi = oUl.getElementsByTagName("li");
      if (oImg.style.display == 'none') {
        oImg.style.display = "block";
        for (let i = 0; i < aLi.length; i++) {
          var oY = aLi[i].querySelector(".yes2");
          oY.style.display = "block";
        }
      } else {
        oImg.style.display = "none";
        for (let i = 0; i < aLi.length; i++) {
          var oY = aLi[i].querySelector(".yes2");
          oY.style.display = "none";
        }
      }
    },
    cancel(event){
      var v = event.currentTarget.innerHTML;
      var aY = document.querySelectorAll(".yes2");
      if(v == "删除"){
        for(let i=0;i<aY.length;i++){
          var c = aY[i].style.display;
          if(c == "block"){
            var oLi = aY[i].parentNode.parentNode;
            oLi.parentNode.removeChild(oLi);
          }
        }
      }
    }
  }
}
</script>

<style>
 @import url(../../style/common1.css);
  .logged{
    width: 750px;
    margin: 0 auto;
  }
  header{
    width: 100%;
    height: 128px;
    background-color: #d22131;
    position: relative;
  }
  header span{
    color: #fff;
    font-size: 40px;
    font-family: '宋体';
    position: absolute;
    top: 80px;
    left: 50%;
    margin-left: -61px;
  }
  header a{
    color: #fff;
    font-family: '宋体';
    font-weight: bold;
    font-size: 36px;
    position: absolute;
    top: 84px;
    right: 31px;
  }
  .body{
    width: 100%;
    height: 1206px;
    background-color: #eaeaea;
    position: relative;
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
    top: 8px;
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
    margin-top: 10px;
    position: relative;
  }
  .body .goods li .no1{
    position: absolute;
    top: 5px;
    left: 15px;
  }
  .body .goods li .yes1{
    position: absolute;
    top: 5px;
    left: 15px;
    display: none;
  }
  .body .goods li .top{
    font-family: '华文中宋';
    font-size: 26px;
    color: #848484;
    position: absolute;
    top: 15px;
    left: 70px;
  }
  .body .goods li .line{
    width: 100%;
    height: 1px;
    background: #d6d6d6;
    position: absolute;
    top: 54px;
  }
  .body .goods li .no2{
    position: absolute;
    top: 170px;
    left: 30px;
  }
  .body .goods li .yes2{
    position: absolute;
    top: 170px;
    left: 30px;
    display: none;
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
  .body .bottom1{
    width: 750px;
    height: 70px;
    margin: 0 auto;
    border-top: 1px #d6d6d6 solid;
    background-color: #fff;
    position: fixed;
    bottom: 96px;
  }
  .body .bottom1 .all-no{
    position: absolute;
    left: 10px;
    top: 10px;
  }
  .body .bottom1 .all-yes{
    position: absolute;
    left: 10px;
    top: 10px;
    display: none;
  }
  .body .bottom1 .all{
    font-family: '华文中宋';
    font-size: 30px;
    color: #848484;
    position: absolute;
    left: 60px;
    top: 20px;
  }
  .body .bottom1 .del{
    width: 161px;
    height: 57px;
    background: #e64348;
    color: #fff;
    font-size: 20px;
    position: absolute;
    top: 5px;
    right: 18px;
  }
  .body footer{
    position: relative;
  }
  .body .shop_1{
    position: fixed;
    bottom: 4px;
    left: 50%;
    margin-left: 80px;
  }
</style>
