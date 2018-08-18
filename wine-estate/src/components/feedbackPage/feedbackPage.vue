<template>
  <div id="app">
    <header>
      <span>意见反馈</span>
      <img src="./img/back.png" alt="" @click="routermorePage"/>
    </header>
    <main>
      <P>反馈内容</P>
      <textarea id="message" placeholder="请填写您的意见，我们会将卖酒做得更好" form="connection" name="message"
                v-model.trim="message" @keyup="test">
      </textarea>
      <p>联系方式</p>
      <form id="connection" method="get" action="">
        <input type="text" id="phone" placeholder="请填写您的手机号，以方便我们与您联系" name="phone"
               v-model.trim="phone" @keyup="test"/>
        <input type="submit" id="submit" value="提交" @click="refer"/>
      </form>
      <span v-show="warning">请填写正确的手机号</span>
    </main>
  </div>
</template>

<script>
  export default {
    name: "feedbackPage",
    data() {
      return {
        warning: false
      };
    },
    methods: {
      //验证
      test() {
        let submitval = document.getElementById("submit");
        let text = /^1[34578]\d{9}$/;
        if (this.message && this.phone) {
          if (!text.test(this.phone)) {
            submitval.style.color = "#d63f4b";
            this.warning = true;
          }
          else {
            submitval.style.color = "#fff";
            this.warning = false;
          }
        }
        else {
          submitval.style.color = "#d63f4b";
        }
      },

      //提交跳转
      refer() {
        let messageval = document.getElementById("message").value;
        let phoneval = document.getElementById("phone").value;
        if (this.message && this.phone) {
          this.$http.get("/api/message.htm?message=1&phone=1", {
            params: {
                message: messageval,
                phone: phoneval
            }
          }).then((res) => {
            console.log(res.data);
            this.$router.push({
              path: "/morePage"
            });
          }).catch((error) => {
            console.log(error);
          });
        }
      },
      routermorePage() {
        this.$router.push({
          path: "/morePage"
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
    overflow: hidden;
  }

  /*页面banner部分*/
  header {
    width: 750px;
    height: 130px;
    background-color: #cd2131;
    position: relative;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  }

  header span {
    font-size: 30px;
    color: #fff;
    position: absolute;
    top: 64px;
    left: 295px;
    cursor: default;
  }

  header img {
    width: 26px;
    height: 43px;
    position: absolute;
    top: 64px;
    left: 20px;
    cursor: pointer;
  }

  a:link, a:visited, a:hover, a:active {
    text-decoration: none;
  }

  /*页面主体部分*/
  main {
    position: relative;
    padding-top: 38px;
  }

  main p:nth-of-type(1) {
    font-size: 22px;
    color: #666666;
    position: absolute;
    left: 20px;
    top: 39px;
    margin: 0;
    cursor: default;
  }

  main textarea {
    width: 709px;
    height: 180px;
    border: none;
    display: block;
    font-size: 16px;
    box-sizing: border-box;
    padding-left: 17px;
    padding-top: 26px;
    resize: none;
    box-sizing: border-box;
    position: absolute;
    top: 83px;
    left: 20px;
  }

  main p:nth-of-type(2) {
    font-size: 22px;
    color: #666666;
    position: absolute;
    left: 20px;;
    top: 310px;
    margin: 0;
    cursor: default;
  }

  main input[type="text"] {
    width: 709px;
    height: 71px;
    border: none;
    position: absolute;
    top: 352px;
    left: 20px;
    box-sizing: border-box;
    padding-left: 17px;
    font-size: 16px;
  }

  main #submit {
    position: absolute;
    top: -64px;
    right: 49px;
    cursor: pointer;
    font-size: 28px;
    color: #d63f4b;
    background-color: transparent;
    margin: 0;
    padding: 0;
    border: 1px solid transparent;
    outline: none;
  }

  main span {
    position: absolute;
    left: 20px;
    top: 435px;
    font-size: 16px;
    color: #aa2834
  }
</style>
