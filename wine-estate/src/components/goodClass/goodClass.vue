<template>
  <div class="gdclass">
    <p></p>
    <!--顶部搜索框-->
    <div class="gdclassk">
      <div class="gdctub">
          <img src="./img/sstb.png" alt="搜索图标"/>
      </div>
        <input type="text" v-on:click="push()" placeholder="搜索商品">
    </div>
    <!--具体分类部分-->
    <div class="gdcycd"><!--原产地分类-->
      <div class="hontiao"></div>
     <p>原产地</p>
      <ul id="ycd">
        <li v-on:click="push1($event)">法国</li>
        <li v-on:click="push1($event)">意大利</li>
        <li v-on:click="push1($event)">澳大利亚</li>
        <li v-on:click="push1($event)">德国</li>
        <li v-on:click="push1($event)">中国</li>
        <li v-on:click="push1($event)">西班牙</li>
        <li v-on:click="push1($event)">智利</li>
        <li v-on:click="push1($event)">新西兰</li>
        <li v-on:click="push1($event)">阿根廷</li>
      </ul>
    </div>
    <div class="gdckg"><!--口感分类-->
      <div class="hontiao"></div>
      <p>口感</p>
      <ul>
        <li v-on:click="push2($event)">平衡</li>
        <li v-on:click="push2($event)">圆润</li>
        <li v-on:click="push2($event)">清爽</li>
        <li v-on:click="push2($event)">清雅</li>
        <li v-on:click="push2($event)">饱满</li>
        <li v-on:click="push2($event)">辛辣</li>
      </ul>
    </div>
    <div class="gdcycd"><!--类型分类-->
      <div class="hontiao"></div>
      <p>类型</p>
      <ul>
        <li v-on:click="push3($event)">红葡萄酒</li>
        <li v-on:click="push3($event)">白葡萄酒</li>
        <li v-on:click="push3($event)">桃红葡萄酒</li>
        <li v-on:click="push3($event)">起泡酒</li>
        <li v-on:click="push3($event)">加强葡萄酒</li>
        <li v-on:click="push3($event)">香槟</li>
        <li v-on:click="push3($event)">冰酒</li>
      </ul>
    </div>
    <div class="gdckg"><!--价格分类-->
      <div class="hontiao"></div>
      <p>价格</p>
      <ul>
        <li v-on:click="push4($event)">1-499</li>
        <li v-on:click="push4($event)">500-999</li>
        <li v-on:click="push4($event)">1000-1499</li>
        <li v-on:click="push4($event)">1500-1999</li>
        <li v-on:click="push4($event)">2000-2499</li>
        <li v-on:click="push4($event)">2500-9999</li>
      </ul>
    </div>
      <bottom></bottom>
      <img src="./img/nav.jpg" class="nav" alt="分类图片不见了">
  </div>
</template>

<script>
import bottom from '../bottom/bottom.vue'
export default {
  components: {bottom},
  data () {
    return {
    }
  },
  methods: {
    push () {
      this.$router.push({
        path: '/goodSearch'
      })
    },
    push1 (event) {
      let name = event.currentTarget.innerHTML;
      this.$router.push({
        path: '/goodList',
        query: {placeOfArea: name}
      })
    },
    push2 (event) {
      let name2 = event.currentTarget.innerHTML;
      this.$router.push({
        path: '/goodList',
        query: {taste: name2}
      })
    },
    push3 (event) {
      let name3 = event.currentTarget.innerHTML;
      this.$router.push({
        path: '/goodList',
        query: {category: name3}
      })
    },
    push4 (event) {
      let name4 = event.currentTarget.innerHTML;
      this.$router.push({
        path: '/goodList',
        query: {goodsPrice: name4}
      })
    }
  }
}
</script>

<style scoped>
  a{text-decoration:none;
    }
  .gdclass{width:750px;
    margin:0px auto 80px;
    padding:0px;
    background-color:#EBEBEB;}
  .hontiao{
    height:63px;
    width:20px;
    background-color:#EBEBEB;
    float:left;
  }
  .hontiao p{width:750px;
    height:40px;
    background-color:#d02131;
    margin:0px;
    padding:0px;}
  .gdclassk{height:85px;
    width:750px;
    background-color:#d02131;
    position:relative;}
  .gdctub{height:58px;
    width:44px;
    position:absolute;
    top:15px;
    left:145px;
    background-color:#DE8F8B;
    margin:0px;
    padding:0px;
  }
  .gdctub img {
    width:44px;
    height:56px;
  }
  input{background-color:#DE8F8B;
    width:416px;
    height:57px;
    padding-left:30px;
    margin:0px;
    position:absolute;
    left:189px;
    top:15px;
    border:none;
    color:#F8E8E7;
    font-size: 24px;}
  .gdcycd{
    width:750px;
    height:330px;
    overflow:hidden;
  }
  .gdcycd p{
    width:730px;
    height:40px;
    color:#7D7D7D;
    background-color:#F2F2F2;
    font-size:24px;
    line-height:40px;
    text-align:left;
    margin:0px;
    padding-left:0px;
  }
  .gdckg{
    width:750px;
    height:270px;
    overflow:hidden;
  }
  .gdckg p{
    width:730px;
    height:40px;
    color:#7D7D7D;
    background-color:#F2F2F2;
    font-size:24px;
    line-height:40px;
    text-align:left;
    margin:0px;
  }
  ul li{
    list-style:none;
    margin:0px;
  }
  ul{
    overflow:hidden;
  }
  li{
    height:80px;
    width:238px;
    float:left;
    color:#9F9F9F;
    line-height:80px;
    text-align:center;
    font-size:22px;
    border-radius:15px;
    -moz-transition:background-color 1s;
    -moz-transition-timing-function:ease-in-out;
  }
 li:active{
   color:#fff;
 }
 li:hover{
    background-color:#666;
    font-size:40px;
  }
 a:visited{
   color:#9F9F9F;
   text-decoration:none;
 }
  .gdcbb p{
    float:left;
    width:170px;
    height:98px;
    background-color:#fff;
  }
  .gdcbb p img{
    margin:0px;
    padding:0px;
  }
  p:nth-child(2){
    padding-top:3px;
  }
  p:nth-child(3){
    padding-top:1px;
  }
  p:nth-child(4){
    padding-bottom:7px;
  }
  .nav{
    position:fixed;
    left:500px;
    bottom:12px;
    width:60px;
    height:70px;
  }
</style>
