<template>
  <!--已登录购物车-->
    <div class="logged">
        <header>
            <span>{{title}}</span>
            <a href="#" @click="change1">{{finish}}</a>
        </header>
        <section class="body">
            <div class="ad">
                <p>手机下单也买酒商品满99元包运费</p>
            </div>
            <ul class="goods">
                <li v-for="item in data" :id="item.goodsId">
                    <div class="line"></div>
                    <div @click="change2($event)">
                      <img src="./img/no.jpg" alt="#" class="no2">
                      <img src="./img/yes.jpg" alt="#" class="yes2">
                    </div>
                    <img :src="item.smallPic" alt="#">
                    <span class="name">{{item.goodsTitle}}</span>
                    <span class="price">¥ {{item.goodsPrice}}</span>
                    <button class="sub" @click="sub($event)"></button>
                    <input type="text" class="number" :value="item.goodsNum" @keyup="number($event)">
                    <button class="add" @click="add($event)"></button>
                </li>
            </ul>
            <div style="width: 750px; height: 165px;"></div>
            <div class="bottom1">
              <div @click="change3($event)">
                <img src="./img/no.jpg" alt="#" class="all-no">
                <img src="./img/yes.jpg" alt="#" class="all-yes">
                <span class="all">全选</span>
              </div>
              <button class="del" @click="cancel($event)">{{del}}</button>
            </div>
            <footer>
              <bottom></bottom>
              <img src="./img/shop_1.jpg" alt="#" class="shop_1">
            </footer>
        </section>
    </div>
</template>

<script>
  import bottom from '../bottom/bottom.vue'
  var goodId = "";
  var goodNum = "";
export default {
  components: {bottom},
  data() {
    return {
      title: '购物车',
      finish: '完成',
      del: '删除',
      data: []
    }
  },
  methods: {
    number(event) {
      var ev = event.currentTarget;
      ev.value = ev.value.replace(/[^0-9-]+/, '');
      var oLi = event.currentTarget.parentNode;
      if (ev.value <= 1) {
        ev.value = 1;
      }
      if (ev.value >= 999) {
        ev.value = 999;
      }
      this.$http.get("/api/addGoods.htm",{
        params:{
          goodsId:oLi.id,
          goodsNum:ev.value
        }
      }).then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      })
    },
    sub(event) {
      var oTex = event.currentTarget.parentNode.querySelector(".number");
      oTex.value = Number(oTex.value) - 1;
      var oLi = event.currentTarget.parentNode;
      if (oTex.value <= 1) {
        oTex.value = 1;
      }
      this.$http.get("/api/addGoods.htm",{
        params:{
          goodsId:oLi.id,
          goodsNum:oTex.value
        }
      }).then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      })
    },
    add(event) {
      var oTex = event.currentTarget.parentNode.querySelector(".number");
      oTex.value = Number(oTex.value) + 1;
      var oLi = event.currentTarget.parentNode;
      if (oTex.value >= 999) {
        oTex.value = 999;
      }
      this.$http.get("/api/addGoods.htm",{
        params:{
          goodsId:oLi.id,
          goodsNum:oTex.value
        }
      }).then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      })
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
            if(!goodId){
              goodId = oLi.id + "";
            }else{
              goodId = goodId + "," + oLi.id;
            }
            oLi.parentNode.removeChild(oLi);
          }
        }
        console.log(goodId);
        this.$http.get("/api/delete.htm",{
          params:{
            goodsId: goodId
          }
        }).then(function(res) {
          console.log(res.data);
        }).catch(function(error) {
          console.log(error);
        })
      }else{
        for(let i=0;i<aY.length;i++){
          let b = aY[i].style.display;
          if(b == "block"){
            var oLi1 = aY[i].parentNode.parentNode;
            if(!goodNum){
              goodNum = oLi1.id + "";
            }else{
              goodNum = goodNum + "," + oLi1.id;
            }
          }
        }
        this.$http.get("/api/select.htm",{
          params:{
            goodsId:goodNum
          }
        }).then(function(res) {
          console.log(res.data);
        }).catch(function(error) {
          console.log(error);
        })

        this.$router.push({
          path: '/orderSure'
        })
      }
    },
    newGoods(){
      this.$http.get("/api/querybyuserid.htm",{
        params:{}
      }).then((res) => {
        this.data = res.data.data.products;
      }).catch(function(error){
        console.log(error);
      })
    }
  },
  created:function() {
    this.newGoods();
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
    position: absolute;
    top: 80px;
    left: 50%;
    margin-left: -61px;
  }
  header a{
    color: #fff;
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
    padding-top: 15px;
    position: relative;
  }
  .body .goods li .line{
    width: 100%;
    height: 1px;
    background: #d6d6d6;
    position: absolute;
    top: 54px;
  }
  .body .goods li .no2{
    width: 44px;
    height: 44px;
    position: absolute;
    top: 170px;
    left: 30px;
  }
  .body .goods li .yes2{
    width: 44px;
    height: 44px;
    position: absolute;
    top: 170px;
    left: 30px;
    display: none;
  }
  .body .goods li img{
    width: 112px;
    height: 222px;
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
    background: url(./img/sub.jpg) no-repeat;
    background-size: 50px 50px;
    position: absolute;
    top: 240px;
    left: 250px;
  }
  .body .goods li .add{
    width: 50px;
    height: 50px;
    border: 0;
    outline: none;
    background: url(./img/add.jpg) no-repeat;
    background-size: 50px 50px;
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
    width: 44px;
    height: 44px;
    position: absolute;
    left: 10px;
    top: 10px;
  }
  .body .bottom1 .all-yes{
    width: 44px;
    height: 44px;
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
  footer{
    position: relative;
  }
  .shop_1{
    width: 71px;
    height: 86px;
    position: fixed;
    left: 460px;
    bottom: 5px;
  }
</style>
