<template>
  <div id="app">
    <header>
      <span>找回密码</span>
      <img src="./img/back.png" height="43" width="26" alt="图片不见了哦~" @click="routerloginPage">
    </header>
    <main>
      <form action="" method="post" @submit.prevent="checkForm">
        <input type="text" placeholder="请输入邮箱地址" name="forgetEmail" v-model.trim="forgetEmail"
               @change="checkEmail"/>
        <input type="text" placeholder="请输入验证码" name="forgetIdentify" v-model.trim="forgetIdentify"/>
        <input type="password" placeholder="请输入新6~16位的密码" name="forgetPassword" v-model.trim="forgetPassword"
               @change="checkPassword"/>
        <input type="submit" value="确定"/>
      </form>
      <button @click.stop="Identifying" v-show="!showTime"
              @mousedown="changeColor($event)" @mouseup="recoverColor($event)">获取验证码
      </button>
      <button v-show="showTime">{{time}}秒后重新获取</button>
      <span v-show="showEmail" id="showEmail">请输入正确的邮箱地址哦~</span>
      <span v-show="showPassword" id="showPassword">请输入正确的密码哦~</span>
      <span v-show="blankEmail" id="blankEmail">请填写完整哦~</span>
      <span v-show="blankIdentify" id="blankIdentify">请填写完整哦~</span>
      <span v-show="blankPassword" id="blankPassword">请填写完整哦~</span>
    </main>
  </div>
</template>

<script>
  export default {
    name: "forgetpasswordPage",
    data() {
      return {
        showEmail: false,
        showPassword: false,
        blankEmail: false,
        blankIdentify: false,
        blankPassword: false,
        showTime: false,
        time: 0
      }
    },
    methods: {
      //非空验证
      checkForm() {
        var password = /^[\da-zA-Z]{6,16}$/;
        var Email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        //提交条件
        if (this.forgetPassword && this.forgetEmail) {
          this.blankPassword = false;
          this.blankIdentify = false;
          this.blankEmail = false;
          if (password.test(this.forgetPassword) && Email.test(this.forgetEmail)) {
          }
          else {
          }
        }
        //非空验证
        if (!this.forgetPassword && !this.forgetIdentify && !this.forgetEmail) {
          this.showPassword = false;
          this.showEmail = false;
          this.blankPassword = true;
          this.blankIdentify = true;
          this.blankEmail = true;
        }
        if (!this.forgetPassword) {
          this.showPassword = false;
          this.blankPassword = true;
        }
        if (!this.forgetIdentify) {
          this.blankIdentify = true;
        }
        if (!this.forgetEmail) {
          this.showEmail = false;
          this.blankEmail = true;
        }
      },
      //邮箱地址验证
      checkEmail() {
        var Email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!Email.test(this.forgetEmail)) {
          this.showEmail = true;
          this.blankEmail = false;
        }
        else {
          this.blankEmail = false;
          this.showEmail = false;
        }
      },
      //密码验证
      checkPassword() {
        var password = /^[\da-zA-Z]{6,16}$/;
        if (!password.test(this.forgetPassword)) {
          this.showPassword = true;
          this.blankPassword = false;
        }
        else {
          this.blankPassword = false;
          this.showPassword = false;
        }
      },
      //发送验证码
      Identifying() {
        var Email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (Email.test(this.forgetEmail)) {
          this.showTime = true;
          this.time = 60;
          var timer = setInterval(() => {
            this.time--;
            if (this.time <= 0) {
              this.showTime = false;
              clearInterval(timer);
            }
          }, 1000);
        }
      },
      //点击效果
      changeColor(event) {
        var t = event.currentTarget;
        t.style.backgroundColor = "#95282c";
      },
      recoverColor(event) {
        var t = event.currentTarget;
        t.style.backgroundColor = "#aa2834";
      },
      //跳转
      routerloginPage() {
        this.$router.push({
          path: '/loginPage'
        })
      },
    }
  }
</script>

<style scoped>
  #app {
    width: 750px;
    height: 1334px;
    margin: 0 auto;
  }

  /*页面banner部分*/
  header {
    width: 750px;
    height: 130px;
    background-color: #bb3337;
    position: relative;
  }

  header span {
    font-size: 30px;
    color: #fff;
    position: absolute;
    top: 60px;
    left: 312px;
    cursor: default;
  }

  header img {
    width: 26px;
    height: 43px;
    position: absolute;
    top: 58px;
    left: 27px;
    cursor: pointer;
  }

  /*页面主体部分*/
  main {
    position: relative;
    padding-top: 152px;
  }

  main input[type="text"], main input[type="password"] {
    width: 670px;
    height: 85px;
    border: none;
    border-radius: 37px;
    text-indent: 42px;
    background-color: #eeeeee;
    margin-bottom: 50px;
    font-size: 30px;
    transition: 0.06s all;
  }

  main input[type="text"]:focus {
    border: 1.5px #aa2834 solid;
  }

  main input[type="password"]:focus {
    border: 1.5px #aa2834 solid;
  }

  main input[type="submit"] {
    width: 671px;
    height: 81px;
    background-color: #aa2834;
    border-radius: 22px;
    font-size: 30px;
    color: #fff;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
    transition: all .3s ease-out;
    line-height: 81px;
    position: absolute;
    top: 660px;
    left: 36px;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    outline: none;
  }

  main input[type="submit"]:hover {
    background-color: #c3363a;
    text-decoration: none;
    box-shadow: 0 5px 11px 0px rgba(0, 0, 0, 0.3);
  }

  main button:nth-of-type(1) {
    width: 100px;
    height: 50px;
    background-color: #aa2834;
    border-radius: 22px;
    font-size: 16px;
    color: #fff;
    position: absolute;
    right: 68px;
    top: 171px;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    outline: none;
  }

  main button:nth-of-type(2) {
    width: 100px;
    height: 50px;
    background-color: #aa2834;
    border-radius: 22px;
    font-size: 12px;
    color: #fff;
    position: absolute;
    right: 68px;
    top: 171px;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    outline: none;
  }

  main #showPassword {
    position: absolute;
    top: 528px;
    left: 86px;
    color: #aa2834;
  }

  main #showEmail {
    position: absolute;
    top: 253px;
    left: 86px;
    color: #aa2834;
  }

  main #blankPassword {
    position: absolute;
    top: 528px;
    left: 86px;
    color: #aa2834;
  }

  main #blankIdentify {
    position: absolute;
    top: 390px;
    left: 86px;
    color: #aa2834;
  }

  main #blankEmail {
    position: absolute;
    top: 253px;
    left: 86px;
    color: #aa2834;
  }
</style>
