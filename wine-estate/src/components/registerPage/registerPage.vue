<template>
    <div id="app">
      <header>
          <span>{{title}}</span>
          <a href="#"><img src="../../assets/back.png" height="43" width="25"/></a>
      </header>
      <main>
          <form method="post" action="" @submit.prevent="checkForm">
              <input type="text" placeholder="请输入用户昵称" name="registerName" v-model.trim="registerName"/>
              <input type="password" placeholder="请输入6~16位密码" name="registerPassword"
                v-model.trim="registerPassword" @change="checkPassword"/>
              <input type="text" placeholder="请输入手机号" name="registerMoblie"
                v-model.trim="registerMoblie" @change="checkMoblie"/>
              <input type="text" placeholder="请输入邮箱地址" name="registerEmail"
                v-model.trim="registerEmail" @change="checkEmail"/>
              <input type="submit" @mousedown="changeColor($event)" @mouseup="recoverColor($event)" value="快速注册"/>
          </form>
          <span v-show="showPassword" id="showPassword">请输入正确的密码哦~</span>
          <span v-show="showMoblie" id="showMoblie">请输入正确的手机号哦~</span>
          <span v-show="showEmail" id="showEmail">请输入正确的邮箱地址哦~</span>
          <span v-show="blankPassword" id="blankPassword">请填写完整哦~</span>
          <span v-show="blankMoblie" id="blankMoblie">请填写完整哦~</span>
          <span v-show="blankEmail" id="blankEmail">请填写完整哦~</span>
          <span v-show="blankName" id="blankName">请填写完整哦~</span>
          <span id="tip">请填写完所有信息</span>
          <label><input type="checkbox" checked></label>
          <p>我已满十八周岁并接受也买服务条款</p>
          <a href="#"><<        已有账户，立即登录</a>
      </main>
    </div>
</template>

<script>
export default {
    name: "registerPage",
    data() {
      return {
        title: '注册',
        showPassword:false,
        showMoblie:false,
        showEmail:false,
        blankPassword:false,
        blankMoblie:false,
        blankEmail:false,
        blankName:false
      }
    },
    methods:{
      //非空验证
      checkForm(){
        var oTip=document.getElementById("tip")
        if(this.registerName&&this.registerPassword&&this.registerMoblie&&this.registerEmail){
          return true;
        }
        if(!this.registerName&&!this.registerPassword&&!this.registerMoblie&&!this.registerEmail){
          this.showPassword=false;
          this.showMoblie=false;
          this.showEmail=false;
          this.blankPassword=true;
          this.blankMoblie=true;
          this.blankEmail=true;
          this.blankName=true;
          return false;
        }
        if(!this.registerName){
          this.blankName=true;
          return false;
        }
        if(!this.registerPassword){
          this.showPassword=false;
          this.blankPassword=true;
          return false;
        }
        if(!this.registerMoblie){
          this.showMoblie=false;
          this.blankMoblie=true;
          return false;
        }
        if(!this.registerEmail){
          this.showEmail=false;
          this.blankEmail=true;
          return false;
        }
      },
      //密码验证
      checkPassword(){
        var password=/^[\da-zA-Z]{6,16}$/;
        if(!password.test(this.registerPassword)){
          this.showPassword=true;
          this.blankPassword=false;
        }
        else{
          this.showPassword=false;
        }
      },
      //手机号验证
      checkMoblie(){
        var Moblie=/^1[34578]\d{9}$/;
        if(!Mobile.test(this.registerMoblie)){
          this.showMoblie=true;
          this.blankMoblie=false;
        }
        else{
          this.showMoblie=false;
        }
      },
      //邮箱验证
      checkEmail(){
        var Email=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(!Email.test(this.registerEmail)){
          this.showEmail=true;
          this.blankEmail=false;
        }
        else{
          this.showEmail=false;
        }
      },
       //点击效果
      changeColor(event){
        var t=event.currentTarget;
        t.style.backgroundColor="#95282c";
      },
      recoverColor(event){
        var t=event.currentTarget;
        t.style.backgroundColor="#aa2834";
      }
    }
}
</script>

<style scoped>
#app{width:750px; height:1334px; margin: 0 auto;}
/*页面banner部分*/
header{width:750px; height:130px; background-color: #bb3337; position: relative;}
header span{font-size:30px; color:#fff; position:absolute; top:57px; right:346px; cursor:default;}
header a{width:25px; height:43px; position:absolute; top:55px; left:27px; cursor:pointer; display:block;
  line-height:0px;}
/*页面主体部分*/
main{position:relative; padding-top:144px;}
main form>input{width:670px; height:85px; border:none; border-radius:37px; text-indent:42px;
  background-color:#eeeeee; margin-bottom: 40px; font-size:30px;} 
main form>input:focus{border:1.5px #aa2834 solid; transition:0.06s all;}
main input[type="submit"]{width:671px; height:81px; background-color:#aa2834; border-radius:22px;
  color:#fff; line-height:81px; position:absolute; top:770px; left:36px; cursor:pointer;
  margin:0; padding:0; border:1px solid transparent; outline:none;}
main input[type="checkbox"]{position:absolute; top:683px; left:100px; cursor:pointer;
  width:30px; height:30px;}
main p{font-size:25px; color:#616161; position:absolute; top:658px; left:158px; cursor: default;}
main #showPassword{position:absolute; top:368px; left:86px; color:#aa2834;}
main #showMoblie{position:absolute; top:495px; left:86px; color:#aa2834;}
main #showEmail{position:absolute; top:622px; left:86px; color:#aa2834;}
main #blankPassword{position:absolute; top:368px; left:86px; color:#aa2834;}
main #blankMoblie{position:absolute; top:495px; left:86px; color:#aa2834;}
main #blankEmail{position:absolute; top:622px; left:86px; color:#aa2834;}
main #blankName{position:absolute; top:242px; left:86px; color:#aa2834;}
a:link,a:visited,a:hover,a:active{
  text-decoration: none;
  color:inherit;
}
main a{font-size:23px; color:#616161; position:absolute; top:899px; left:83px;}
main a:hover{color:#aa2834;}
main #tip{width:300px;height:150px; position:absolute; top:300px; left:222.5px;
  background-color:rgba(187,51,55,0.8); font-size:30px; color:#fff; line-height:150px;
  border-radius:22px; display:none;}
</style>
