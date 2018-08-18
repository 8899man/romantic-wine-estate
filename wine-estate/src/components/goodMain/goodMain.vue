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
      <div class="gdetaillbt" ><!--顶部轮播图-->
        <mt-swipe :auto="2000" >
          <mt-swipe-item  v-for="item in data2" :key="item.id">
            <img :src="item.goodsImage" alt="图片不见了"  v-on:click="lbtode()"/>
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
        1F 杰卡斯山庄
      </div >
      <div class="mthree" v-on:click="change()">
        <img src="./img/mtwo.png" v-show="exis3" alt="按钮图标"/><!--一楼按钮-->
        <img  class="mx" v-show="exis" src="./img/mtwox.png" alt="按钮图标下">
        <!--一楼按钮下-->
      </div>
      </div>
      <!--1F轮播图部分-->
      <div v-show="exis" class="gdetaillbt">
        <mt-swipe :auto="1500">
          <mt-swipe-item  v-for="item in data1" :key="item.id" >
            <img :src="item.goodsImage" alt="图片不见了" v-on:click="lbtode1()"/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!--1F静态图部分-->
      <div v-show="exis" class="mainjt">
        <div class="mainjta" v-for="item in data3" :key="item.id">
          <div class="mainjtb" >
            <img :src="item.midPic" alt="静态图">
          </div>
          <div class="mainjtc" v-on:click="todea($event)">
            <p>{{item.goodsTitle}}</p>
            <p></p>
            <p></p>
            <p>销量 {{item.sellNum}}</p>
            <p>&yen {{item.goodsPrice}}</p>
            <p>{{item.goodsId}}</p>
          </div>
        </div>
      </div>
      <!--2F可隐藏的静态图,轮播图及按钮部分-->
      <div class="mfirst">
        <!--2F按钮部分-->
        <div class="mtwo">
          <img src="./img/mfirst.png" alt="两杯酒图标"/>
        </div>
        <div class="butt">
          2F 洛神山庄
        </div >
        <div class="mthree" v-on:click="change1()">
          <img src="./img/mtwo.png" v-show="exis4" alt="按钮图标"/><!--一楼按钮-->
          <img  class="mx" v-show="exis1" src="./img/mtwox.png" alt="按钮图标下">
          <!--二楼按钮下-->
        </div>
      </div>
      <!--2F轮播图部分-->
      <div v-show="exis1" class="gdetaillbt">
        <mt-swipe :auto="1500">
          <mt-swipe-item v-for="item in data5" :key="item.id" >
            <img :src="item.goodsImage" alt="图片不见了" v-on:click="lbtode2()"/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!--2F静态图部分-->
      <div v-show="exis1" class="mainjt">
        <div class="mainjta" v-for="item in data4" :key="item.id">
          <div class="mainjtb" >
            <img :src="item.midPic" alt="静态图">
          </div>
          <div class="mainjtc" v-on:click="todea($event)">
            <p>{{item.goodsTitle}}</p>
            <p></p>
            <p></p>
            <p>销量 {{item.sellNum}}</p>
            <p>&yen {{item.goodsPrice}}</p>
            <p>{{item.goodsId}}</p>
          </div>
        </div>
      </div>
      <!--3F可隐藏的静态图,轮播图及按钮部分-->
      <div class="mfirst">
        <!--3F按钮部分-->
        <div class="mtwo">
          <img src="./img/mfirst.png" alt="两杯酒图标"/>
        </div>
        <div class="butt">
          3F 长城
        </div >
        <div class="mthree" v-on:click="change2()">
          <img src="./img/mtwo.png" v-show="exis5" alt="按钮图标"/><!--一楼按钮-->
          <img  class="mx" v-show="exis2" src="./img/mtwox.png" alt="按钮图标下">
          <!--三楼按钮下-->
        </div>
      </div>
      <!--3F轮播图部分-->
      <div v-show="exis2" class="gdetaillbt">
        <mt-swipe :auto="1500">
          <mt-swipe-item v-for="item in data7" :key="item.id" >
            <img :src="item.goodsImage" alt="图片不见了" v-on:click="lbtode3()"/>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!--3F静态图部分-->
      <div v-show="exis2" class="mainjt">
        <div class="mainjta" v-for="item in data6" :key="item.id">
          <div class="mainjtb" >
            <img :src="item.midPic" alt="静态图">
          </div>
          <div class="mainjtc" v-on:click="todea($event)">
            <p>{{item.goodsTitle}}</p>
            <p></p>
            <p></p>
            <p>销量 {{item.sellNum}}</p>
            <p>&yen {{item.goodsPrice}}</p>
            <p>{{item.goodsId}}</p>
          </div>
        </div>
      </div>
      <!--下面无限滚动的商品列表-->
      <div  class="mainjtl" >
        <div class="mainjta" v-for = "item in data8" :key="item.id" >
          <div class="mainjtb">
            <img :src="item.midPic" alt="图片不见了" >
          </div>
          <div class="mainjtc" v-on:click="todea($event)">
            <p>{{item.goodsTitle}}</p>
            <p></p>
            <p></p>
            <p>销量 {{item.sellNum}}</p>
            <p>&yen {{item.goodsPrice}}</p>
            <p>{{item.goodsId}}</p>
          </div>
        </div>
      </div>
      <div v-on:click="load()" class="load" v-show="value">
        加载更多
      </div>
      <div  class="mainjtl" v-show="vae">
        <div class="mainjta" v-for = "item in data9" :key="item.id" >
          <div class="mainjtb" >
            <img :src="item.midPic" alt="图片不见了" >
          </div>
          <div class="mainjtc" v-on:click="todea($event)">
            <p>{{item.goodsTitle}}</p>
            <p></p>
            <p></p>
            <p>销量 {{item.sellNum}}</p>
            <p>&yen {{item.goodsPrice}}</p>
            <p>{{item.goodsId}}</p>
          </div>
        </div>
      </div>
        <img src="./img/first.jpg" class="first" alt="首页图标">
      <div class="tiao"></div>
      <bottom>
      </bottom>
    </div>
</template>

<script>
import bottom from '../bottom/bottom.vue'
export default {
  components: {bottom},
  data () {
    return {
      exis: false,
      exis1: false,
      exis2: false,
      exis3: true,
      exis4: true,
      exis5: true,
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      data5: [],
      data6: [],
      data7: [],
      data8: [],
      data9: [],
      value: true,
      vae: false
    }
  },
  created () {
    this.mo()
    this.mo1()
    this.mo2()
    this.mo3()
    this.mo4()
  },
  methods: {
    // 获取静态图商品id
    todea (event) {
      let goodsId = event.currentTarget.lastChild.innerHTML
      this.$router.push({
        path: '/goodDetail',
        query: {goodsId: goodsId}
      })
    },
    // 获取轮播图的商品id
    lbtode1 () {
      let goodsId = '00000010'
      this.$router.push({
        path: '/goodDetail',
        query: {goodsId: goodsId}
      })
    },
    lbtode2 () {
      let goodsId = '00000012'
      this.$router.push({
        path: '/goodDetail',
        query: {goodsId: goodsId}
      })
    },
    lbtode3 () {
      let goodsId = '00000013'
      this.$router.push({
        path: '/goodDetail',
        query: {goodsId: goodsId}
      })
    },
    lbtode () {
      let goodsId = '00000005'
      this.$router.push({
        path: '/goodDetail',
        query: {goodsId: goodsId}
      })
    },
    mo () {
      this.$http.get('/api/beforeHomePageSort.htm', {
        params: {}
      }).then((res) => {
        this.data2 = res.data.data
        console.log(res.data.data)
      }).catch(function (error) {
        console.log(error)
      })
    },
    mo1 () {
      this.$http.get('/api/homePageSortNext.htm?brand=杰卡斯山庄', {
        params: {}
      }).then((res) => {
        this.data3 = res.data.data
        console.log(res.data.data)
      }).catch(function (error) {
        console.log(error)
      })
    },
    mo2 () {
      this.$http.get('/api/homePageSortNext.htm?brand=洛神山庄', {
        params: {}
      }).then((res) => {
        this.data4 = res.data.data
        console.log(res.data.data)
      }).catch(function (error) {
        console.log(error)
      })
    },
    mo3 () {
      this.$http.get('/api/homePageSortNext.htm?brand=长城', {
        params: {}
      }).then((res) => {
        this.data6 = res.data.data
        console.log(res.data.data)
      }).catch(function (error) {
        console.log(error)
      })
    },
    mo4 () {
      this.$http.get('/api/afterHomePageSort.htm?start=0', {
        params: {}
      }).then((res) => {
        this.data8 = res.data.data
        console.log(res.data.data)
      }).catch(function (error) {
        console.log(error)
      })
    },
    change () {
      this.exis = !this.exis
      this.exis3 = !this.exis3
      this.$http.get('/api/homePageSort.htm?brand=杰卡斯山庄', {
        params: {}
      }).then((res) => {
        this.data1 = res.data.data
        console.log(res.data.data)
      }).catch(function (error) {
        console.log(error)
      })
    },
    change1 () {
      this.exis1 = !this.exis1
      this.exis4 = !this.exis4
      this.$http.get('/api/homePageSort.htm?brand=洛神山庄', {
        params: {}
      }).then((res) => {
        this.data5 = res.data.data
        console.log(res.data.data)
      }).catch(function (error) {
        console.log(error)
      })
    },
    change2 () {
      this.exis2 = !this.exis2
      this.exis5 = !this.exis5
      this.$http.get('/api/homePageSort.htm?brand=长城', {
        params: {}
      }).then((res) => {
        this.data7 = res.data.data
        console.log(res.data.data)
      }).catch(function (error) {
        console.log(error)
      })
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
    },
    load () {
      this.value = !this.value
      this.vae = !this.vae
      this.$http.get('/api/afterHomePageSort.htm', {
        params: {
          start: 6
        }
      }).then(res => {
        this.data9 = res.data.data
      }).catch(function (error) {
        console.log(error)
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
  .right{height:67px;
    width:80px;
    background-color:#E78C87;
    float:left;
    margin-top:14px;
    padding-top:15px;
  }
  .right img{
    width:44px;
    height:58px;
  }
  .left{
    float:left;
    width:40px;
    height:40px;
    margin-right:50px;
    padding-top:25px;
   }
  .left img{
    width:86px;
    height:57px;
  }
  .center{background-color:#E78C87;
    width:450px;
    height:81px;
    margin-top:14px;
    border:none;
    color:#F8E8E7;
    font-size:35px;
    float:left;}
  input{
    padding-left:40px;
  }
  .mx{
    position:absolute;
    top:0px;
    right:-80px;
    margin:0px;
  }
  .gdetaillbt{
    width:750px;
    height:440px;
    margin:0px;
    padding:0px;
    overflow:hidden;
  }
  .gdetaillbt img{
    width:750px;
    height:440px;
    margin:0px;
  }
  .gdetaillbt p{
    width:750px;
    height:20px;
    margin:0px;
    float:left;
    font-size:10px;
  }
  .mainjt{
    width:750px;
    height:410px;
    padding:0px;
    margin:0px;
    border:1px #ccc solid;
    overflow: hidden;
  }
  .mainjtl{
    width:750px;
    padding:0px;
    margin:0px;
    overflow: hidden;
  }
  .mainjta{
    float:left;
    width:375px;
    height:410px;
    padding:0px;
    margin:0px;
    border-bottom:#999 solid 1px;
  }
  .mainjtb img{
    width:200px;
    height:380px;
    font-size:15px;
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
    padding-top:60px;
    margin:0px;
  }
  .mainjtc p{
    height:60px;
    width:165px;
    color:#626262;
    font-size:20px;
    line-height:60px;
    text-align:left;
    margin:0px;
  }
  p:nth-child(4){
    font-size:25px;
  }
  p:nth-child(5){
    color:#f00;
    font-size:30px;
  }
  .butt{
     width:450px;
     height:79px;
     line-height:79px;
     font-size:30px;
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
    margin-left:40px;
  }
  .mthree{
    position:relative;
  }
  .mthree img {
    width:75px;
    height:75px;
  }
  .mtwo{
    padding-top:4px;
    width:67px;
    height:70px;
  }
  .mtwo img{
    width:67px;
    height:70px;}
  .first{
    position:fixed;
    left:290px;
    bottom:15px;
    width:48px;
    height:68px;
    z-index:2;
  }
  .tiao{
    width:750px;
    height:92px;
  }
  .load{
    position:fixed;
    bottom:100px;
    right:550px;
    width:150px;
    height:30px;
    font-size:20px;
    border-radius:8px;
    background-color:#999;
  }
  p:nth-child(6){
    display:none;
  }
</style>
