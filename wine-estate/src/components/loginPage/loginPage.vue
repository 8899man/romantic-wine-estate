<template>
  <div id="app">
    <header>
      <span>登录</span>
      <img src="./img/back.png" alt="" @click="routeraccountPage">
    </header>
    <main>
      <img src="./img/logo.png" class="logo" alt="图片不见了哦~"/>
      <svg class="icon1" aria-hidden="true">
        <use xlink:href="#icon-jiu"></use>
      </svg>
      <svg class="icon2" aria-hidden="true">
        <use xlink:href="#icon-jiubei"></use>
      </svg>
      <form method="post" action="http://192.168.0.241/login.htm" @submit.prevent="checkForm">
        <input type="text" id="loginText" name="loginText" v-model.trim="loginText" placeholder="请输入手机号码/邮箱地址"
               @change="checkText" @click="dispearText"/>
        <input type="password" id="password" name="password" v-model.trim="password" placeholder="请输入密码"
               @change="checkPassword" @click="dispearPassword"/>
        <input type="submit" name="loginSubmit" @mousedown="changeColor($event)" @mouseup="recoverColor($event)"
               value="立即登录"/>
      </form>
      <span id="showLogin" v-show="showLogin">请输入正确的手机号或邮箱地址哦~</span>
      <span id="showPassword" v-show="showPassword">请输入正确的密码哦~</span>
      <a href="#" @click="routerforgetpasswordPage">忘记密码</a>
      <a href="#" @click="routerregisterPage">快速注册</a>
    </main>
  </div>
</template>

<script>
  export default {
    name: "loginPage",
    data() {
      return {
        showLogin: false,
        showPassword: false
        //Id: [],
        //Name: []
      };
    },
    methods: {
      checkForm() {
        let loginTextval = document.getElementById("loginText").value;
        let passwordval = document.getElementById("password").value;
        let text1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let text2 = /^1[34578]\d{9}$/;
        let password = /^[\da-zA-Z]{6,16}$/;
        let config = {
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        };
        //提交条件
        if (this.loginText && this.password) {
          if (text1.test(this.loginText) || text2.test(this.loginText) && password.test(this.password)) {
            this.$http.post("/api/login.htm", config, {
              params: {
                loginText: loginTextval,
                password: passwordval
              }
            }).then((res) => {
              if (!res.data.status) {
                this.$messagebox.alert("", {
                  message: "登录失败，请重新登录",
                  title: "提示",
                  showConfirmButton: true,
                  confirmButtonText: "确定"
                });
              } else {
                this.$router.push({
                  path: "/accountPage"
                });
              }
              console.log(res.data);
            }).catch((error) => {
              console.log(error);
            });
          } else {
            this.showLogin = false;
            this.showPassword = false;
            this.$messagebox.alert("", {
              message: "填写的信息有错误哦~请重新填写",
              title: "提示",
              showConfirmButton: true,
              confirmButtonText: "确定"
            });
          }
        }
        //非空验证
        else {
          this.showLogin = false;
          this.showPassword = false;
          this.$messagebox.alert("", {
            message: "请填写完整哦~",
            title: "提示",
            showConfirmButton: true,
            confirmButtonText: "确定"
          });
        }
      },
      //手机和邮箱验证
      checkText() {
        let text1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let text2 = /^1[34578]\d{9}$/;
        if (!text1.test(this.loginText) && !text2.test(this.loginText)) {
          this.showLogin = true;
        }
        else {
          this.showLogin = false;
        }
      },
      //6~16位密码验证
      checkPassword() {
        let Password = /^[\da-zA-Z]{6,16}$/;
        if (!Password.test(this.password)) {
          this.showPassword = true;
        } else {
          this.showPassword = false;
        }
      },
      //点击提示栏消失
      dispearText() {
        this.showLogin = false;
      },
      dispearPassword() {
        this.showPassword = false;
      },
      //跳转
      routerregisterPage() {
        this.$router.push({
          path: "/registerPage"
        });
      },
      routeraccountPage() {
        this.$router.push({
          path: "/accountPage"
        });
      },
      routerforgetpasswordPage() {
        this.$router.push({
          path: "/forgetpasswordPage"
        });
      }
    }
  };
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
    top: 61px;
    left: 346px;
    cursor: default;
  }

  header img {
    width: 30px;
    height: 52px;
    position: absolute;
    top: 54px;
    left: 17px;
    cursor: pointer;
    display: block;
    line-height: 0;
  }

  /*页面主体部分*/
  main {
    position: relative;
  }

  main .logo {
    width: 200px;
    height: 202px;
    position: absolute;
    top: 93px;
    left: 275px;
    border-radius: 50%;
    transition: all 0.3s ease-out;
  }

  main .logo:hover {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.225);
    transform: rotate(45deg)
  }

  main input[type="text"] {
    width: 571px;
    height: 37px;
    left: 120px;
    font-size: 20px;
    border: none;
    border-bottom: 2px #dbdbdb solid;
    position: absolute;
    top: 408px;
    transition: 0.3s all;
  }

  main input[type="text"]:focus {
    border-bottom: 2px #bb3337 solid;
  }

  main input[type="password"] {
    width: 571px;
    height: 37px;
    left: 120px;
    font-size: 20px;
    border: none;
    border-bottom: 2px #dbdbdb solid;
    position: absolute;
    top: 487px;
    transition: 0.3s all;
  }

  main input[type="password"]:focus {
    border-bottom: 2px #bb3337 solid;
  }

  main input[type="submit"] {
    width: 670px;
    height: 81px;
    background-color: #aa2834;
    border-radius: 8px;
    font-size: 30px;
    color: #fff;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-out;
    line-height: 81px;
    position: absolute;
    top: 585px;
    left: 40px;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    outline: none;
  }

  main input[type="submit"]:hover {
    background-color: #c3363a;
    text-decoration: none;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.3);
  }

  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
  }

  main a:nth-of-type(1) {
    font-size: 22px;
    color: #bfbfbf;
    position: absolute;
    top: 693px;
    right: 180px;
    transition: all .3s ease-out;
  }

  main a:nth-of-type(1):hover {
    color: #aa2834;
  }

  main a:nth-of-type(2) {
    font-size: 22px;
    color: #aa2834;
    position: absolute;
    top: 693px;
    right: 51px;
  }

  main #showLogin {
    position: absolute;
    top: 458px;
    left: 120px;
    color: #aa2834;
    font-size: 20px;
  }

  main #showPassword {
    position: absolute;
    top: 535px;
    left: 120px;
    color: #aa2834;
    font-size: 20px;
  }

  .icon1 {
    width: 40px;
    height: 42px;
    position: absolute;
    top: 406px;
    left: 62px;
  }

  .icon2 {
    width: 35px;
    height: 42px;
    position: absolute;
    top: 488px;
    left: 65px;
  }

</style>
