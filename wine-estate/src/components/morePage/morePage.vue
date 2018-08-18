<template>
  <div id="app">
    <header>
      <span>更多</span>
      <img src="./img/back.png" alt="" @click="routeraccountPage"/>
    </header>
    <main>
      <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)" @click="routerfeedbackPage">
        <svg class="icon1" aria-hidden="true">
          <use xlink:href="#icon-yonghufankui"></use>
        </svg>
        <p>意见反馈</p>
      </div>
      <div>
        <svg class="icon2" aria-hidden="true">
          <use xlink:href="#icon-guanyuwomen"></use>
        </svg>
        <p>关于我们</p>
        <p class=" edition">{{editionnumber}}</p>
      </div>
      <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)" @click="logOff">
        <svg class="icon3" aria-hidden="true">
          <use xlink:href="#icon-tuichu"></use>
        </svg>
        <p>退出登录</p>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "morePage",
    data() {
      return {
        editionnumber: "V1.1"
      };
    },
    methods: {
      //点击效果
      changeColor(event) {
        let t = event.currentTarget;
        t.style.backgroundColor = "#ebebeb";
      },
      recoverColor(event) {
        let t = event.currentTarget;
        t.style.backgroundColor = "#fff";
      },
      //提示框
      logOff() {
        this.$messagebox.confirm("", {
          message: "确定执行此操作？",
          title: "提示",
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        }).then(action => {
          this.$http.get("/api/logout.htm", {
            params: {}
          }).then((res) => {
            console.log(res.data);
            this.$router.push({
              path: "/loginPage"
            });
          }).catch((error) => {
            console.log(error);
          });
        });
      },
      //跳转
      routeraccountPage() {
        this.$router.push({
          path: "/accountPage"
        });
      },
      routerfeedbackPage() {
        this.$router.push({
          path: "/feedbackPage"
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
    background-color: #ebebeb;
  }

  /*页面banner部分*/
  header {
    width: 750px;
    height: 130px;
    background-color: #cd2131;
    position: relative;
  }

  header span {
    font-size: 30px;
    color: #fff;
    position: absolute;
    top: 60px;
    left: 340px;
    cursor: default;
  }

  header img {
    width: 25px;
    height: 43px;
    position: absolute;
    top: 58px;
    left: 27px;
    cursor: pointer;
    display: block;
  }

  /*页面主体部分*/
  main {
    position: relative;
  }

  main div:nth-of-type(1) {
    width: 750px;
    height: 83px;
    background-color: #fff;
    border-bottom: 1px #dcdcdc solid;
    border-top: 1px #dcdcdc solid;
    margin-bottom: 71px;
    text-align: left;
  }

  main div:nth-of-type(2) {
    width: 750px;
    height: 83px;
    background-color: #fff;
    border-bottom: 1px #dcdcdc solid;
    border-top: 1px #dcdcdc solid;
    margin-bottom: 71px;
    text-align: left;
  }

  main div:nth-of-type(2) .edition {
    font-size: 20px;
    position: absolute;
    left: 657px;
    color: #8e8e8e;
    margin: 0;
  }

  main div:nth-of-type(3) {
    width: 750px;
    height: 83px;
    background-color: #fff;
    border-bottom: 1px #dcdcdc solid;
    border-top: 1px #dcdcdc solid;
    margin-bottom: 71px;
    text-align: left;
  }

  main div p {
    font-size: 26px;
    line-height: 83px;
    position: absolute;
    left: 165px;
    margin: 0;
    cursor: default;
  }

  .icon1 {
    width: 60px;
    height: 60px;
    fill: currentColor;
    overflow: hidden;
    position: absolute;
    left: 48px;
    top: 12px;
  }

  .icon2 {
    width: 60px;
    height: 60px;
    fill: currentColor;
    overflow: hidden;
    position: absolute;
    left: 48px;
    top: 167px;
  }

  .icon3 {
    width: 60px;
    height: 60px;
    fill: currentColor;
    overflow: hidden;
    position: absolute;
    left: 48px;
    top: 324px;
  }

  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    color: inherit;
  }
</style>
