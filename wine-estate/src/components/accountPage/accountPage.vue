<template>
  <div id="app">
    <header>
      <span>我的账户</span>
      <img :src="headImg" class="head" alt="图片不见了哦~" @click="routerloginPage"/>
      <img src="./img/settings.png" alt="" @click="routermorePage"/>
      <img src="./img/return4.png" alt="" @click="routerinformationPage"/>
      <p>{{Name}}</p>
    </header>
    <main>
      <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)" @click="routerallorders" id="myOrder"
           class="order">
        <span>我的订单</span>
        <span>查看全部标签</span>
        <img src="./img/return3.png" alt="图片不见了哦~"/>
      </div>
      <div class="menu">
            <span @click="routerallorders">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-qianbao-"></use>
              </svg>
              <p>待付款</p>
            </span>
        <span @click="routerallorders">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-huoche"></use>
              </svg>
              <p>待收货</p>
            </span>
        <span @click="routerallorders">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-pinglun1"></use>
              </svg>
              <p>待评价</p>
            </span>
      </div>
      <div class="list">
              <span @mousedown="changeColor($event)" @mouseup="recoverColor($event)">
                <img src="./img/icon1-4.png" alt="图片不见了哦~"/>
                <p>存酒库</p>
              </span>
        <span @mousedown="changeColor($event)" @mouseup="recoverColor($event)">
                <img src="./img/icon2-4.png" alt="图片不见了哦~"/>
                <p>我的酒评</p>
              </span>
        <span @mousedown="changeColor($event)" @mouseup="recoverColor($event)">
                <img src="./img/icon3-4.png" alt="图片不见了哦~"/>
                <p>我的关注</p>
              </span>
        <span @mousedown="changeColor($event)" @mouseup="recoverColor($event)" @click="routermytracksPage">
                <img src="./img/icon4-4.png" alt="图片不见了哦~"/>
                <p>我的足迹</p>
              </span>
      </div>
    </main>
    <bottom></bottom>
    <img src="./img/my_1.jpg" alt="我的" class="wode">
  </div>
</template>

<script>
  import bottom from "../bottom/bottom.vue";

  export default {
    name: "accountPage",
    components: {bottom},
    data() {
      return {
        Name: "点击登录",
        headImg: require("./img/head.png")
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
      //跳转
      routerloginPage() {
        this.$router.push({
          path: "/loginPage"
        });
      },
      routermorePage() {
        this.$http.get("/api/info.htm", {
          params: {}
        }).then((res) => {
          if (!res.data.status) {
            this.$messagebox.alert("", {
              message: "请先登录哦~",
              title: "提示",
              showConfirmButton: true,
              confirmButtonText: "确定"
            });
          } else {
            this.$router.push({
              path: "/morePage"
            });
          }
        })
      },
      routerinformationPage() {
        this.$http.get("/api/info.htm", {
          params: {}
        }).then((res) => {
          if (!res.data.status) {
            this.$messagebox.alert("", {
              message: "请先登录哦~",
              title: "提示",
              showConfirmButton: true,
              confirmButtonText: "确定"
            });
          } else {
            this.$router.push({
              path: "/informationPage"
            });
          }
        })
      },
      routerallorders() {
        this.$http.get("/api/info.htm", {
          params: {}
        }).then((res) => {
          if (!res.data.status) {
            this.$messagebox.alert("", {
              message: "请先登录哦~",
              title: "提示",
              showConfirmButton: true,
              confirmButtonText: "确定"
            });
          } else {
            this.$router.push({
              path: "/allorders"
            });
          }
        })
      },
      routermytracksPage() {
        this.$http.get("/api/info.htm", {
          params: {}
        }).then((res) => {
          if (!res.data.status) {
            this.$messagebox.alert("", {
              message: "请先登录哦~",
              title: "提示",
              showConfirmButton: true,
              confirmButtonText: "确定"
            });
          } else {
            this.$router.push({
              path: "/mytracksPage"
            });
          }
        })
      },
      initData() {
        this.$http.get("/api/info.htm", {
          params: {}
        }).then((res) => {
          console.log(res.data);
          this.Name = res.data.data.userName;
          this.headImg = res.data.data.headPic;
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    created() {
      this.initData();
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
    height: 305px;
    background-image: url("./img/banner.jpg");
    position: relative;
    border-bottom: 1px #b06e70 solid;
  }

  header span {
    font-size: 28px;
    color: #fff;
    position: absolute;
    top: 50px;
    left: 34px;
    cursor: default;
  }

  header .head {
    width: 158px;
    height: 158px;
    position: absolute;
    top: 86px;
    left: 295px;
    border: 3px #fff solid;
    border-radius: 50%;
    cursor: pointer;
  }

  header img:nth-of-type(2) {
    width: 66px;
    height: 66px;
    position: absolute;
    top: 38px;
    right: 13px;
    cursor: pointer;
    display: block;
    line-height: 0;
  }

  header img:nth-of-type(3) {
    width: 26px;
    height: 44px;
    position: absolute;
    top: 144px;
    right: 32px;
    cursor: pointer;
    display: block;
    line-height: 0;
  }

  header p {
    width: 100%;
    position: absolute;
    top: 232px;
    font-size: 26px;
    color: #fff;
    text-align: center;
    cursor: default;
  }

  /*页面主体部分*/
  main {
    position: relative;
  }

  main .order {
    width: 729px;
    height: 80px;
    border-bottom: 1px #dcdcdc solid;
    padding-left: 21px;
    list-style: none;
    line-height: 80px;
    text-align: left;
    cursor: default;
    background-color: #fff;
  }

  main .order span:nth-of-type(1) {
    font-size: 24px;
  }

  main .order span:nth-of-type(2) {
    font-size: 22px;
    color: #c5c5c5;
    position: absolute;
    right: 64px;
  }

  main .order img {
    width: 16px;
    height: 26px;
    position: absolute;
    right: 31px;
    top: 27px;
  }

  main .menu {
    width: 750px;
    height: 170px;
    background-color: #fff;
  }

  main .menu span:nth-of-type(1) {
    width: 76px;
    height: 110px;
    position: absolute;
    left: 103px;
    top: 103px;
    cursor: pointer;
    text-align: center;
  }

  main .menu span:nth-of-type(2) {
    width: 76px;
    height: 110px;
    position: absolute;
    left: 338px;
    top: 103px;
    cursor: pointer;
    text-align: center;
  }

  main .menu span:nth-of-type(3) {
    width: 76px;
    height: 110px;
    position: absolute;
    left: 573px;
    top: 103px;
    cursor: pointer;
    text-align: center;
  }

  main .menu p {
    font-size: 22px;
    color: #000;
    padding-top: 4px;
    text-align: center;
    margin: 0;
  }

  main .list {
    width: 750px;
    height: 158px;
    background-color: #fff;
    position: absolute;
    top: 306px;
    border-bottom: 1px #bababa solid;
    border-top: 1px #bababa solid;
  }

  main .list span:nth-of-type(1) {
    width: 186.75px;
    height: 158px;
    border-right: 1px #bababa solid;
    position: absolute;
    left: 0;
    display: block;
    cursor: pointer;
  }

  main .list span:nth-of-type(2) {
    width: 186.75px;
    height: 158px;
    border-right: 1px #bababa solid;
    position: absolute;
    left: 187.75px;
    cursor: pointer;
  }

  main .list span:nth-of-type(3) {
    width: 186.75px;
    height: 158px;
    border-right: 1px #bababa solid;
    position: absolute;
    left: 375.5px;
    cursor: pointer;
  }

  main .list span:nth-of-type(4) {
    width: 186.75px;
    height: 158px;
    position: absolute;
    left: 563.25px;
    cursor: pointer;
  }

  main .list span p {
    font-size: 21px;
    color: #000;
    padding-top: 6px;
    margin: 0;
  }

  main .list span img {
    width: 72px;
    height: 72px;
    padding-top: 26px;
  }

  .icon {
    width: 90px;
    height: 90px;
    fill: currentColor;
    overflow: hidden;
    position: relative;
    right: 6px;
  }
  .wode{
    position:fixed;
    right:280px;
    bottom:12px;
    height:72px;
    width:68px;
  }
</style>
