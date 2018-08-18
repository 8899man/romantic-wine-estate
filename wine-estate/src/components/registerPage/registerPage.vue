<template>
  <div id="app">
    <header>
      <span>注册</span>
      <img src="./img/back.png" alt="" @click="routerloginPage"/>
    </header>
    <main>
      <form method="post" action="http://192.168.0.241/register.htm" @submit.prevent="checkForm">
        <input type="text" id="userName" placeholder="请输入用户昵称" name="userName" v-model.trim="userName"/>
        <input type="password" id="password" placeholder="请输入6~16位密码" name="password"
               v-model.trim="password" @change="checkPassword" @click="dispearPassword"/>
        <input type="text" id="phone" placeholder="请输入手机号" name="phone"
               v-model.trim="phone" @change="checkMoblie" @click="dispearMoblie"/>
        <input type="text" id="email" placeholder="请输入邮箱地址" name="email"
               v-model.trim="email" @change="checkEmail" @click="dispearEmail"/>
        <input type="submit" @mousedown="changeColor($event)" @mouseup="recoverColor($event)" value="快速注册"/>
      </form>
      <span v-show="showPassword" id="showPassword">请输入正确的密码哦~</span>
      <span v-show="showMoblie" id="showMoblie">请输入正确的手机号哦~</span>
      <span v-show="showEmail" id="showEmail">请输入正确的邮箱地址哦~</span>
      <label><input type="checkbox" checked></label>
      <p>我已满十八周岁并接受也买服务条款</p>
      <a href="#" @click="routerloginPage"><< 已有账户，立即登录</a>
    </main>
  </div>
</template>

<script>
  export default {
    name: "registerPage",
    data() {
      return {
        showPassword: false,
        showMoblie: false,
        showEmail: false
      };
    },
    methods: {
      checkForm() {
        let userNameval = document.getElementById("userName").value;
        let emailval = document.getElementById("email").value;
        let phoneval = document.getElementById("phone").value;
        let passwordval = document.getElementById("password").value;
        let Password = /^[\da-zA-Z]{6,16}$/;
        let Moblie = /^1[34578]\d{9}$/;
        let Email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let config = {
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        };
        //提交条件
        if (this.userName && this.password && this.phone && this.email) {
          if (Password.test(this.password) && Moblie.test(this.phone) && Email.test(this.email)) {
            this.$http.post("/api/register.htm",config, {
              params: {
                userName: userNameval,
                password: passwordval,
                phone: phoneval,
                email: emailval
              }
            }).then((res) => {
              if (!res.data.status) {
                this.$messagebox.alert("", {
                  message: "注册失败，请重新注册",
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
            this.showPassword = false;
            this.showMoblie = false;
            this.showEmail = false;
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
          this.showPassword = false;
          this.showMoblie = false;
          this.showEmail = false;
          this.$messagebox.alert("", {
            message: "请填写完整哦~",
            title: "提示",
            showConfirmButton: true,
            confirmButtonText: "确定"
          });
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
      //手机号验证
      checkMoblie() {
        let Moblie = /^1[34578]\d{9}$/;
        if (!Moblie.test(this.phone)) {
          this.showMoblie = true;
        }
        else {
          this.showMoblie = false;
        }
      },
      //邮箱验证
      checkEmail() {
        let Email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!Email.test(this.email)) {
          this.showEmail = true;
        }
        else {
          this.showEmail = false;
        }
      },
      //点击提示栏消失
      dispearPassword() {
        this.showPassword = false;
      },
      dispearMoblie() {
        this.showMoblie = false;
      },
      dispearEmail() {
        this.showEmail = false;
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
    top: 57px;
    right: 346px;
    cursor: default;
  }

  header img {
    width: 25px;
    height: 43px;
    position: absolute;
    top: 55px;
    left: 27px;
    cursor: pointer;
    display: block;
    line-height: 0;
  }

  /*页面主体部分*/
  main {
    position: relative;
    padding-top: 144px;
  }

  main input[type="text"], main input[type="password"] {
    width: 670px;
    height: 85px;
    border: none;
    border-radius: 37px;
    text-indent: 42px;
    background-color: #eeeeee;
    margin-bottom: 40px;
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
    top: 770px;
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

  main input[type="checkbox"] {
    position: absolute;
    top: 679px;
    left: 100px;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  main p {
    font-size: 25px;
    color: #616161;
    position: absolute;
    top: 658px;
    left: 158px;
    cursor: default;
  }

  main #showPassword {
    position: absolute;
    top: 368px;
    left: 86px;
    color: #aa2834;
    font-size: 20px;
  }

  main #showMoblie {
    position: absolute;
    top: 495px;
    left: 86px;
    color: #aa2834;
    font-size: 20px;
  }

  main #showEmail {
    position: absolute;
    top: 622px;
    left: 86px;
    color: #aa2834;
    font-size: 20px;
  }

  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
  }

  main a {
    font-size: 23px;
    color: #616161;
    position: absolute;
    top: 899px;
    left: 83px;
    transition: all .3s ease-out;
  }

  main a:hover {
    color: #aa2834;
  }
</style>
