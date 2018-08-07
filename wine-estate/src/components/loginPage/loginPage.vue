<template>
  <div id="app">
    <header>
        <span>{{title}}</span>
        <a href="#" @click="routergoodMain"><img src="./img/back.png" height="52" width="30" alt="图片不见了哦~"/></a>
    </header>
    <main>
        <img src="./img/logo.png" height="202" width="200" class="logo" alt="图片不见了哦~"/>
        <img src="./img/icon5-4.png" height="37" width="35" class="icon1" alt="图片不见了哦~"/>
        <img src="./img/icon6-4.png" height="37" width="35" class="icon2" alt="图片不见了哦~"/>
        <form  method="get" action=""  @submit.prevent="checkForm">
            <input type="text" name="loginText" v-model.trim="loginText" placeholder="请输入手机号码/邮箱地址"
            @change="checkText"/>
            <input type="password"  name="loginPassword" v-model.trim="loginPassword" placeholder="请输入密码"
            @change="checkPassword"/>
            <input type="submit" name="loginSubmit" @mousedown="changeColor($event)" @mouseup="recoverColor($event)"
            value="立即登录"/>
        </form>
        <span id="showLogin" v-show="showLogin">请输入正确的手机号或邮箱地址哦~</span>
        <span id="showPassword" v-show="showPassword">请输入正确的密码哦~</span>
        <span v-show="blankLogin" id="blankLogin">请填写完整哦~</span>
        <span v-show="blankPassword" id="blankPassword">请填写完整哦~</span>
        <a href="#">忘记密码</a>
        <a href="#" @click="routerregisterPage">快速注册</a>
    </main>
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  data() {
    return {
      title: '登录',
      showLogin:false,
      showPassword:false,
      blankLogin:false,
      blankPassword:false
    }
  },
  methods:{
    checkForm(){
        var text1=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var text2=/^1[34578]\d{9}$/;
        var password=/^[\da-zA-Z]{6,16}$/;
        //提交条件
        if(this.loginText&&this.loginPassword){
          this.blankLogin=false;
          this.blankPassword=false;
          if(text1.test(this.loginText)||text2.test(this.loginText)&&password.test(this.loginPassword)){
            return true;
          }
          else{
            return false;
          }
        }
        //非空验证
        if(!this.loginText&&!this.loginPassword){
          this.showLogin=false;
          this.showPassword=false;
          this.blankLogin=true;
          this.blankPassword=true;
          return false;
        }
        if(!this.loginText){
          this.showLogin=false;
          this.blankLogin=true;
          return false;
        }
        if(!this.loginPassword){ 
          this.showPassword=false;
          this.blankPassword=true;
          return false;
        }
    },
    //手机和邮箱验证
    checkText(){
      var text1=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      var text2=/^1[34578]\d{9}$/;
      if(!text1.test(this.loginText)&&!text2.test(this.loginText)){
        this.blankLogin=false;
        this.showLogin=true;
      }
      else{
        this.blankLogin=false;
        this.showLogin=false;
      }
    },
    //6~16位密码验证
    checkPassword(){
      var password=/^[\da-zA-Z]{6,16}$/;
      if(!password.test(this.loginPassword)){
        this.blankPassword=false;
        this.showPassword=true;
      }else{
        this.blankPassword=false;
        this.showPassword=false;
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
      },
    //跳转
    routerregisterPage(){
        this.$router.push({
          path: '/registerPage'
        })
    },
    routergoodMain(){
        this.$router.push({
          path: '/registerPage'
        })
    }
  }
}
</script>

<style scoped>
#app{width:750px; height:1334px; margin: 0 auto;}
/*页面banner部分*/
header{width:750px; height:130px; background-color: #bb3337; position: relative;}
header span{font-size:30px; color:#fff; position: absolute; top:61px; left:346px; cursor:default;}
header a{width:24px; height:68px; position: absolute; top:49px; left:17px; cursor:pointer; display:block;
  line-height:0px;}
/*页面主体部分*/
main{position:relative;}
main .logo{position: absolute; top:93px; left:275px;}
main .icon1{position: absolute; top:408px; left:62px;}
main .icon2{position: absolute; top:487px; left:62px;}
main input[type="text"]{width:571px; height:37px; left:120px; font-size:20px;
  border:none; border-bottom:2px #dbdbdb solid; position:absolute; top:408px;}
main input[type="text"]:focus{border-bottom:2px #bb3337 solid; transition:0.6s all;}
main input[type="password"]{width:571px; height:37px; left:120px; font-size:20px; 
  border:none; border-bottom:2px #dbdbdb solid; position:absolute; top:487px;}
main input[type="password"]:focus{border-bottom:2px #bb3337 solid; transition:0.6s all;}
main input[type="submit"]{width:670px; height:81px; background-color:#aa2834; border-radius:8px;
  font-size:30px; color:#fff; line-height:81px; position:absolute; top:585px; left:40px; cursor:pointer;
  margin:0; padding:0; border:1px solid transparent; outline: none;}
main .tips{width:200px;height:100px; position:absolute; top:400px; left:275.5px;
  background-color:rgba(187,51,55,0.8); font-size:30px; color:#fff; line-height:100px;
border-radius:22px; display:none;}
a:link,a:visited,a:hover,a:active{
  text-decoration: none;
  color:inherit;
}
main a:nth-of-type(1){font-size:22px; color:#bfbfbf; position:absolute; top:693px; right:180px;}
main a:nth-of-type(1):hover{color:#aa2834;}
main a:nth-of-type(2){font-size:22px; color:#aa2834; position:absolute; top:693px; right:51px;}
main #showLogin{position:absolute; top:458px; left:120px; color:#aa2834;}
main #showPassword{position:absolute; top:535px; left:120px; color:#aa2834;}
main #blankLogin{position:absolute; top:458px; left:120px; color:#aa2834;}
main #blankPassword{position:absolute; top:535px; left:120px; color:#aa2834;}
</style>
