<template>
    <div class="addlist">
        <header>
            <span class="title">{{title}}</span>
            <div class="last" @click="lastPage">
                <img src="./img/icon13.png" alt="#">
            </div>
            <a href="#" @click="creatAdd">{{newadd}}</a>
        </header>
        <ul class="list">
            <li v-for="item in data" :id="item.addressId">
                <img src="./img/cut.jpg" alt="#" class="cut" @click="deleteAdd($event)">
                <div class="line"></div>
                <span class="name">{{item.contact}}</span>
                <span class="phone">{{item.mobile}}</span>
                <span class="add1">{{item.province}} {{item.city}}  {{item.town}}</span>
                <span class="add2">{{item.address}}</span>
                <img src="./img/creat.jpg" alt="#" class="creat" @click="creatAdd($event)">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
      return {
        title: '收货地址',
        newadd: '新增',
        name: '杨梦雪',
        data:[]
      }
    },
    methods: {
      deleteAdd(event){
          var oLi = event.currentTarget.parentNode;
          var cutId = oLi.id;
          oLi.parentNode.removeChild(oLi);
          this.$http.get("/api/deleteOneAddress.htm",{
            params:{
              addressId:cutId
            }
          }).then((res) => {
            console.log(res.data);
          }).catch((error) => {
            console.log(error);
          })
      },
      lastPage(){
          this.$router.go(-1)
      },
      creatAdd(event){
        var oLi = event.currentTarget.parentNode;
        var addId = oLi.id;
        this.$router.push({
          path: '/newAddress',
          query:{ids:addId}
        })
      },
      allAdd(){
        this.$http.get("/api/queryAllAddress.htm?userId=000001",{
          params:{}
        }).then((res) => {
          this.data = res.data.data;
        }).catch((error) => {
          console.log(error);
        })
      }
    },
    created:function() {
      this.allAdd();
    }
}
</script>

<style>
  @import url(../../style/common1.css);
  .addlist{
    width: 750px;
    height: 1334px;
    margin: 0 auto;
  }
  header{
    width: 100%;
    height: 128px;
    background-color: #d52131;
    position: relative;
  }
  header .title{
    color: #fff;
    font-size: 40px;
    font-family: '宋体';
    font-weight: bold;
    position: absolute;
    left: 50%;
    margin-left: -81px;
    top: 80px;
  }
  header img{
    width: 30px;
    height: 52px;
    position: absolute;
    top: 59px;
    left: 26px;
  }
  header a{
    color: #fff;
    font-family: '宋体';
    font-weight: bold;
    font-size: 36px;
    position: absolute;
    top: 83px;
    right: 31px;
  }
  .list{
    width: 100%;
    height: 1206px;
    background-color: #f2f2f2;
    padding-top: 20px;
  }
  .list li{
    width: 100%;
    height: 230px;
    margin-bottom: 10px;
    background-color: #fff;
    position: relative;
  }
  .list li .cut{
    width: 60px;
    height: 60px;
    position: absolute;
    top: 0px;
    right: 5px;
    opacity: 0.7;
  }
  .list li .line{
    width: 100%;
    height: 1px;
    background: #ccc;
    position: absolute;
    top: 60px;
  }
  .list li .name{
    font-family: 华文宋体;
    font-weight: bold;
    font-size: 32px;
    color: #666;
    position: absolute;
    top: 80px;
    left: 10px;
  }
  .list li .phone{
    font-family: 华文宋体;
    font-size: 26px;
    color: #666;
    position: absolute;
    top: 85px;
    left: 120px;
  }
  .list li .add1{
    font-family: 新宋体;
    font-size: 26px;
    font-weight: bold;
    color: #666;
    position: absolute;
    top: 130px;
    left: 10px;
  }
  .list li .add2{
    font-family: 新宋体;
    font-size: 26px;
    font-weight: bold;
    color: #666;
    position: absolute;
    top: 180px;
    left: 10px;
  }
  .list li .creat{
    width: 70px;
    height: 76px;
    position: absolute;
    top: 100px;
    right: 10px;
  }
</style>
