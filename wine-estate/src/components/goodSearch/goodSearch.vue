<template>
  <div class="gdsearch">
    <p></p>
    <div class="searchk">
      <div class="buttonl" v-on:click="retur()"><!--左边返回按钮-->
        返回
      </div>
      <div class="buttonr" v-bind:click="tadd" v-on:click="push()">
        搜索<!--右边搜索按钮-->
      </div>
      <div class="tub">
        <img src="./img/sstb.png" alt="搜索图标"/>
      </div>
      <div class="searchkk">
        <input type="text" placeholder="搜索商品"  id="intext"><!--搜索框-->
      </div>
    </div>
    <ul id="zlih">
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    retur () {
      this.$router.go(-1)
    },
    push () {
      this.$router.push({
        path: '/goodList'
      })
    },
    tadd () {
      const oInput = document.getElementById('intext');
      const oUl = document.getElementById('zlih');
      const oLi = document.createElement('li');
      oLi.innerHTML = oInput.value;
      if (oUl.children[14]) {
        oUl.removeChild(oUl.children[14])
      }
      oUl.children[0] ? oUl.insertBefore(oLi, oUl.children[0]) : oUl.appendChild(oLi)
    }
  }
}
</script>

<style scoped>
.gdsearch{width:750px;
  margin:0 auto;
  padding:0px;
  background-color:#EBEBEB;
  height:1334px;}
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
  width:112px;
  line-height:30px;
  font-size: 30px;
  color:#fff;
  margin:0 auto;
  position: absolute;
  left:0px;
  top:29px;}
.buttonr{height:30px;
  width:72px;
  line-height:30px;
  font-size: 30px;
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
 .tub{height:60px;
   width:44px;
   position:absolute;
   top:16px;
   left:145px;
   background-color:#DE8F8B;
   margin:0px;
   padding:0px;
   }
 .tub img{
   width:44px;
   height:56px;
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
  padding-top:30px;
  margin:0px;
  height:560px;
  text-align:left;
  color:#999;
  font-size:30px;}
</style>
