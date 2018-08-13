<template>
  <div id="app">
    <header>
      <span>个人信息</span>
      <img src="./img/back.png" height="43" width="26" alt="图片不见了哦~" @click="routeraccountPage"/>
    </header>
    <main>
      <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)" @click="actionSheet">
        <img src="./img/head.png" height="130" width="130" alt="图片不见了哦~"/>
        <span>头像</span>
        <img src="./img/return3.png" height="26" width="16" class="goto" alt="图片不见了哦~"/>
      </div>
      <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)">
        <span>昵称</span>
        <img src="./img/return3.png" height="26" width="16" alt="图片不见了哦~"/>
        <p>{{name}}</p>
      </div>
      <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)" @click="sexPicker">
        <span>性别</span>
        <img src="./img/return3.png" height="26" width="16" alt="图片不见了哦~"/>
      </div>
      <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)" @click="openPicker">
        <span>生日</span>
        <img src="./img/return3.png" height="26" width="16" alt="图片不见了哦~"/>
      </div>
      <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)" @click="routernewAddress">
        <span>地址管理</span>
      </div>
      <mt-actionsheet
        :actions="photo"
        v-model="sheetVisible">
      </mt-actionsheet>
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
      <mt-popup v-model="popupVisible" position="bottom">
        <mt-picker :slots="slots" itemHeight="30" :show-toolbar="true" @change="onValuesChange(picker,values)">
          <span class="sure" @click="handleSexConfirm">确定</span>
          <span class="cansel" @click="canselSexConfirm">取消</span>
        </mt-picker>
      </mt-popup>
    </main>
  </div>
</template>

<script>
  export default {
    name: "informationPage",
    data() {
      return {
        name: '',
        //头像部分
        photo: [{
          name: '拍照',
          method: this.getCamera
        }, {
          name: '从相册中选择',
          method: this.getLibrary
        }],
        sheetVisible: false,
        //生日部分
        pickerVisible: null,
        value: null,
        startDate: new Date('1960'),
        endDate: new Date(),
        //性别部分
        popupVisible: false,
        slots: [{values: ['男', '女']}]
      }
    },
    methods: {
      //头像部分
      actionSheet: function () {
        this.sheetVisible = true;
      },
      getCamera: function () {
        console.log("打开照相机")
      },
      getLibrary: function () {
      },
      //生日部分
      openPicker() {
        this.$refs.picker.open();
      },
      handleConfirm(value) {
        this.pickerVisible = value.toString();
      },
      //性别部分
      sexPicker() {
        this.popupVisible = true;
      },
      handleSexConfirm() {
      },
      canselSexConfirm() {
        this.popupVisible = false;
      },
      onValuesChange(picker, values) {
        this.value = values[0];
        console.log(this.value)
      },
      //点击效果
      changeColor(event) {
        var t = event.currentTarget;
        t.style.backgroundColor = "#ebebeb";
      },
      recoverColor(event) {
        var t = event.currentTarget;
        t.style.backgroundColor = "#fff";
      },
      //跳转
      routeraccountPage() {
        this.$router.push({
          path: '/accountPage'
        })
      },
      routernewAddress() {
        this.$router.push({
          path: '/newAddress'
        })
      }
    }
  }
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

  main div:nth-of-type(1) img {
    position: absolute;
    right: 70px;
    top: 15px;
  }

  main div:nth-of-type(1) .goto {
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
    position: absolute;
    right: 30px;
    top: 195px;
  }

  main div:nth-of-type(2) p {
    font-size: 20px;
    color: #8e8e8e;
    position: absolute;
    top: 206px;
    left: 569px;
    margin: 0;
    line-height: 0px;
  }

  main div:nth-of-type(3) {
    width: 750px;
    height: 98px;
    background-color: #fff;
    border-bottom: 1px #dbdbdb solid;
    line-height: 98px;
  }

  main div:nth-of-type(3) img {
    position: absolute;
    right: 30px;
    top: 295px;
  }

  main div:nth-of-type(4) {
    width: 750px;
    height: 98px;
    background-color: #fff;
    border-bottom: 1px #dbdbdb solid;
    line-height: 98px;
  }

  main div:nth-of-type(4) img {
    position: absolute;
    right: 30px;
    top: 392px;
  }

  main div:nth-of-type(5) {
    width: 750px;
    height: 98px;
    background-color: #fff;
    border-bottom: 1px #dbdbdb solid;
    line-height: 98px;
  }

  main div:nth-of-type(5) img {
    position: absolute;
    right: 30px;
    top: 392px;
  }

  main div:nth-of-type(6), main div:nth-of-type(7), main div:nth-of-type(8) {
    width: 750px;
    cursor: default;
  }

  main div span {
    padding-left: 33px;
    font-size: 24px;
    cursor: default;
  }

  main .sure {
    height: 50px;
    width: 100px;
    background-color: #fff;
    font-size: 16px;
    color: #26a2ff;
    position: relative;
    top: -61px;
    left: 520px;
  }

  main .cansel {
    height: 50px;
    width: 100px;
    background-color: #fff;
    font-size: 16px;
    color: #26a2ff;
    position: relative;
    top: -61px;
    left: 60px;
  }
</style>
