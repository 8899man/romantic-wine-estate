<template>
  <div class="gdlist">
    <div class="ppp"></div>
    <!--顶部搜索框及按钮-->
    <div class="gdlssk">
      <div class="gdlfh">
        <img src="./img/icon.png" v-on:click="retur()" alt="返回上一页"><!--左边返回按钮-->
      </div>
      <div class="gdlzy">
        <img src="./img/lianj.png" v-on:click="push()" alt="返回主页"><!--右边回到主页按钮-->
      </div>
      <div class="gdltub">
        <img src="./img/sstb.png" alt="搜索图标"/><!--搜索框内的搜索图标-->
      </div>
        <input type="text" v-on:click="push1()" placeholder="搜索商品"><!--搜索图标-->
    </div>
    <!--排列方式nav-->
    <div class="gdlxxk"><!--三种排列方式-->
      <ul>
        <li>默认</li>
        <li>销量</li>
        <li>价格</li>
      </ul>
    </div>
    <!--商品列表部分-->
    <ul>
      <div class="gdlljz">
      <li >
          <img src="./img/gdlwine.png" alt="左侧酒的图">
          <div class="gdlyb">
            <p>传说传说传说传说传说传说传说传说传说传说传说传说传说传说</p>
            <p>销量 646532</p>
            <p>&yen 60</p>
        </div>
      </li>
      <li >
          <img src="./img/gdlwine.png" alt="左侧酒的图">
          <div class="gdlyb">
            <p>传说传说传说传说传说传说传说传说传说传说传说传说传说传说</p>
            <p>销量 646532</p>
            <p>&yen 60</p>
          </div>
      </li>
      <li >
          <img src="./img/gdlwine.png" alt="左侧酒的图">
          <div class="gdlyb">
            <p>传说传说传说传说传说传说传说传说传说传说传说传说传说传说</p>
            <p>销量 646532</p>
            <p>&yen 60</p>
          </div>
      </li>
      <li >
          <img src="./img/gdlwine.png" alt="左侧酒的图">
          <div class="gdlyb">
            <p>传说传说传说传说传说传说传说传说传说传说传说传说传说传说</p>
            <p>销量 646532</p>
            <p>&yen 60</p>
          </div>
      </li>
  </div>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
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
        path: '/goodSearch'
      })
    }
  }
}
</script>

<style scoped>
  a{text-decoration:none;}
  .gdlist{width:750px;
    margin:0 auto;
    padding:0px;
    background-color:#EBEBEB;}
  .ppp{width:750px;
    height:40px;
    background-color:#d02131;
    margin:0px;
    padding:0px;}
  .gdlssk{height:88px;
    width:750px;
    background-color:#d02131;
    position:relative;}
  .gdlfh{
    margin:0px;
    padding:0px;
    width:30px;
    height:52px;
    position:absolute;
    left:60px;
    top:10px;
  }
  .gdlfh img{
    width:30px;
    height:50px;
  }
  .gdlzy{
    margin:0px;
    padding:0px;
    width:30px;
    height:52px;
    position:absolute;
    right:60px;
    top:30px;
  }
  .gdlzy img{
    width:87px;
    height:50px;
  }
  .gdltub{height:58px;
    width:44px;
    position:absolute;
    top:6px;
    left:145px;
    background-color:#DC908C;
    margin:0px;
    padding:0px;
  }
  .gdltub img{
    width:44px;
    height:60px;
  }
  input{background-color:#DC908C;
    width:416px;
    height:56px;
    margin:0px;
    padding-left:30px;
    position:absolute;
    left:189px;
    top:6px;
    border:none;
    color:#F8E8E7;
    font-size: 24px;}
  ul,li{list-style:none;
    padding:0px;
    margin:0px;}
  .gdlxxk li{width:250px;
    height:88px;
    line-height:88px;
    float:left;
    color:#666;
    border-radius:15px;
    -moz-transition:background-color 1s;
    -moz-transition-timing-function:ease-in-out;
    }
  .gdlxxk{
    width:750px;
    height:88px;
    font-size:28px;
    overflow:hidden;
  }
  li:hover{
    background-color:#666;
    color:#9F9F9F;
    font-size:40px;
  }
  li:active{
   color:#fff;
  }
  .gdlljz li{
    width:750px;
    height:222px;
    background-color:#fff;
    border-bottom:#EBEBEB solid 1px;
    border-top:#EBEBEB solid 1px;
    padding:0px;
  }
  .gdlljz img{
    height:220px;
    width:120px;
    margin:0px;
    float:left;
  }
 p:nth-child(1){
    background-color:#fff;
    width:720px;
    height:104px;
    margin:0px;
    padding-top:10px;
    color:#333;
    text-align:left;
    font-size:28px;
    border-top:#EBEBEB solid 1px;
  }
  p:nth-child(2){
    background-color:#fff;
    width:750px;
    height:36px;
    margin:0px;
    padding:0px;
    color:#9B9B9B;
    text-align:left;
    font-size:24px;
  }
  p:nth-child(3){
    background-color:#fff;
    width:750px;
    height:80px;
    margin-top:10px;
    padding:0px;
    color:#f00;
    text-align:left;
    font-size:28px;
    border-bottom:#EBEBEB solid 1px;
  }
  .gdlyb{
    height:220px;
    width:750px;
  }
</style>
