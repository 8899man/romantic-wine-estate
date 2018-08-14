<template>
  <div class="gdetail">
    <!--顶部商品详情及其按钮部分-->
        <div v-on:click="retur()">
          <img class="img1"  src="./img/icon.png" alt="返回按钮不见了"/>
        </div>
    <div class="gdetailxq">
      商品详情
    </div>
      <div>
        <img class="img2" src="./img/lianj.png" v-on:click="push()" alt="主页按钮不见了"/>
      </div>
        <div class="gdetaillbt"><!--轮播图-->
          <mt-swipe :auto="2000">
            <mt-swipe-item >
              <img src="./img/wine.png" alt="图片不见了"/>
            </mt-swipe-item>
            <mt-swipe-item >
              <img src="./img/wine1.png" alt="图片不见了"/>
            </mt-swipe-item>
            <mt-swipe-item >
              <img src="./img/wine2.png" alt="图片不见了"/>
            </mt-swipe-item>
            <mt-swipe-item >
              <img src="./img/wine1.png" alt="图片不见了"/>
            </mt-swipe-item>
            <mt-swipe-item >
              <img src="./img/wine2.png" alt="图片不见了"/>
            </mt-swipe-item>
          </mt-swipe>
        </div>
    <div class="wxin"><!--具体信息栏-->
       <ul><!--商品名称及价格等-->
         <li class="wname">传说传说传传说传说传说传说传说vvv传说传说传说传说传说传说</li>
         <li class="wpiece">&yen 62</li>
         <li class="wshop">热销 6526532</li>
       </ul>
    </div>
    <div class="xxxx"><!--商品具体信息栏-->
      <ul>
        <li>原产地:美国</li>
        <li>口感:圆润</li>
        <li>类型:起泡酒</li>
      </ul>
    </div>
    <div class="wcir"><!--评论栏-->
      <div class="spcir">
        商品评论
        <div class="und"><!--跳转到评论的按钮-->
          <img src="./img/und.png" v-on:vlick="push1()" alt="跳转的图标">
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
      <div class="gouwu" v-on:click="add"><!--加入购物车按钮-->
       加入购物车
      </div>
      <div class="xinxin"><!--原本空心图片-->
        <img src="./img/xinxin.png" alt="心形图不见了"/>
      </div>
      <div class="honxin"><!--点击关注时候变红的心形-->
        <img v-show="exist" id="changec" src="./img/honxin.png" alt="红心">
      </div>
      <div class="guanzhu" v-on:click="change()"><!--点击关注的按钮-->
        关注
      </div>
      <div class="gwctu">
        <p id="number">0</p>
        <img src="./img/gwctu.png"><!--购物车图标-->
      </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      exist: false
    }
  },
  methods: {
    add () {
      const value1 = document.getElementById('number')
      value1.innerHTML = Number(value1.innerHTML) + 1
    },
    change () {
      this.exist = !this.exist
    },
    retur () {
      this.$router.go(-1)
    },
    push () {
      this.$router.push({
        path: '/goodMain'
      })
    },
    push1 () {
      this.$router.push({
        path: '/commentlist'
      })
    }
  }
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
  .gdetaillbt{
    width:750px;
    height:440px;
    background-color:#fff;
    margin:0px;
    padding:0px;
    position:absolute;
    left:0px;
    top:128px;}
  .wxin{background-color: #fff;
    height:273px;
    width:750px;
    position:absolute;
    left:0px;
    top:568px;
    border-top:#DADADA 1px solid;
    border-bottom: #DADADA 1px solid;
    margin:0px;
    padding-top:22px;}
  ul,li{list-style:none;
    text-align:left;}
  .wname{font-size:35px;
    width:640px;
    height:50px;
    margin-top:-10px;
    }
  .wpiece{
    width:708px;
    height:82px;
    position:absolute;
    left:44px;
    top:160px;
    color:#F9121A;
    font-size:50px;
    margin:0px;
    padding:0px;
  }
  .wshop{width:660px;
    height:102px;
    position:absolute;
    left:43px;
    top:230px;
    font-size:30px;
    color:#B5B5B5;
    margin:0px ;
    padding:0px ;
  }
  .wcir{background-color:#EBEBEB;
    width:750px;
    height:136px;
    position:absolute;
    left:0px;
    top:1080px;
    margin-top:12px;
    }
  .xxxx{
    width:750px;
    height:210px;
    position:absolute;
    left:0px;
    top:875px;
    color:#8A8A8A;
    padding:0px;
    margin-top:-14px;
    }
  .xxxx li{
    width:750px;
    height:70px;
    font-size:30px;
    line-height:70px;
    margin:0px;
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
    top:-1.5px;
    background-color:#EBEBEB;
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
    top:1216px;
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
    left:250px;
    bottom:10px;
    margin:0px;
  }
 p{
    color:#fff;
    font-size:30px;
    margin:0px;
    position:absolute;
    left:70px;
    top:5px;
    z-index:2;
  }
  .xinxin{
    width:100px;
    height:100px;
    position:absolute;
    left:0px;
    bottom:-28px;
    margin:0px;
  }
.honxin{
  width:100px;
  height:100px;
  position:absolute;
  left:0px;
  bottom:-18px;
  margin:0px;
  z-index:2;
}
  .guanzhu{width:70px;
    color:#747474;
    font-size:30px;
    height:100px;
    position:absolute;
    background-color:#fff;
    left:100px;
    bottom:-25px;}
</style>
