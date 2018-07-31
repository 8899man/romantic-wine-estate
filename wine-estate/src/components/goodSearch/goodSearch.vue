<template>
  <div class="gdsearch">
    <p>中国移动</p>
    <div class="searchk">
      <div class="buttonl" >
        <a href="#">取消</a>
      </div>
      <div class="buttonr">
        <a href="#">搜索</a>
      </div>
      <div class="tub">
        <img src="../../assets/sstb.png" alt="搜索图标"/>
      </div>
      <div class="searchkk">
        <input type="text" placeholder="搜索商品">
      </div>
    </div>
    <ul>
      <li>搜索历史</li>
      <li>搜索历史</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'goodSearch'
    }
</script>

<style scoped>
.gdsearch{width:750px;
  margin:0 auto;
  padding:0px;
  background-color:#EBEBEB;
  height:1200px;}
p{width:750px;
  height:40px;
  background-color:#d02131;
  margin:0px;
  padding:0px;}
a{color:#fff;
  }
.searchk{height:88px;
  width:750px;
  background-color:#d02131;
  position:relative;}
.buttonl{height:30px;
  width:72px;
  line-height:30px;
  font-size: 28px;
  color:#fff;
  margin:0 auto;
  position: absolute;
  left:40px;
  top:29px;}
.buttonr{height:30px;
  width:72px;
  line-height:30px;
  font-size: 28px;
  color:#fff;
  margin:0 auto;
  position: absolute;
  right:40px;
  top:29px;}
.searchkk{height:88px;
  width:486px;
  background-color: #AA2834;
  margin:0 auto;
  padding:0px;}
 .tub{height:58px;
   width:44px;
   position:absolute;
   top:16px;
   left:145px;
   background-color:#DE8F8B;
   margin:0px;
   padding:0px;
   }
 img{margin:0px;
   padding:0px;
   width:44px;
   height:56px;}
input{background-color:#DE8F8B;
  width:416px;
  height:56px;
  margin:0px;
  position:absolute;
  left:189px;
  top:16px;
  border:none;
  color:#F8E8E7;
  font-size: 24px;}
ul{list-style: none;
  margin:0px;
  padding:0px;}
li{
  width:720px;
  background-color:#EBEBEB;
  margin:0px;
  padding:30px 0px 30px 30px;
  height:28px;
  line-height:28px;
  font-size: 24px;
  color:#333333;
  text-align:left;
  border-bottom:#999 1px solid;
  text-decoration-color:#DADADA;}
</style>
