<template>
    <div class="gdmain">
      <!--顶部搜索及按钮部分-->
      <div class="mainsk">
        <div class="left">
          <img src="../../assets/mainfl.png" alt=""/><!--分类图标-->
        </div>
          <input class="center" type="text" placeholder="搜索商品"/>
        <div class="right">
          <img src="../../assets/sstb.png" alt=""/><!--搜索图标-->
        </div>
      </div>
      <!--顶部轮播图部分-->
      <div class="gdetaillbt"><!--顶部轮播图-->
        <mt-swipe :auto="2000">
          <mt-swipe-item >
            <img src="../../assets/wine.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!--1F可隐藏的静态图,轮播图及按钮部分-->
      <div class="mfirst">
        <!--1F按钮部分-->
        <div class="mtwo">
          <img src="../../assets/mfirst.png" alt="两杯酒图标"/>
        </div>
      <div class="butt">
        1F 进口葡萄酒
      </div >
      <div class="mthree" v-on:click="change()">
        <img src="../../assets/mtwo.png" alt="按钮图标"/><!--一楼按钮-->
      </div>
      </div>
      <!--1F静态图部分-->
      <div v-show="exis" class="mainjt">
        <div class="mainjta">
          <div class="mainjtb">
            <img src="../../assets/mainjtt.png" alt="">
          </div>
          <div class="mainjtc">
          <p>额问题官方网</p>
            <p></p>
          <p>销量: 3652</p>
          <p>&yen: 666</p>
          </div>
        </div>
        <div class="mainjta">
          <div class="mainjtb">
            <img src="../../assets/mainjtt.png" alt="">
          </div>
          <div class="mainjtc">
            <p>额问题官方网</p>
            <p></p>
            <p>销量: 3652</p>
            <p>&yen: 666</p>
          </div>
        </div>
      </div>
      <!--1F轮播图部分-->
      <div v-show="exis" class="gdetaillbt">
        <mt-swipe :auto="2000">
          <mt-swipe-item >
            <img  src="../../assets/wine.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img  src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img  src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img  src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img  src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!--2F可隐藏的静态图,轮播图及按钮部分-->
      <div class="mfirst">
        <div class="mtwo">
          <img src="../../assets/mfirst.png" alt="两杯酒图标"/>
        </div>
        <div class="butt">
          2F 国产葡萄酒
        </div >
        <div class="mthree" v-on:click="change1()">
          <img src="../../assets/mtwo.png" alt="按钮图标"/><!--2F按钮-->
        </div>
      </div>
      <!--2F静态图部分-->
      <div v-show="exis1" class="mainjt">
        <div class="mainjta">
          <div class="mainjtb">
            <img src="../../assets/mainjtt.png" alt="">
          </div>
          <div class="mainjtc">
            <p>额问题官方网</p>
            <p></p>
            <p>销量: 3652</p>
            <p>&yen: 666</p>
          </div>
        </div>
        <div class="mainjta">
          <div class="mainjtb">
            <img src="../../assets/mainjtt.png" alt="">
          </div>
          <div class="mainjtc">
            <p>额问题官方网</p>
            <p></p>
            <p>销量: 3652</p>
            <p>&yen: 666</p>
          </div>
        </div>
      </div>
      <!--2F轮播图部分-->
      <div v-show="exis1" class="gdetaillbt">
        <mt-swipe :auto="2000">
          <mt-swipe-item >
            <img src="../../assets/wine.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!--3F可隐藏的静态图,轮播图及按钮部分-->
      <div class="mfirst">
        <div class="mtwo">
          <img src="../../assets/mfirst.png" alt="两杯酒图标"/>
        </div>
        <div class="butt">
          3F 经典葡萄酒
        </div >
        <div class="mthree" v-on:click="change2()">
          <img src="../../assets/mtwo.png" alt="按钮图标"/><!--一楼按钮-->
        </div>
      </div>
      <!--3F静态图部分-->
      <div v-show="exis2" class="mainjt">
        <div class="mainjta">
          <div class="mainjtb">
            <img src="../../assets/mainjtt.png" alt="">
          </div>
          <div class="mainjtc">
            <p>额问题官方网</p>
            <p></p>
            <p>销量: 3652</p>
            <p>&yen: 666</p>
          </div>
        </div>
        <div class="mainjta">
          <div class="mainjtb">
            <img src="../../assets/mainjtt.png" alt="">
          </div>
          <div class="mainjtc">
            <p>额问题官方网</p>
            <p></p>
            <p>销量: 3652</p>
            <p>&yen: 666</p>
          </div>
        </div>
      </div>
      <!--3F轮播图部分-->
      <div v-show="exis2" class="gdetaillbt">
        <mt-swipe :auto="2000">
          <mt-swipe-item >
            <img src="../../assets/wine.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!--下面无限滚动的商品列表-->
      <div  class="mainjt">
        <div class="mainjta">
          <div class="mainjtb">
            <img src="../../assets/mainjtt.png" alt="">
          </div>
          <div class="mainjtc">
            <p>额问题官方网</p>
            <p></p>
            <p>销量: 3652</p>
            <p>&yen: 666</p>
          </div>
        </div>
        <div class="mainjta">
          <div class="mainjtb">
            <img src="../../assets/mainjtt.png" alt="">
          </div>
          <div class="mainjtc">
            <p>额问题官方网</p>
            <p></p>
            <p>销量: 3652</p>
            <p>&yen: 666</p>
          </div>
        </div>
      </div>
      <div  class="mainjt">
        <div class="mainjta">
          <div class="mainjtb">
            <img src="../../assets/mainjtt.png" alt="">
          </div>
          <div class="mainjtc">
            <p>额问题官方网</p>
            <p></p>
            <p>销量: 3652</p>
            <p>&yen: 666</p>
          </div>
        </div>
        <div class="mainjta">
          <div class="mainjtb">
            <img src="../../assets/mainjtt.png" alt="">
          </div>
          <div class="mainjtc">
            <p>额问题官方网</p>
            <p></p>
            <p>销量: 3652</p>
            <p>&yen: 666</p>
          </div>
        </div>
      </div>
      <div  class="mainjt">
        <div class="mainjta">
          <div class="mainjtb">
            <img src="../../assets/mainjtt.png" alt="">
          </div>
          <div class="mainjtc">
            <p>额问题官方网</p>
            <p></p>
            <p>销量: 3652</p>
            <p>&yen: 666</p>
          </div>
        </div>
        <div class="mainjta">
          <div class="mainjtb">
            <img src="../../assets/mainjtt.png" alt="">
          </div>
          <div class="mainjtc">
            <p>额问题官方网</p>
            <p></p>
            <p>销量: 3652</p>
            <p>&yen: 666</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data (){
        return {
          exis:false,
          exis1:false,
          exis2:false
        }
      },
      methods: {
        change(){
          this.exis = !this.exis;
        },
        change1(){
          this.exis1 = !this.exis1;
        },
        change2(){
          this.exis2 = !this.exis2;
        }
      }
    }
</script>

<style scoped>
  .gdmain{width:750px;
    margin:0 auto;
    }
  .mainsk{
    width:690px;
    height:120px;
    background-color:#d02131;
    margin:0px;
    padding-left:30px;
    padding-right:30px;
    padding-top:15px;
    overflow:hidden;
    position:relative;
   }
  .right{height:58px;
    width:80px;
    background-color:#E78C87;
    float:left;
    margin-top:14px;
    padding-top:25px;
  }
  .left{
    float:left;
    width:100px;
    height:70px;
    margin:0px;
    padding-top:25px;
   }
  .center{background-color:#E78C87;
    width:480px;
    height:81px;
    margin-top:14px;
    border:none;
    color:#F8E8E7;
    font-size: 35px;
    float:left;}
  .gdetaillbt{
    width:750px;
    height:440px;
    margin:0px;
    padding:0px;
  }
  .mainjt{
    width:750px;
    height:410px;
    padding:0px;
    margin:0px;
  }
  .mainjta{
    float:left;
    width:375px;
    height:410px;
    padding:0px;
    margin:0px;
  }
  .mainjtb{
    width:200px;
    height:410px;
    float:left;
    margin:0px;
  }
  .mainjtc{
    width:175px;
    height:410px;
    float:right;
    padding-top:100px;
  }
  .mainjtc p{
    height:60px;
    width:175px;
    color:#626262;
    font-size:30px;
    line-height:60px;
    text-align:left;
    margin:0px;
  }
  p:nth-child(4){
    color:#f00;
    font-size:50px;
  }
  .butt{
     width:580px;
     height:79px;
     line-height:79px;
     font-size:35px;
     text-align:left;
     float:left;
   }
  .mfirst{
    width:750px;
    height:80px;
    padding:0px;
    margin:0px;
    border-top:#DADADA solid 1px;
    border-bottom:#DADADA solid 1px;
  }
  .mtwo,.mthree,.butt{
    float:left;
    margin:0px;
  }
  .mtwo{
    padding-top:5px;
  }
</style>
