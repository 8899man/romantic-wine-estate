<template>
  <div class="gdetail">
      <img  class="img1" src="../../assets/icon.png" alt="返回"/>
    <div class="gdetailxq">
      商品详情
    </div>
      <img class="img2" src="../../assets/lianj.png" alt="链接"/>
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
    <div class="wxin"><!--具体信息栏-->
      <div class="but1"><!--跳转到评价页面的按钮-->
        <img src="../../assets/but1.png" alt="按钮">
      </div>
      <div class="wmoney"><!--价格前面的标志-->
        <img src="../../assets/money.png" alt="标志"><!--弹出商品详情的按钮-->
      </div>
      <div class="whot"><!--热销-->
        <img src="../../assets/hot.png" alt="标志">
      </div>
       <ul><!--商品名称及价格等-->
         <li class="wname">传说传说传传说传说传说传说传说vvv传说传说传说传说传说传说</li>
         <li class="wyname">RafeiRafeiRafei</li>
         <li class="wpiece">62</li>
         <li class="wshop">6526532</li>
       </ul>
    </div>
    <div class="wcir"><!--评论栏-->
      <div class="spcir">
        商品评论
        <div class="und"><!--跳转到评论的按钮-->
          <img src="../../assets/und.png" alt="图标">
        </div>
      </div>
      <div class="hpd"><!--好评度-->
        好评度
      </div>
      <div class="hpdz"><!--接受好评度的数据-->
        93%
      </div>
      <div class="hprs"><!--评论人数-->
        评论人数
      </div>
      <div class="hpds"><!--评论人数的数据-->
        685123
      </div>
    </div>
    <div class="db"><!--底部信息栏-->
      <div class="gouwu"><!--加入购物车按钮-->
        加入购物车
      </div>
      <div class="xinxin"><!--点击关注时候变红的心形-->
        <img src="../../assets/xinxin.png" alt="心形">
      </div>
      <div class="guanzhu"><!--点击关注的按钮-->
        关注
      </div>
      <div class="gwctu">
        <p>1</p><!--购物车内的物品数量-->
        <img src="../../assets/gwctu.png" alt="购物车"><!--购物车图标-->
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodDetail'
}
</script>

<style scoped>
.gdetail {width:750px;
  height:128px;
  background-color:#cc2030;
  margin:0 auto;
  padding:0px;
  position:relative;
  }
.img1{width:30px;
  height:52px;
  position:absolute;
  left:60px;
  top:60px;}
a{color:#fff;
  text-decoration: none;}
.gdetailxq {margin:0px;
  padding:0px;
  position:absolute;
  width:162px;
  height:40px;
  left:293px;
  top:61px;
  font-size:40px;
  line-height:40px;
  color:#FFFDFD;
}
.img2{width:87px;
  height:50px;
  position:absolute;
  right:0px;
  bottom:5px;}
.img3{width:750px;
  height:440px;}
  .gdetaillbt{
    width:750px;
    height:440px;
    background-color:#fff;
    margin:0px;
    padding:0px;
    position:absolute;
    left:0px;
    top:128px;}
  swipe{width:750px;height:440px}
  .wxin{background-color: #fff;
    height:286px;
    width:750px;
    position:absolute;
    left:0px;
    top:568px;
    border-top:#DADADA 1px solid;
    border-bottom: #DADADA 1px solid;
    margin:0px;
    padding-top:22px;}
  ui,li{list-style:none;
    text-align:left;}
  .wname{font-size:35px;
    width:640px;
    height:50px;
    margin-top:-10px;
  word-break: normal;}
  .wyname{
    width:730px;
    height:50px;
    color:#B5B5B5;
    font-size:35px;
    margin:0px;
    padding-top:60px;
  }
  .wpiece{
    width:708px;
    height:82px;
    position:absolute;
    left:66px;
    top:200px;
    color:#F9121A;
    font-size:50px;
    margin:0px;
    padding:0px;
  }
  .wshop{width:660px;
    height:102px;
    position:absolute;
    left:110px;
    top:263px;
    font-size:25px;
    color:#B5B5B5;
    margin:0px ;
    padding:0px ;
  }
  .but1{position:absolute;
    top:20px;
    right:0px;
    margin:0px ;
    padding:0px;}
  .wmoney{
    position:absolute;
    left:40px;
    top:218px;
  }
  .whot{
    position:absolute;
    left:34px;
    top:265px;
    width:80px;
    height:80px;
  }
  .wcir{background-color:#EBEBEB;
    width:750px;
    height:114px;
    position:absolute;
    left:0px;
    top:875px;
    }
  .spcir{width:750px;
    height:60px;
    color:#8A8A8A;
    font-size:30px;
    line-height:60px;
    text-align:left;
    padding-left:42px;
    }
  .und{
    position:absolute;
    right:0px;
    top:0px;
  }
  .hpd{width:750px;
    height:34px;
    text-align:left;
    line-height:34px;
    font-size:30px;
    color:#8A8A8A;
    padding-left:43px;
  }
  .hpdz{
    width:72px;
    height:20px;
    position:absolute;
    left:150px;
    top:60px;
    font-size:30px;
    color:#F9121A;
  }
  .hpds{
    width:72px;
    height:24px;
    position:absolute;
    left:430px;
    top:60px;
    font-size:30px;
  }
  .hprs{
  width:300px;
  height:34px;
  position:absolute;
  left:200px;
  top:55px;
  font-size:30px;
    color:#8A8A8A;
}
  .db{width:750px;
    height:120px;
    background-color:#fff;
    position:absolute;
    left:0px;
    top:1010px;
    overflow:hidden;
    margin:0px;
  }
  .gouwu{
  color:#fff;
  background-color:#E12442;
  width:300px;
  height:120px;
  position:absolute;
  right:0px;
  bottom:0px;
    line-height:120px;
    font-size:40px;
   }
  .gwctu{
    width:100px;
    height:100px;
    position:absolute;
    right:400px;
    bottom:6px;

  }
  .gwctu,p{
    color:#f00;
    font-size:30px;
    margin:0px;
  }
  .xinxin{
    width:100px;
    height:100px;
    position:absolute;
    left:0px;
    bottom:-28px;
    margin:0px;
  }
  .guanzhu{width:100px;
    color:#747474;
    font-size:35px;
    height:100px;
    position:absolute;
    left:100px;
    bottom:-20px;}
</style>
