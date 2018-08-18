<template>
  <div class="main">
    <orderheader theme="订单完成"></orderheader>
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
  export default {
    components: {
      orderheader,
      bottom},
    data() {
      return {
          data:{},
      }
    },
    methods:{
      selectorder() {
        this.$http.get("/api/selectorder.htm", {
          params: {
            orderNum:ordernum
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
      ordernum=this.$route.query.ordernum
    }
  }
</script>
<style scoped>
  @import url(../../style/common1.css);
  .main{margin: 0 auto;}
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
    margin: 18px 31px 0 31px;
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
