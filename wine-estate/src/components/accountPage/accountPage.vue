<template>
    <div id="app">
      <header>
        <span>我的账户</span>
        <img src="./img/head.png" height="130" width="130" class="head" alt="图片不见了哦~"/>
        <img src="./img/settings.png" height="66" width="66" alt="图片不见了哦~" @click="routermorePage"/>
        <img src="./img/return4.png" height="44" width="26" alt="图片不见了哦~" @click="routerinformationPage"/>
        <p>{{myName}}</p>
      </header>
      <main>
          <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)" @click="routerallorders" id="myOrder" class="order">
            <span>我的订单</span>
            <span>查看全部标签</span>
            <img src="./img/return3.png" height="26" width="16" alt="图片不见了哦~"/>
          </div>
          <div class="menu">
            <span @click="routerallorders">
              <img src="./img/button1-4.png" height="73" width="73" alt="图片不见了哦~"/>
              <p>待付款</p>
            </span>
            <span @click="routerallorders">
              <img src="./img/button2-4.png" height="73" width="73" alt="图片不见了哦~"/>
              <p>待收货</p>
            </span>
            <span @click="routerallorders">
              <img src="./img/button3-4.png" height="73" width="73" alt="图片不见了哦~"/>
              <p>待评价</p>
            </span>
          </div>
          <div class="list">
              <span @mousedown="changeColor($event)" @mouseup="recoverColor($event)">
                <img src="./img/icon1-4.png" height="72" width="72" alt="图片不见了哦~"/>
                <p>存酒库</p>
                <p>{{warehouse}}瓶</p>
              </span>
              <span @mousedown="changeColor($event)" @mouseup="recoverColor($event)">
                <img src="./img/icon2-4.png" height="72" width="72" alt="图片不见了哦~"/>
                <p>我的酒评</p>
                <p>{{evaluate}}条</p>
              </span>
              <span @mousedown="changeColor($event)" @mouseup="recoverColor($event)">
                <img src="./img/icon3-4.png" height="72" width="72" alt="图片不见了哦~"/>
                <p>我的关注</p>
                <p>{{attention}}个</p>
              </span>
              <span @mousedown="changeColor($event)" @mouseup="recoverColor($event)">
                <img src="./img/icon4-4.png" height="72" width="72" alt="图片不见了哦~"/>
                <p>我的优惠券</p>
                <p>{{discount}}张</p>
              </span>
          </div>
      </main>
      <bottom></bottom>
    </div>
</template>

<script>
    import bottom from '../bottom/bottom.vue'
    export default {
        name: "accountPage",
        components:{bottom},
        data(){
          return{
            myName:'',
            warehouse:'0',
            evaluate:'0',
            attention:'0',
            discount:'0'
          }
        },
      methods:{
        //点击效果
        changeColor(event){
          var t=event.currentTarget;
          t.style.backgroundColor="#ebebeb";
          },
        recoverColor(event){
          var t=event.currentTarget;
          t.style.backgroundColor="#fff";
        },
        //跳转
        routermorePage(){
           this.$router.push({
              path: '/morePage'
            })
        },
        routerinformationPage(){
           this.$router.push({
              path: '/informationPage'
            })
        },
        routerallorders(){
          this.$router.push({
              path: '/allorders'
          })
        }
      } 
    }
</script>

<style scoped>
#app{width:750px; height:1334px; margin: 0 auto; background-color:#ebebeb;}
/*页面banner部分*/
header{width: 750px; height: 305px; background-image:url("./img/banner.jpg"); position:relative;
  border-bottom:1px #b06e70 solid;}
header span{font-size:28px; color:#fff; position:absolute; top:50px; left:34px; cursor:default;}
header .head{position:absolute; top:100px; left:310px; cursor:default; border:3px #fff solid; border-radius:50%;}
header img:nth-of-type(2){width:66px; height:66px; position:absolute; top:38px; right:13px; cursor:pointer;
  display:block; line-height:0px;}
header img:nth-of-type(3){width:26px; height:44px; position:absolute; top:144px; right:24px; cursor:pointer;
  display:block; line-height:0px;}
header p{width:100%;position:absolute; top:226px; font-size:26px; color:#fff; text-align:center;
  cursor:default;}
/*页面主体部分*/
main{position: relative;}
main .order{width:729px; height:80px; border-bottom:1px #dcdcdc solid; padding-left:21px; list-style:none;
  line-height:80px; text-align:left; cursor:default; background-color:#fff; }
main .order span:nth-of-type(1){font-size:24px;}
main .order span:nth-of-type(2){font-size:19px; color:#c5c5c5; position:absolute; right:64px;}
main .order img{position:absolute; right:31px; top:27px;}
main .menu{width:750px; height:170px; background-color:#fff;}
main .menu span:nth-of-type(1){width:76px; height:110px; position:absolute; left:103px; top:119px;
  cursor:pointer;}
main .menu span:nth-of-type(2){width:76px; height:110px; position:absolute; left:338px; top:119px;
  cursor:pointer;}
main .menu span:nth-of-type(3){width:76px; height:110px; position:absolute; left:573px; top:119px;
  cursor:pointer;}
main .menu p{font-size:19px; color:#000; padding-top:12px; text-align:center; margin:0;}
main .list{width:750px; height:158px; background-color:#fff; position:absolute; top:306px;
  border-bottom:1px #bababa solid; border-top:1px #bababa solid;}
main .list span:nth-of-type(1){width:186.75px; height:158px; border-right:1px #bababa solid;
  position:absolute; left:0px; display: block; cursor:pointer;}
main .list span:nth-of-type(2){width:186.75px; height:158px; border-right:1px #bababa solid;
  position:absolute; left:187.75px; cursor:pointer;}
main .list span:nth-of-type(3){width:186.75px; height:158px; border-right:1px #bababa solid;
  position:absolute; left:375.5px; cursor:pointer;}
main .list span:nth-of-type(4){width:186.75px; height:158px;
  position:absolute; left:563.25px; cursor:pointer;}
main .list span p:nth-of-type(1){font-size:17px; color:#000; padding-top:6px;  margin:0;}
main .list span p:nth-of-type(2){font-size:15px; color:#fec371; padding-top:4px;  margin:0;}
main .list span img{padding-top:21px;}
</style>
