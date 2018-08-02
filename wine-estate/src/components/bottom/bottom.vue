<template>
  <div class="bottom">
    <div class="first" @click="cut1($event)">
      <img src="../../assets/first_0.jpg" alt="#" class="first_0">
      <img src="../../assets/first_1.jpg" alt="#" class="first_1">
    </div>
    <div class="nav" @click="cut2($event)">
      <img src="../../assets/nav_0.jpg" alt="#" class="nav_0">
      <img src="../../assets/nav_1.jpg" alt="#" class="nav_1">
    </div>
    <div class="shop" @click="cut3($event)">
      <img src="../../assets/shop_0.jpg" alt="#" class="shop_0">
      <img src="../../assets/shop_1.jpg" alt="#" class="shop_1">
    </div>
    <div class="my" @click="cut4($event)">
      <img src="../../assets/my_0.jpg" alt="#" class="my_0">
      <img src="../../assets/my_1.jpg" alt="#" class="my_1">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return  {}
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
    border: 1px #d6d6d6 solid;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
  .first .first_0{
    position: absolute;
    top: 10px;
    left: 25px;
  }
  .first .first_1{
    position: absolute;
    top: 14px;
    left: 34px;
    display: none;
  }
  .nav .nav_0{
    position: absolute;
    top: 8px;
    left: 230px;
  }
  .nav .nav_1{
    position: absolute;
    top: 13px;
    left: 235px;
    display: none;
  }
  .shop .shop_0{
    position: absolute;
    top: 10px;
    right: 230px;
  }
  .shop .shop_1{
    position: absolute;
    top: 9px;
    right: 230px;
    display: none;
  }
  .my .my_0{
    position: absolute;
    top: 12px;
    right: 25px;
  }
  .my .my_1{
    position: absolute;
    top: 17px;
    right: 31px;
    display: none;
  }
</style>
