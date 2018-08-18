<template>
  <div id="app">
    <header>
      <span>找回密码</span>
      <img src="./img/back.png" alt="" @click="routerloginPage">
    </header>
    <main>
      <form action="http://192.168.0.241/findBack.htm" method="post" @submit.prevent="checkForm">
        <input type="text" id="email" placeholder="请输入邮箱地址" name="email" v-model.trim="email"
               @change="checkEmail" @click="dispearEmail"/>
        <input type="text" id="code" placeholder="请输入验证码" name="code" v-model.trim="code"/>
        <input type="password" id="password" placeholder="请输入新的6~16位密码" name="password" v-model.trim="password"
               @change="checkPassword" @click="dispearPassword"/>
        <input type="submit" value="确定"/>
      </form>
      <button @click.stop="Identifying" v-show="!showTime"
              @mousedown="changeColor($event)" @mouseup="recoverColor($event)">获取验证码
      </button>
      <button v-show="showTime">{{time}}秒后重新获取</button>
      <span v-show="showEmail" id="showEmail">请输入正确的邮箱地址哦~</span>
      <span v-show="showPassword" id="showPassword">请输入正确的密码哦~</span>
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
        showTime: false,
        time: 0
      };
    },
    methods: {
      //非空验证
      checkForm() {
        let emailval = document.getElementById("email").value;
        let codeval = document.getElementById("code").value;
        let passwordval = document.getElementById("password").value;
        let Password = /^[\da-zA-Z]{6,16}$/;
        let Email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let config = {
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        };
        //提交条件
        if (this.password && this.email && this.code) {
          if (Password.test(this.password) && Email.test(this.email)) {
            this.$http.post("/api/findBack.htm", config, {
              params: {
                email: emailval,
                code: codeval,
                password: passwordval
              }
            }).then((res) => {
              console.log(res.data);
            }).catch((error) => {
              console.log(error);
            });
          }
          else {
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
          this.$messagebox.alert("", {
            message: "请填写完整哦~",
            title: "提示",
            showConfirmButton: true,
            confirmButtonText: "确定"
          });
        }
      },
      //邮箱地址验证
      checkEmail() {
        let Email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!Email.test(this.email)) {
          this.showEmail = true;
        }
        else {
          this.showEmail = false;
        }
      },

      //密码验证
      checkPassword() {
        let Password = /^[\da-zA-Z]{6,16}$/;
        if (!Password.test(this.password)) {
          this.showPassword = true;
        }
        else {
          this.showPassword = false;
        }
      },

      //发送验证码
      Identifying() {
        let emailcodeval = document.getElementById("email").value;
        let Email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (Email.test(this.email)) {
          this.$http.post("/api/getCode.htm", {
            params: {
              email: emailcodeval
            }
          }).then((res) => {
            console.log(res.data);
          }).catch((error) => {
            console.log(error);
          });
          this.showTime = true;
          this.time = 60;
          let timer = setInterval(() => {
            this.time--;
            if (this.time <= 0) {
              this.showTime = false;
              clearInterval(timer);
            }
          }, 1000);
        }
      },

      //点击提示栏消失
      dispearEmail() {
        this.showEmail = false;
      },
      dispearPassword() {
        this.showPassword = false;
      },

      //点击效果
      changeColor(event) {
        let t = event.currentTarget;
        t.style.backgroundColor = "#95282c";
      },
      recoverColor(event) {
        let t = event.currentTarget;
        t.style.backgroundColor = "#aa2834";
      },
      //跳转
      routerloginPage() {
        this.$router.push({
          path: "/loginPage"
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
    overflow: hidden;
  }

  /*页面banner部分*/
  header {
    width: 750px;
    height: 130px;
    background-color: #bb3337;
    position: relative;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
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
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.3);
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
    font-size: 20px;
  }

  main #showEmail {
    position: absolute;
    top: 253px;
    left: 86px;
    color: #aa2834;
    font-size: 20px;
  }

  main #blankPassword {
    position: absolute;
    top: 528px;
    left: 86px;
    color: #aa2834;
    font-size: 20px;
  }

  main #blankIdentify {
    position: absolute;
    top: 390px;
    left: 86px;
    color: #aa2834;
    font-size: 20px;
  }

  main #blankEmail {
    position: absolute;
    top: 253px;
    left: 86px;
    color: #aa2834;
    font-size: 20px;
  }
</style>
