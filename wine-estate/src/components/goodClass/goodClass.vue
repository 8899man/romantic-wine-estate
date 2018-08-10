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
      <ul>
        <li>法国</li>
        <li>意大利</li>
        <li>澳大利亚</li>
        <li>德国</li>
        <li>美国</li>
        <li>西班牙</li>
        <li>智利</li>
        <li>新西兰</li>
        <li>阿根廷</li>
      </ul>
    </div>
    <div class="gdckg"><!--口感分类-->
      <div class="hontiao"></div>
      <p>口感</p>
      <ul>
        <li>平衡</li>
        <li>圆润</li>
        <li>清爽</li>
        <li>清雅</li>
        <li>饱满</li>
        <li>辛辣</li>
      </ul>
    </div>
    <div class="gdcycd"><!--类型分类-->
      <div class="hontiao"></div>
      <p>类型</p>
      <ul>
        <li>红葡萄酒</li>
        <li>白葡萄酒</li>
        <li>桃红葡萄酒</li>
        <li>起泡酒</li>
        <li>加强葡萄酒</li>
        <li>香槟</li>
        <li>冰酒</li>
      </ul>
    </div>
    <div class="gdckg"><!--价格分类-->
      <div class="hontiao"></div>
      <p>价格</p>
      <ul>
        <li>1-99元</li>
        <li>100-199元</li>
        <li>200-299元</li>
        <li>300-399元</li>
        <li>400-499元</li>
        <li>500-5000元</li>
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
    return {}
  },
  methods: {
    push () {
      this.$router.push({
        path: '/goodSearch'
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
  p{width:750px;
    height:40px;
    background-color:#d02131;
    margin:0px;
    padding:0px;}
  .gdclassk{height:88px;
    width:750px;
    background-color:#d02131;
    position:relative;}
  .gdctub{height:58px;
    width:44px;
    position:absolute;
    top:16px;
    left:145px;
    background-color:#DE8F8B;
    margin:0px;
    padding:0px;
  }
  input{background-color:#DE8F8B;
    width:416px;
    height:56px;
    padding-left:30px;
    margin:0px;
    position:absolute;
    left:189px;
    top:16px;
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
    height:60px;
    color:#7D7D7D;
    background-color:#F2F2F2;
    font-size:24px;
    line-height:60px;
    text-align:left;
    margin:0px;
  }
  .gdckg{
    width:750px;
    height:270px;
    overflow:hidden;
  }
  .gdckg p{
    width:730px;
    height:60px;
    color:#7D7D7D;
    background-color:#F2F2F2;
    font-size:24px;
    line-height:60px;
    text-align:left;
    margin:0px;
  }
  ul li{
    list-style:none;
    margin:0px;
    padding:0px;
  }
  li{
    height:80px;
    width:220px;
    float:left;
    color:#9F9F9F;
    line-height:80px;
    text-align:center;
    font-size:22px;
  }
 li:hover{
    background-color:#666;
    font-size:40px;}
 li:active{
   background-color:#d02131;
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
    left:620px;
    bottom:12px;
  }
</style>
