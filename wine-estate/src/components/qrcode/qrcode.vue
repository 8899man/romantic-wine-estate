<template>
    <div class="main">
      <header>
        <span class="title">扫码支付</span>
        <img src="../../assets/icon2.png" alt="#" @click="routerBack">
      </header>
      <section class="pay-back">
      <div class="content">
        <div id="code" >
          <div><img id="a" src="" alt=""> </div>
        </div>
      </div>
      </section>
    </div>
</template>

<script>
  var ordernum=null;
  import orderheader from '../orderheader/orderheader.vue'
  export default {
    components: {orderheader},
    data() {
      return {
        data:[],
        theme:"扫码付款"
      }
    },
    methods:{
      routerBack(){
        this.$router.go(-1)
      },
      getcode() {
        var _this=this;
        this.$http.get("/api/order/apply.htm", {
          params: {
            orderNum:ordernum
          }
              }).then(function (res) {
                console.log(res.data);
              var a=document.getElementById("a");
              if(res.data.data==null){
                a.alt=res.data.msg;
              }
              else{
                a.src=res.data.data.url;
              }
              }).catch(function (error) {
                console.log(error);
              })
            }

    },
    created : function () {
      ordernum=this.$route.query.num;
      this.getcode();
      console.log(this.$route.query.ordernum)

    }
  }
</script>

<style scoped>
  .main{
    width: 750px;
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
 .pay-back{
  background: #bb3437;
  padding: 10px 30px 155px 30px;
}
  .content{
    background: url("./img/payforback.jpg" ) no-repeat;
    background-size:100% ;
    width:688px;
    height: 907px;
    padding-top: 300px;
  }
  #code{
    width: 300px;
    height: 300px;
    border: 2px #bb3437 solid;
    margin: 0 auto;
    padding-top: 30px;
  }
  #code img {
    width: 256px;
    height: 256px;
    background: white;
    margin: 0 auto;
  }

</style>
