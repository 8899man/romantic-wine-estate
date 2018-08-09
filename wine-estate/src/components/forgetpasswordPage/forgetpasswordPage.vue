<template>
    <div id="app">
        <header>
            <span>找回密码</span>
            <img src="./img/back.png" height="43" width="26" alt="图片不见了哦~" @click="routerloginPage">
        </header>
        <main>
            <form action="" method="post">
                <input type="text" placeholder="请输入手机号码" name="forgetMoblie" v-model.trim="forgetMoblie"/>
                <input type="text" placeholder="请输入验证码" name="forgetIdentify" v-model.trim="forgetIdentify"/>
                <input type="password" placeholder="请输入新的密码" name="forgetIdentify" v-model.trim="forgetIdentify"/>
                <input type="submit" value="确定"/>
            </form>
            <button>获取验证码</button>
        </main>
    </div>
</template>

<script>
export default {
    name: "forgetpasswordPage",
    methods:{
      //手机号验证
      checkMoblie(){
        var Moblie=/^1[34578]\d{9}$/;
        if(!Moblie.test(this.registerMoblie)){
          this.showMoblie=true;
          this.blankMoblie=false;
        }
        else{
          this.blankMoblie=false;
          this.showMoblie=false;
        }
      },
      //跳转
      routerloginPage(){
          this.$router.push({
          path: '/loginPage'
          })
      },
    }
}
</script>

<style scoped>
#app{width:750px; height:1334px; margin: 0 auto;}
/*页面banner部分*/
header{width:750px; height:130px; background-color: #bb3337; position:relative;}
header span{font-size:30px; color:#fff; position:absolute; top:60px; left:312px; cursor:default;}
header img{width:26px; height:43px; position:absolute; top:58px; left:27px; cursor:pointer;}
/*页面主体部分*/
main{position:relative; padding-top:144px;}
main input[type="text"],main input[type="password"]{width:670px; height:85px; border:none; border-radius:37px; text-indent:42px;
  background-color:#eeeeee; margin-bottom:70px; font-size:30px; transition:0.06s all;} 
main input[type="text"]:focus{border:1.5px #aa2834 solid;}
main input[type="password"]:focus{border:1.5px #aa2834 solid;}
main input[type="submit"]{width:671px; height:81px; background-color:#aa2834; border-radius:22px; font-size:30px;
  color:#fff; box-shadow:0 3px 6px 0 rgba(0, 0, 0, 0.3); transition: all .3s ease-out;
  line-height:81px; position:absolute; top:700px; left:36px; cursor:pointer;
  margin:0; padding:0; border:1px solid transparent; outline:none;}
main input[type="submit"]:hover{background-color:#c3363a; text-decoration:none; 
  box-shadow:0 5px 11px 0px rgba(0, 0, 0, 0.3);}
main button{width:100px; height:50px; background-color:#aa2834; border-radius:22px; font-size:16px; color:#fff;
  position:absolute; right:68px; top:163px; cursor:pointer;
  margin:0; padding:0; border:1px solid transparent; outline:none;}
</style>
