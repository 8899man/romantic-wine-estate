<template>
  <div class="main">
    <header>
      <span class="title">订单确认</span>
      <img src="../../assets/icon2.png" alt="#" @click="routerBack">
    </header>
    <section class="order-confirm">
      <ul class="order-message clearfix" @click="chooseAdd">
        <li id="name"><img src="./img/people.jpg" />&nbsp<span v-model="data1.contact">{{data1.contact}}</span></li>
        <li id="phone"><img src="./img/phone.jpg"/>&nbsp<span v-model="data1.mobile">{{data1.mobile}}</span></li>
        <li id="address"><span v-model="data1.address">{{data1.address}}</span></li>
      </ul>
      <ul class="good clearfix" v-for="item in data2">
        <li id="wine"><img :src="item.smallPic" alt=""></li>
        <li id="numchange">共<span>{{item.num}}</span>件</li>
      </ul>
      <ul class="clearfix express">
        <li class="grayword">配送方式</li>
        <li class="blackword">快递配送</li>
      </ul>
      <ul class="good-price clearfix">
        <li class="grayword">商品总额</li>
        <li class="redword">&yen&nbsp<span>{{data1.allPrice}}</span></li>
      </ul>
      <ul class="express-price clearfix">
        <li  class="grayword">运费 </li>
        <li class="redword">&yen&nbsp<span>0.00</span></li>
      </ul>
      <ul class="pay-way clearfix">
        <li class="grayword">支付方式</li>
        <li class="blackword">在线支付</li>
      </ul>
    </section>
    <section class="submit">
      <input @click="orderfinish" type="button" value="提交订单">
    </section>
  </div>
</template>

<script>
  import orderheader from '../orderheader/orderheader.vue'
  export default{
    components:{orderheader},
    data() {
      return {
        data: [],
        data1: [],
        theme:"订单确认"
      }
    },
    methods: {
      chooseAdd(){
        this.$router.push({
          path:'/addList'
        })
      },
      routerBack(){
        this.$router.go(-1)
      },
      orderfinish: function () {
        var a=this.data.orderNum;
        this.$router.push({
          path: '/orderFinish',
        })
      },
      ordersure(){
        var _this = this;
        this.$http.get("/api/selectaddressmessage.htm",{
          params:{
          }
        }).then(function (res) {
          var name = _this.$route.query.name;
          var phone = _this.$route.query.phone;
          var address = _this.$route.query.address;
          console.log(res.data.data);
          _this.data1 = res.data.data;
          _this.data2 = res.data.data.goodsList;
          if(name){
            _this.data1.contact = name;
            _this.data1.mobile = phone;
            _this.data1.address = address;
          }

        }).catch(function (error) {
          console.log(error);
        })
      }
    },
    created () {
      this.ordersure()
    }
  }
</script>

<style>
  @import url(../../style/common1.css);
  .main{margin: 0 auto;}
  header{
    width: 100%;
    height: 128px;
    background-color: #d22131;
    position: relative;
  }
  header .title{
    color: #fff;
    font-size: 40px;
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
  .order-confirm{
    background: #ebebeb;
    width: 750px;
    padding:81px 0 81px;
    margin: 0 auto;
  }
 .express,.express-price{margin-bottom: 81px;background: #fff}
  .order-message{
    background: #fffae6;
    height: 148px;
    text-align: left;
    position: relative;
    margin-bottom: 71px;
  }
  .order-message span{
    color: #878787;
  }
  .good{
    height:123px;
    background: #fff;
    margin-bottom: 10px;
  }
  #name {
    float: left;
    margin: 25px 0 0 23px;
    font-size: 25px;
    position: absolute;
    color: #878787;
  }
  #phone{
    margin-top: 25px;
    float: left;
    font-size: 25px;
    position: absolute;
    margin-left: 150px;

  }
  #name img,#phone img{
    width: 22px;
    height: 27px;
  }
  #address{
    margin: 74px 0 0 30px;
    font-size: 32px;
  }
  #wine{
    width: 85px;
    height: 85px;
    border: 1px solid #eaece9;
    margin: 18px 0 0 20px;
    float: left;
  }
  #wine img{
    width: 65px;
    height: 85px;
  }
  #numchange{
    font-size: 26px;
    color: #6e6e6e;
    margin:50px 74px 0 0;
    float: right;
  }
  .express{
    height: 92px;
  }
  .good-price{
    height: 92px;
    margin-bottom: 2px;
    background: #fff;
  }
  .express-price{
    height: 95px;
  }
  .pay-way{
    height: 92px;
    background: #fff;
  }
  .submit{
    height: 86px;
    width: 750px;
    margin: 0 auto;
  }
  .grayword{
    font-size: 30px;
    color: #878787;
    margin:31px 0 0 18px;
    float: left;}
  .blackword {
    font-size: 30px;
    color: #1e1e1e;
    float: right;
    margin: 31px 68px 0 0;
  }
  .redword {
    color: #e24e4c;
    float: right;
    font-size: 27px;
    margin: 34px 100px 0 0;
  }
  input{
    background: #e64348;
    width: 240px;
    height: 86px;
    float: right;
    color: #e8ffe2;
    font-size: 30px;
    text-decoration: underline;
  }

</style>

