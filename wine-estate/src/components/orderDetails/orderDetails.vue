<template>
  <div class="main">
    <orderheader theme="订单详情"></orderheader>
    <section class="order-details">
      <img  id="back" src="./img/wineback.jpg">
      <div class="message" @click="addlist">
        <div  class="people clearfix">
          <div class="name">收货人:&nbsp <span>{{data.receiver}}</span></div>
          <div class="phone"> <span>{{data.receiverMobile}}</span></div>
        </div>
        <div class="position">
          <div class="clearfix"></div>
          <div class="adress">收货地址:&nbsp <span>{{data.receiverAreaName}}</span></div>
        </div>
      </div>
      <div class="good">
        <div class="store clearfix">
          <img src="../../assets/store.jpg"/>&nbsp&nbsp
          <span>{{data.sellerId}}</span>
        </div>
        <div class="goodmsg" v-for="item in data1">
          <img :src="item.smallPic" alt="" id="goodpic">
          <span>{{item.goodsTitle}}</span>
        </div>
      </div>
      <div class="train-price">运费<span>&yen  0</span></div>
      <div class="all-price">实付款 <span>&yen {{data.payment}}</span></div>
      <ul class="order-message">
        <li>订单编号 <span>{{data.orderNum}}</span></li>
        <li>创建时间<span>{{data.createTime}}</span></li>
      </ul>
    </section>

  </div>
</template>

<script>
  import orderheader from '../orderheader/orderheader.vue'
  export default {
    components: {orderheader},
    data() {
      return {
        data:{},
        data1:{}
      }
    },
    methods: {
      toBack() {
        this.$router.go(-1)
      },
      orderpay: function () {
        this.$router.push({
          path: '/orderPay'
        })
      },
     addlist: function () {
        this.$router.push({
          path: '/addList'
        })
      },
     getdetail1(){
        var _this=this;
       this.$http.get("/api/selectorder.htm",{
         params:{
           orderNum:ordernum
         }
       }).then(function (res) {
         console.log(res.data);
         _this.data=res.data.data;

       }).catch(function (error) {
         console.log(error);
       })
     },

      getdetail3() {
        var this1=this;
        this.$http.get("/api/selectaddressmessage.htm", {
          params: {
          }
        }).then(function (res) {
          console.log(res.data);
            this1.data1 = res.data.data;
        }).catch(function (error) {
          console.log(error);
        })
      }
     },
    created (){
      this.getdetail1();
      this.getdetail3();
      ordernum=this.$route.query.ordernum
    }
  }
</script>

<style scoped>
  @import url(../../style/common.css);
  .main{
    position: relative;
  }
  .order-details{
    width: 750px;
    margin: 0 auto;
    background: #f4f4f4;
  }
  #back{
    width:750px ;
    height: 207px;
  }
  .message{
    padding: 23px 24px 60px 30px;
    font-size: 27px;
    text-align: left;
    background: #fff;
    color: #6e6e6e;
  }
  .people img{
    float: left;
  }
  .name{
    margin:0 0 19px 42px;
    float: left;
    color: #535353;
  }
  .adress{
    margin-left:42px;
    color: #535353;
    float: left;

  }
  .phone{
    margin-right:24px;
    float: right;
  }
  .position img,.good img {
    height:37px;
    width:30px;
  }
  .good{
    padding-top: 25px;
    margin-top: 20px ;
    background: #fff;
  }
  .store{
    padding-left: 30px;
    text-align: left;
    font-size: 24px;
    color: #303030;
  }
  .store img{
    float: left;
  }
  .goodmsg{
    padding: 40px;
    text-align: left;
    font-size: 30px;
    margin-bottom: 5px;
  }
  .goodmsg img{
    width: 60px;
    height: 70px;
    float: left;
    margin-right: 30px;
    display: inline-block;
  }
  .train-price,.all-price{
    height: 115px;
    background: #fff;
    padding-left: 26px;
    text-align: left;
    color: #535353;
    font-size:27px;
  }
  .train-price{
    padding-top: 60px;}
  .all-price{
    padding-top: 45px;
  }
  .train-price span,.all-price span,li span{
    float: right;
    margin-right: 40px;
  }
  ul{
    height: 364px;
  }
  ul li{
    font-size: 26px;
    padding-top: 8px;
    color: #7c7c7c;
  }
  li span {
    color:#7c7c7c ;
  }



</style>
