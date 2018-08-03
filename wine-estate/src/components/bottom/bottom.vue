<template>
  <div class="bottom">
    <div class="first">
      <img src="../../assets/first_0.jpg" alt="#" class="first_0">
    </div>
    <div class="nav">
      <img src="../../assets/nav_0.jpg" alt="#" class="nav_0">
    </div>
    <div class="shop">
      <img src="../../assets/shop_0.jpg" alt="#" class="shop_0">
    </div>
    <div class="my">
      <img src="../../assets/my_0.jpg" alt="#" class="my_0">
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
    border-top: 1px #d6d6d6 solid;
    background-color: #fff;
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
  .nav .nav_0{
    position: absolute;
    top: 8px;
    left: 230px;
  }
  .shop .shop_0{
    position: absolute;
    top: 12px;
    right: 230px;
  }
  .my .my_0 {
    position: absolute;
    top: 10px;
    right: 25px;
  }
</style>
