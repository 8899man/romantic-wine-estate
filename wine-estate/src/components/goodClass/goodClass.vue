<template>
  <div class="gdclass">
    <p>中国移动</p>
    <!--顶部搜索框-->
    <div class="gdclassk">
      <div class="gdctub">
        <router-link to="goodSearch">
          <img src="../../assets/sstb.png" alt="搜索图标"/>
        </router-link>
      </div>
        <input type="text" placeholder="搜索商品">
    </div>
    <!--具体分类部分-->
    <div class="gdcycd"><!--原产地分类-->
      <div class="hontiao"></div>
     <p>原产地</p>
      <ul>
        <li><router-link to="goodList">法国</router-link></li>
        <li><router-link to="goodList">意大利</router-link></li>
        <li><router-link to="goodList">澳大利亚</router-link></li>
        <li><router-link to="goodList">德国</router-link></li>
        <li><router-link to="goodList">美国</router-link></li>
        <li><router-link to="goodList">西班牙</router-link></li>
        <li><router-link to="goodList">智利</router-link></li>
        <li><router-link to="goodList">新西兰</router-link></li>
        <li><router-link to="goodList">阿根廷</router-link></li>
      </ul>
    </div>
    <div class="gdckg"><!--口感分类-->
      <div class="hontiao"></div>
      <p>口感</p>
      <ul>
        <li><router-link to="goodList">平衡</router-link></li>
        <li><router-link to="goodList">圆润</router-link></li>
        <li><router-link to="goodList">清爽</router-link></li>
        <li><router-link to="goodList">清雅</router-link></li>
        <li><router-link to="goodList">饱满</router-link></li>
        <li><router-link to="goodList">辛辣</router-link></li>
      </ul>
    </div>
    <div class="gdcycd"><!--类型分类-->
      <div class="hontiao"></div>
      <p>类型</p>
      <ul>
        <li><router-link to="goodList">红葡萄酒</router-link></li>
        <li><router-link to="goodList">白葡萄酒</router-link></li>
        <li><router-link to="goodList">桃红葡萄酒</router-link></li>
        <li><router-link to="goodList">起泡酒</router-link></li>
        <li><router-link to="goodList">加强葡萄酒</router-link></li>
        <li><router-link to="goodList">香槟</router-link></li>
        <li><router-link to="goodList">冰酒</router-link></li>
      </ul>
    </div>
    <div class="gdckg"><!--价格分类-->
      <div class="hontiao"></div>
      <p>价格</p>
      <ul>
        <li><router-link to="goodList">1-49元</router-link></li>
        <li><router-link to="goodList">50-99元</router-link></li>
        <li><router-link to="goodList">100-199元</router-link></li>
        <li><router-link to="goodList">200-299元</router-link></li>
        <li><router-link to="goodList">300-499元</router-link></li>
        <li><router-link to="goodList">500+元</router-link></li>
      </ul>
    </div>
      <bottom></bottom>
      <img src="../../assets/nav.jpg" class="nav" alt="分类图片不见了">
  </div>
</template>

<script>
import bottom from '../bottom/bottom.vue'
export default {
  components: {bottom},
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  a{text-decoration:none;
    }
  .gdclass{width:750px;
    margin-top:0px;
    margin-bottom:80px;
    margin-left:auto;
    margin-right:auto;
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
    padding-left:20px;
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
    padding-left:20px;
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
    background-color:#333;
    font-size:40px;}
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
