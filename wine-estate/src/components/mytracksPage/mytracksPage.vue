<template>
  <div id="app">
    <header>
      <span>我的足迹</span>
      <img src="./img/back.png" alt="" @click="routeraccountPage"/>
      <span @click="delTracks" v-show="editor">编辑</span>
      <span @click="finishTracks" v-show="finish">完成</span>
    </header>
    <main>
      <ul>
        <li v-for="item in data" :key="item.goodsId">
          <img :src="item.smallPic" alt="图片不见了哦~"/>
          <p class="name">{{item.goodsTitle}}</p>
          <p class="price">￥{{item.goodsPrice}}</p>
          <img src="./img/del.png" class="del" v-show="showdel" @click="removeTracks($event)"/>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  export default {
    name: "mytracksPage",
    data() {
      return {
        showdel: false,
        editor: true,
        finish: false,
        data: []
      };
    },
    methods: {
      //删除历史记录
      delTracks() {
        this.showdel = true;
        this.editor = false;
        this.finish = true;
      },
      finishTracks() {
        this.showdel = false;
        this.editor = true;
        this.finish = false;
      },
      removeTracks(event) {
        let t = event.currentTarget;
        this.mygoodsId=[];
        (t.parentNode).remove();
        this.mygoodsId.push(t.goodsId);
        this.$http.post("/api/browseDelete.htm", {
          params: {
            goodsId: this.mygoodsId
          }
        }).then((res) => {
          console.log(res.data);
        }).catch((error) => {
          console.log(error);
        });
      },
      //跳转
      routeraccountPage() {
        this.$router.push({
          path: "/accountPage"
        });
      },
      initData() {
        this.$http.post("/api/browseSearch.htm", {
          params: {}
        }).then((res) => {
          console.log(res.data);
          this.data = res.data.data;
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    created() {
      // 初始化数据
      this.initData();
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
    background-color: #cd2131;
    position: relative;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  }

  header span:nth-of-type(1) {
    font-size: 30px;
    color: #fff;
    position: absolute;
    top: 60px;
    left: 312px;
    cursor: default;
  }

  header span:nth-of-type(2) {
    position: absolute;
    top: 65px;
    right: 49px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }

  header span:nth-of-type(3) {
    position: absolute;
    top: 65px;
    right: 49px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
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
  }

  main ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  main ul li {
    width: 750px;
    height: 120px;
    border-bottom: 1px #ccc solid;
    position: relative;
  }

  main li img:nth-of-type(1) {
    position: absolute;
    top: 20px;
    left: 50px;
    width: 100px;
    height: 80px;
    border-radius: 50%;
  }

  main li p:nth-of-type(1) {
    width: 480px;
    font-size: 26px;;
    position: absolute;
    left: 200px;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: default;
  }

  main li p:nth-of-type(2) {
    font-size: 20px;
    color: #cd2131;
    position: absolute;
    top: 50px;
    left: 200px;
    cursor: default;
  }

  main li img:nth-of-type(2) {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 20px;
    top: 42px;
    cursor: pointer;
  }
</style>
