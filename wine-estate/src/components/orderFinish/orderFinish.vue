<template>
  <div class="main">
    <header>
      <span class="title">订单完成</span>
      <img src="../../assets/icon2.png" alt="#" @click="routerBack">
    </header>
    <section class="order-success">
      <div class="order-message">
        <div>
        <div class="orders" >订单编号&nbsp
          <span id="ordernum">{{data.orderNum}}</span>
        </div>
        <div class="orders" >订单金额&nbsp
          <span id="payment">{{data.payment}}</span>
        </div>
        </div>
        <div class="orders">付款方式&nbsp
          <span>在线支付</span>
        </div>
      </div>
    </section>
    <footer>
      <bottom></bottom>
      <img src="./img/shop_1.jpg"  id="shop_1"/></footer>
  </div>
</template>

<script>
  import orderheader from '../orderheader/orderheader.vue'
  import bottom from '../bottom/bottom.vue'
  var ordernum=null;
  export default {
    components: {
      orderheader,
      bottom},
    data() {
      return {
          data:{},
          theme:"订单完成"
      }
    },
    methods:{
      routerBack(){
        this.$router.go(-1)
      },
      selectorder() {
        this.$http.get("/api/putordermessage.htm", {
          params: {
          }
        }).then((res)=>{
          console.log(res.data);
          this.data= res.data.data;

        }).catch((error) =>{
          console.log(error);
        });
      }
    },
    created : function () {
      this.selectorder();

    }
  }
</script>
<style scoped>
  @import url(../../style/common1.css);
  .main{margin: 0 auto;}
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
  .order-success{
    width: 750px;
    padding-bottom: 891px;
    background: #ebebeb;
    margin: 0 auto;
  }
  .order-message{
    width: 750px;
    padding-top: 6px;
    background: #fff;
    padding-bottom: 28px;
  }
  .orders{
    margin: 10px 31px 0 31px;
    font-size:26px;
    color:#434343;
    text-align: left;
  }
  footer{
    width: 86px;
    position: relative;
  }
  footer img{
    height:86px;
    width:71px;
  }
  #shop_1{
    position: fixed;
    bottom: 0px;
    left: 49.5%;
    margin-left: 80px;
  }
</style>
