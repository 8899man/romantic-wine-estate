<template>
  <div id="app">
    <header>
      <span>个人信息</span>
      <img src="./img/back.png" alt="" @click="routeraccountPage"/>
    </header>
    <main>
      <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)">
        <img :src="headImg" alt="" id="fileImg" ref="img"/>
        <span>头像</span>
        <input type="file" accept="image/*" id="btn" @change="upload" multiple>
        <img src="./img/return3.png" class="goto" alt="图片不见了哦~"/>
      </div>
      <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)">
        <span>昵称</span>
        <img src="./img/return3.png" alt="图片不见了哦~"/>
        <span class="name">{{Name}}</span>
      </div>
      <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)" @click="openPicker">
        <span>生日</span>
        <img src="./img/return3.png" alt="图片不见了哦~"/>
        <p>{{myBirthday}}</p>
      </div>
      <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)" @click="routernewAddress">
        <span>地址管理</span>
      </div>
      <mt-datetime-picker
        v-model="pickerVisible"
        type="date"
        ref="picker"
        confirmText="确定"
        cancelText="取消"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        @confirm="handleConfirm"
        :startDate="startDate"
        :endDate="endDate">
      </mt-datetime-picker>
    </main>
  </div>
</template>

<script>
  export default {
    name: "informationPage",
    data() {
      return {
        //生日部分
        pickerVisible: null,
        value: null,
        startDate: new Date("1960"),
        endDate: new Date(),
        //传参
        Name: "",
        myBirthday: "",
        headImg: require("./img/head.png"),
        Id:''
      };
    },
    methods: {
      //头像部分
      upload() {
          let btn = document.querySelector("#btn");
          let img = document.querySelector("#fileImg");
          let file = btn.files[0];
          let reader = new FileReader();
          let formdata = new FormData();
          reader.readAsDataURL(file);
          reader.onload = function(e) {
            img.src = e.target.result;
            img.style.display = "block";
          };
          formdata.append("file", file, file.name);
          let config = {
            headers: { "Content-Type": "multipart/form-data"}
          };
          this.$http.post("/api/headUpload.htm", formdata, config).then((res) => {
            console.log(res.data);
            this.headImg = res.data.data.url;
          });
      },
      //生日部分
      openPicker() {
        this.$refs.picker.open();
      },
      handleConfirm(value) {
        let y = value.getFullYear();
        let m = value.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        let d = value.getDate();
        d = d < 10 ? ("0" + d) : d;
        this.pickerVisible = y + "-" + m + "-" + d;
        this.myBirthday = this.pickerVisible;
        this.$http.get("/api/birthday.htm", {
          params: {
            birthday:this.myBirthday
          }
        }).then((res) => {
          console.log(res.data);
        }).catch((error) => {
          console.log(error);
        });
      },
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
      routeraccountPage() {
        this.$router.push({
          path: "/accountPage"
        });
      },
      routernewAddress() {
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
              path: "/newAddress"
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
    height: 130px;
    background-color: #cd2131;
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
    font-size: 24px;
    text-align: left;
    position: relative;
  }

  main div:nth-of-type(1) {
    width: 750px;
    height: 158px;
    background-color: #fff;
    border-bottom: 1px #dbdbdb solid;
    line-height: 158px;
  }

  main div:nth-of-type(1) #btn {
    width: 750px;
    height: 158px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  main div:nth-of-type(1) img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    position: absolute;
    right: 70px;
    top: 15px;
  }

  main div:nth-of-type(1) .goto {
    width: 16px;
    height: 26px;
    position: absolute;
    top: 67px;
    right: 30px;
  }

  main div:nth-of-type(2) {
    width: 750px;
    height: 98px;
    background-color: #fff;
    border-bottom: 1px #dbdbdb solid;
    line-height: 98px;
  }

  main div:nth-of-type(2) img {
    width: 16px;
    height: 26px;
    position: absolute;
    right: 30px;
    top: 195px;
  }

  main .name {
    width: 130px;
    font-size: 20px;
    color: #8e8e8e;
    position: absolute;
    top: 210px;
    right: 70px;
    margin: 0;
    line-height: 0;
    text-align: center;
    cursor: default;
  }

  main div:nth-of-type(3) {
    width: 750px;
    height: 98px;
    background-color: #fff;
    border-bottom: 1px #dbdbdb solid;
    line-height: 98px;
  }

  main div:nth-of-type(3) img {
    width: 16px;
    height: 26px;
    position: absolute;
    right: 30px;
    top: 295px;
  }

  main div:nth-of-type(3) p {
    font-size: 20px;
    color: #8e8e8e;
    position: absolute;
    top: 309px;
    left: 563px;
    margin: 0;
    line-height: 0;
    cursor: default;
  }

  main div:nth-of-type(4) {
    width: 750px;
    height: 98px;
    background-color: #fff;
    border-bottom: 1px #dbdbdb solid;
    line-height: 98px;
  }

  main div:nth-of-type(4) p {
    font-size: 20px;
    color: #8e8e8e;
    position: absolute;
    top: 405px;
    left: 570px;
    margin: 0;
    line-height: 0;
    cursor: default;
  }

  main div:nth-of-type(4) img {
    width: 16px;
    height: 26px;
    position: absolute;
    right: 30px;
    top: 392px;
  }

  main div:nth-of-type(5) {
    width: 750px;
    position: relative;
    right: 2px;
    cursor: default;
  }

  main div span {
    padding-left: 33px;
    font-size: 24px;
    cursor: default;
  }
</style>
