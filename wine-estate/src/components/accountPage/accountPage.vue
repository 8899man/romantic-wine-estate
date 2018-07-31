<template>
    <div id="app">
      <header>
        <span>{{title}}</span>
        <img src="../../assets/head.png" height="130" width="130" class="head"/>
        <a href="#"><img src="../../assets/settings.png" height="66" width="66"/></a>
        <a href="#"><img src="../../assets/return4.png" height="44" width="26"/></a>
        <p>{{myName}}</p>
      </header>
      <main>
          <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)" id="myOrder" class="order">
            <span>我的订单</span>
            <span>查看全部标签</span>
            <img src="../../assets/return3.png" height="26" width="16"/>
          </div>
          <div class="menu">
            <span>
              <img src="../../assets/button1-4.jpg" height="73" width="73"/>
              <p>待付款</p>
            </span>
            <span>
              <img src="../../assets/button2-4.jpg" height="73" width="73"/>
              <p>待收货</p>
            </span>
            <span>
              <img src="../../assets/button3-4.jpg" height="73" width="73"/>
              <p>待评价</p>
            </span>
          </div>
          <div class="list">
              <span @mousedown="changeColor($event)" @mouseup="recoverColor($event)">
                <img src="../../assets/icon1-4.png" height="72" width="72"/>
                <p>存酒库</p>
                <p>{{warehouse}}瓶</p>
              </span>
              <span @mousedown="changeColor($event)" @mouseup="recoverColor($event)">
                <img src="../../assets/icon2-4.png" height="72" width="72"/>
                <p>我的酒评</p>
                <p>{{evaluate}}条</p>
              </span>
              <span @mousedown="changeColor($event)" @mouseup="recoverColor($event)">
                <img src="../../assets/icon3-4.png" height="72" width="72"/>
                <p>我的关注</p>
                <p>{{attention}}个</p>
              </span>
              <span @mousedown="changeColor($event)" @mouseup="recoverColor($event)">
                <img src="../../assets/icon4-4.png" height="72" width="72"/>
                <p>我的优惠券</p>
                <p>{{discount}}张</p>
              </span>
          </div>
      </main>
    </div>
</template>

<script>
    export default {
        name: "accountPage",
        data(){
          return{
            title:'我的账户',
            myName:'',
            warehouse:'0',
            evaluate:'0',
            attention:'0',
            discount:'0'
          }
        },
      methods:{
        changeColor(event){
          var t=event.currentTarget;
          t.style.backgroundColor="#ebebeb";
          },
        recoverColor(event){
          var t=event.currentTarget;
          t.style.backgroundColor="#fff";
        }
      }
    }
</script>

<style scoped>
#app{width:750px; height:1334px; margin: 0 auto; background-color:#ebebeb;}
header{width: 750px; height: 305px; background-image:url("../../assets/banner.jpg"); position:relative;
  border-bottom:1px #b06e70 solid;}
header span{font-size:28px; color:#fff; position:absolute; top:50px; left:34px; cursor:default;}
header .head{position:absolute; top:100px; left:310px; cursor:default;}
header a:nth-of-type(1){width:66px; height:66px; position:absolute; top:38px; right:13px; cursor:pointer;
  display:block; line-height:0px;}
header a:nth-of-type(2){width:26px; height:44px; position:absolute; top:144px; right:24px; cursor:pointer;
  display:block; line-height:0px;}
header p{width:100%;position:absolute; top:226px; font-size:26px; color:#fff; text-align:center;
  cursor:default;}

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
  border-bottom:#bababa; border-top:1px #bababa solid;}
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
