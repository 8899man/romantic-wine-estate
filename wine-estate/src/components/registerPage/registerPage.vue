<template>
    <div id="app">
      <header>
          <span>{{title}}</span>
          <a href="#"><img src="../../assets/back.png" height="43" width="25"/></a>
      </header>
      <main>
          <form method="post" action="" @submit="checkForm">
              <input type="text" placeholder="请输入用户昵称" name="registerName"/>
              <input type="password" placeholder="请输入6~16位密码" name="registerPassword"
                v-model="registerPassword" @change="checkPassword"/>
              <input type="text" placeholder="请输入手机号" name="registerMoblie"
                v-model="registerMoblie" @change="checkMoblie"/>
              <input type="email" placeholder="请输入邮箱地址" name="registerEmail"
                v-model="registerEmail"@change="checkEmail"/>
              <!--<span class="tips">{{tips}}</span>-->
              <button type="submit">快速注册</button>
          </form>
          <label><input type="checkbox" checked></label>
          <p>我已满十八周岁并接受也买服务条款</p>
          <a href="#"><<       已有账户，立即注册</a>
      </main>
    </div>
</template>

<script>
export default {
    name: "registerPage",
    data() {
      return {
        title: '注册'
      }
    },
    methods:{
      checkForm(){
        if(this.registerName&&this.registerPassword&&this.registerMoblie&&this.registerEmail){
          return true;
        }
        if(!this.registerName){
          alert("不能为空");
          return false;
        }
        if(!this.registerPassword){
          alert("不能为空");
          return false;
        }
        if(!this.registerMoblie){
          alert("不能为空");
          return false;
        }
        if(!this.registerEmail){
          alert("不能为空");
          return false;
        }
      },
      checkPassword(){
        var password=/^[\da-zA-Z]{6,16}$/;
        if(!password.test(this.registerPassword)){
          alert("请输入6~16位密码");
        }
      },
      checkMoblie(){
        var Moblie=/^1[34578]\d{9}$/;
        if(!Mobile.test(this.registerMoblie)){
          alert("请输入正确的手机号");
        }
      },
      checkEmail(){
        var Email=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(!Email.test(this.registerEmail)){
          alert("请输入正确的邮箱地址");
        }
      }
    }
}
</script>

<style scoped>
#app{width:750px; height:1334px; margin: 0 auto;}
header{width:750px; height:130px; background-color: #bb3337; position: relative;}
header span{font-size:30px; color:#fff; position:absolute; top:57px; right:346px; cursor:default;}
header a{width:25px; height:43px; position:absolute; top:55px; left:27px; cursor:pointer; display:block;
  line-height:0px;}

main{position:relative; padding-top:144px;}
main form>input{width:670px; height:85px; border:none; border-radius:37px; text-indent:42px;
  background-color:#eeeeee; margin-bottom: 40px; font-size:30px;}
main form>button{width:671px; height:81px; background-color:#aa2834; border-radius:22px;
  font-size:30px; color:#fff; line-height:81px; position:absolute; top:770px; left:36px; cursor:pointer;
  margin:0; padding:0; border:1px solid transparent; outline:none;}
main input[type="checkbox"]{position:absolute; top:683px; left:100px; cursor:pointer;
  width:30px; height:30px;}
main p{font-size:25px; color:#616161; position:absolute; top:658px; left:158px; cursor: default;}
main .tips{width:200px;height:100px; position:absolute; top:150px; left:232px;
  background-color:rgba(187,51,55,0.8); font-size:30px; color:#fff; line-height:100px;
  border-radius:22px;}
a:link,a:visited,a:hover,a:active{
  text-decoration: none;
  color:inherit;
}
main a:nth-of-type(1){font-size:23px; color:#616161; position:absolute; top:899px; left:83px;}
</style>
