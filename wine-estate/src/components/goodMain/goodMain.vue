<template>
    <div class="gdmain">
      <!--顶部搜索及按钮部分-->
      <div class="mainsk">
          <div class="left" >
            <img src="./img/mainfl.png" v-on:click="push()" alt="分类图标不见了"/><!--分类图标-->
          </div>
          <input class="center"  type="text" v-on:click="push1()" placeholder="搜索商品"/>
        <div class="right" >
          <img src="./img/sstb.png" alt="搜索图标不见了"/><!--搜索图标-->
        </div>
      </div>
      <!--顶部轮播图部分-->
      <div class="gdetaillbt"><!--顶部轮播图-->
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
      <!--1F可隐藏的静态图,轮播图及按钮部分-->
      <div class="mfirst">
        <!--1F按钮部分-->
        <div class="mtwo">
          <img src="./img/mfirst.png" alt="两杯酒图标"/>
        </div>
      <div class="butt">
        1F 进口葡萄酒
      </div >
      <div class="mthree" v-on:click="change()">
        <img src="./img/mtwo.png" alt="按钮图标"/><!--一楼按钮-->
        <img  class="mx" v-show="exis" src="./img/mtwox.png" alt="按钮图标下">
        <!--一楼按钮下-->
      </div>
      </div>
      <!--1F静态图部分-->
      <div v-show="exis" class="mainjt">
        <div class="mainjta">
          <div class="mainjtb">
            <img src="./img/mainjtt.png" alt="静态图">
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
            <img src="./img/mainjtt.png" alt="静态图">
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
            <img  src="./img/wine.png" alt="图片不见了"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img  src="./img/wine1.png" alt="图片不见了"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img  src="./img/wine2.png" alt="图片不见了"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img  src="./img/wine1.png" alt="图片不见了"/>
          </mt-swipe-item>
          <mt-swipe-item >
            <img  src="./img/wine2.png" alt="图片不见了"/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!--2F可隐藏的静态图,轮播图及按钮部分-->
      <div class="mfirst">
        <div class="mtwo">
          <img src="./img/mfirst.png" alt="两杯酒图标"/>
        </div>
        <div class="butt">
          2F 国产葡萄酒
        </div >
        <div class="mthree" v-on:click="change1()">
          <img src="./img/mtwo.png" alt="按钮图标"/><!--2F按钮-->
          <img  class="mx" v-show="exis1" src="./img/mtwox.png" alt="按钮图标下">
          <!--二楼按钮下-->
        </div>
      </div>
      <!--2F静态图部分-->
      <div v-show="exis1" class="mainjt">
        <div class="mainjta">
          <div class="mainjtb">
            <img src="./img/mainjtt.png" alt="图片不见了">
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
            <img src="./img/mainjtt.png" alt="图片不见了">
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
      <!--3F可隐藏的静态图,轮播图及按钮部分-->
      <div class="mfirst">
        <div class="mtwo">
          <img src="./img/mfirst.png" alt="两杯酒图标"/>
        </div>
        <div class="butt">
          3F 经典葡萄酒
        </div >
        <div class="mthree" v-on:click="change2()">
          <img src="./img/mtwo.png" alt="按钮图标"/><!--一楼按钮-->
          <img  class="mx" v-show="exis2" src="./img/mtwox.png" alt="按钮图标下">
          <!--三楼按钮下-->
        </div>
      </div>
      <!--3F静态图部分-->
      <div v-show="exis2" class="mainjt">
        <div class="mainjta">
          <div class="mainjtb">
            <img src="./img/mainjtt.png" alt="图片不见了">
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
            <img src="./img/mainjtt.png" alt="图片不见了">
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
      <!--下面无限滚动的商品列表-->
      <div  class="mainjt">
        <div class="mainjta">
          <div class="mainjtb">
            <img src="./img/mainjtt.png" alt="图片不见了">
          </div>
          <div class="mainjtc">
            <router-link to="goodDetail">
            <p>额问题官方网</p>
            <p></p>
            <p>销量: 3652</p>
            <p>&yen: 666</p>
            </router-link>
          </div>
        </div>
        <div class="mainjta">
          <div class="mainjtb">
            <img src="./img/mainjtt.png" alt="图片不见了">
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
              <img src="./img/mainjtt.png" alt="图片不见了">
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
              <img src="./img/mainjtt.png" alt="图片不见了">
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
              <img src="./img/mainjtt.png" alt="图片不见了">
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
              <img src="./img/mainjtt.png" alt="图片不见了">
          </div>
          <div class="mainjtc">
              <p>额问题官方网</p>
              <p></p>
              <p>销量: 3652</p>
              <p>&yen: 666</p>
          </div>
        </div>
      </div>
      <bottom></bottom>
        <img src="./img/first.jpg" class="first" alt="首页图标不见了">
    </div>
</template>

<script>
import bottom from '../bottom/bottom.vue'
export default {
  components: {bottom},
  data () {
    return {
      exis:false,
      exis1:false,
      exis2:false
    }
  },
  methods: {
    change () {
      this.exis = !this.exis;
    },
    change1 () {
      this.exis1 = !this.exis1;
    },
    change2 () {
      this.exis2 = !this.exis2;
    },
    push () {
      this.$router.push({
        path: '/goodClass'
      })
    },
    push1 () {
      this.$router.push({
        path: '/goodSearch'
      })
    }
  }
}
</script>

<style scoped>
  .gdmain{width:750px;
    margin:0 auto;
    }
  a{text-decoration:none;}
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
    width:450px;
    height:81px;
    margin-top:14px;
    border:none;
    color:#F8E8E7;
    font-size: 35px;
    float:left;}
  input{
    padding-left:40px;
  }
  .mx{
    z-index:2;
    position:absolute;
    top:0px;
    right:0px;
    margin:0px;
  }
  .gdetaillbt{
    width:750px;
    height:440px;
    margin:0px;
    padding:0px;
  }
  .mainjt{
    width:750px;
    height:412px;
    padding:0px;
    margin:0px;
    border-bottom:#999 solid 2px;
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
    width:170px;
    height:410px;
    float:right;
    padding-top:100px;
    margin:0px;
  }
  .mainjtc p{
    height:60px;
    width:165px;
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
  .mthree{
    position:relative;
  }
  .mtwo{
    padding-top:5px;
  }
  .first{
    position:fixed;
    left:500px;
    bottom:14px;
  }
</style>
