<template>
  <div class="main">
    <header>
      <span class="title">我的订单</span>
      <img src="../../assets/icon2.png" alt="#" @click="routerBack">
    </header>
    <div class="nav clearfix">
      <ul>
        <li @click="allorders"> 全部订单 </li>
        <li id="choose"><span>待付款</span></li>
        <li @click="forgoods"> 待收货 </li>
        <li @click="forevaluate"> 待评价 </li>
      </ul>
    </div>
    <div class="no-order">
      <img src="../../assets/unfound.jpg" alt="">
    </div>
    <section class="my-orders">

      <div class="pay-money">
        <ul>
          <li v-for="item in data3" >
            <div class="storemsg clearfix" @click="orderdetail($event)" :id="data1.orderNum">
              <img src="../../assets/store.jpg" height="30" width="30"/>
              <span id="storename">{{data1.sellerId}}</span>
              <span class="state">等待买家付款</span>
            </div>
            <div class="good clearfix" v-for="item1 in data2">
              <div id="good-pic"><img :src="item1.smallPic" alt=""></div>
              <div id="good-name">{{item1.goodsTitle}}</div>
            </div>
            <div class="all-price"><span> &nbsp合计:&yen{{data1.payment}}（含运费&yen0.00）</span></div>
            <div class="forpay">
              <input type="button" value="取消订单" id="no-order" @click="cancelorder($event)">
              <input @click="orderpay($event)" type="button" value="付款" id="pay-m" :class="data1.orderNum">
            </div>
          </li>
        </ul>
      </div>
    </section>

  </div>
</template>
<script>
  import orderheader from '../orderheader/orderheader.vue'
  export default{
    components:{orderheader},
    data() {
      return {
        data:{},
        data1:{},
        data2:[],
        data3:[]
      }
    },
    methods: {
      routerBack(){
        this.$router.go(-1)
      },
      allorders: function () {
        this.$router.push({
          path: '/allOrders'
        })

      },
      forevaluate: function () {
        this.$router.push({
          path: '/forEvaluate'
        })

      },
      forgoods: function () {
        this.$router.push({
          path: '/forGoods'
        })

      },
      obligation: function () {
        this.$router.push({
          path: '/obliGation'
        })

      },
      orderdetail(event){
        var oLi=event.currentTarget;
        this.$router.push({
          path: '/orderDetails',
          query:{ordernum:oLi.id}

        })
      },
      orderpay: function(event){
        var oL=event.currentTarget.className;
        this.$router.push({
          path:'/orderPay',
          query:{ordernum:oL}
        })
      },

      cancelorder(event) {
        var cancel=this.data1.orderNum
        var _this = this;
        this.$http.get("/api/cancalorder.htm", {
          params: {
            orderNum: cancel,
          }
        }).then(function (res) {
        }).catch(function (error) {
          console.log(error);
        })
        var oLi = event.currentTarget.parentNode.parentNode;
        var oUl = oLi.parentNode;
        oUl.removeChild(oLi);
      },
      getordermsg() {
        var this1 = this;
        this.$http.get("/api/orderStatus.htm", {
          params: {
          }
        }).then(function (res) {
          var no=document.getElementsByClassName("no-oeder")
          if(res.data.data==null){
            no.style.display="block";
          }
          else {
            var data3 = [];
            for (var i = 0; i < res.data.data.length; i++) {
              if (res.data.data[i].status == 1) {
                this1.data1 = res.data.data[i];
                this1.data2 = res.data.data[i].goodsList;
                this1.data3 = data3.push(this1.data1);
                console.log(this1.data3)
              }
            }
          }
        }).catch(function (error) {
          console.log(error);
        })
      }
    },
    created(){
      this.getordermsg();
    }
  }
</script>
<style scoped>
  @import url(../../style/common.css);
  .main{
    margin: 0 auto;
  }
  header{
    width: 100%;
    height: 128px;
    background-color: #bb3437;
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
  .nav{
    width: 750px;
    margin: 0 auto;}
  .nav li{
    width:187px;
    height:88px;
    float:left;
    padding: 31px;
    font-size:30px;
    color: #878787;
    text-align: center;
  }
  #choose span{color: #bb3437;}
  .my-orders{
    background: #f4f4f4;
    padding-top: 27px ;
    width: 750px;
    margin:  0 auto;
  }
  .pay-money{
    padding-top: 42px;
    background: #fff;
  }

  .storemsg{
    font-size: 30px;
    margin:0 0 40px 40px ;
  }
  .storemsg img{
    float: left;
    margin-right: 25px;
    height:30px;
    width:30px;
  }
  #storename{
    float: left;

  }
  .state{
    color: #bb3437;
    display: block;
    float: right;
    margin-right: 50px;
  }
  .good{
    background: #f4f4f4;
    padding: 13px 7px 47px 24px;
    margin-bottom: 38px;
  }
  #good-pic{
    float: left;
    margin-right: 30px;
  }
  #good-pic img{
    width:90px;
    height:140px;
  }
  #good-name{
    margin-top: 25px;
    text-align: left;
  }
  .all-price{
    margin-bottom: 35px;
    font-size: 30px;
    margin-left: 180px;
  }
  .forpay{
    border-top: 1px solid #ddd;
    border-bottom: 2px solid #ddd;
    width: 750px;
    height: 121px;
    padding-top: 20px;
    padding-left: 300px;
    margin:  0 auto;
  }
  input{
    height: 75px;
    background: #fff;
    font-size: 30px;
    display: inline-block;

  }
  #no-order{
    width: 170px;
    border-radius: 40%;
    border: 2px solid #bababa;
    margin-right:35px ;
  }
  #pay-m{
    width: 150px;
    border-radius: 40%;
    border: 2px solid #bb3437;
    color:#bb3437;
  }
  .my-orders li{
    margin-bottom: 10px;
  }
  .no-order{
    display: none;
  }
  .no-order img{
    width: 750px;
    height: 1120px;
  }
</style>

