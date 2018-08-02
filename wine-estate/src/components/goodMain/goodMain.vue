<template>
    <div class="gdmain">
      <div class="mainsk">
        <div class="left">
          <img src="../../assets/mainfl.png" alt=""/>
        </div>
          <input class="center" type="text" placeholder="搜索商品"/>
        <div class="right">
          <img src="../../assets/sstb.png" alt=""/>
        </div>
      </div>
      <div class="gdetaillbt"><!--轮播图-->
        <mt-swipe :auto="2000">
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="mfirst">
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
      <div v-show="exis" class="gdetaillbt">
        <mt-swipe :auto="2000">
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="mfirst">
        <div class="mtwo">
          <img src="../../assets/mfirst.png" alt="两杯酒图标"/>
        </div>
        <div class="butt">
          2F 国产葡萄酒
        </div >
        <div class="mthree" v-on:click="change1()">
          <img src="../../assets/mtwo.png" alt="按钮图标"/><!--一楼按钮-->
        </div>
      </div>
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
      <div v-show="exis1" class="gdetaillbt">
        <mt-swipe :auto="2000">
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
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
      <div v-show="exis2" class="gdetaillbt">
        <mt-swipe :auto="2000">
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine1.png" alt="无限轮播"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img class="img3" src="../../assets/wine2.png" alt="无限轮播"/>
          </mt-swipe-item>
        </mt-swipe>
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
    width:505px;
    height:81px;
    margin-top:14px;
    border:none;
    color:#F8E8E7;
    font-size: 40px;
    float:left;
    z-index:2}
  .gdetaillbt{
    width:750px;
    height:440px;
    background-color:#fff;
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
  swipe{width:750px;height:440px}
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
