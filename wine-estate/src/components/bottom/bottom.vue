<template>
  <div class="bottom">
    <div class="first" @click="re1">
      <img src="./img/first_0.jpg" alt="#" class="first_0">
    </div>
    <div class="nav" @click="re2">
      <img src="./img/nav_0.jpg" alt="#" class="nav_0">
    </div>
    <div class="shop" @click="re3">
      <img src="./img/shop_0.jpg" alt="#" class="shop_0">
    </div>
    <div class="my" @click="re4">
      <img src="./img/my_0.jpg" alt="#" class="my_0">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    re1() {
      this.$router.push({
        path: '/goodMain'
      })
    },
    re2() {
      this.$router.push({
        path: '/goodClass'
      })
    },
    re3() {
      let _this = this;
      this.$http.get('/api/status.htm', {
        params: {}
      }).then((res) => {
        console.log(res.data.status)
        if (res.data.status == '0') {
          _this.$router.push({
            path: '/loginPage'
          })
        } else {
          _this.$http.get('/api/isempty.htm', {
            params: {}
          }).then((res) => {
            console.log(res.data.status);
            if (res.data.status == 0) {
              _this.$router.push({
                path: '/shoppingCart'
              })
            } else {
              _this.$router.push({
                path: '/logged'
              })
            }
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    re4() {
      this.$router.push({
        path: '/accountPage'
      })
    }
  }
}
</script>

<style>
  #app{
    position: relative;
  }
  .bottom{
    width: 750px;
    height: 96px;
    margin: 0 auto;
    border-top: 1px #d6d6d6 solid;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .first .first_0{
    width: 73px;
    height: 77px;
    position: absolute;
    top: 10px;
    left: 25px;
  }
  .first img{
    width:73px;
    height:77px;
  }
  .nav .nav_0{
    width: 67px;
    height: 86px;
    position: absolute;
    top: 8px;
    left: 230px;
  }
  .nav img{
    width:67px;
    height:86px;
  }
  .shop .shop_0{
    width: 60px;
    height: 70px;
    position: absolute;
    top: 12px;
    right: 230px;
  }
  .shop img{
    width:60px;
    height:70px;
  }
  .my .my_0 {
    width: 73px;
    height: 80px;
    position: absolute;
    top: 10px;
    right: 25px;
  }
  .my img{
    width:73px;
    height:80px;
  }
</style>
