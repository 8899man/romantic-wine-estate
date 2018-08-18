<template>
    <div class="main">
      <orderheader theme="扫码支付"></orderheader>
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
  import orderheader from '../orderheader/orderheader.vue'
  export default {
    components: {orderheader},
    data() {
      return {
        data:[]
      }
    },
    methods:{
      getcode() {
        var _this=this;
        this.$http.get("/api/order/apply.htm", {
          params: {
            payOrderNum: "2018081405382169551"
          }
              }).then(function (res) {
                console.log(res.data);
              var a=document.getElementById("a");
              if(res.data.data===null){
                a.alt=res.data.msg;
              }
              else{
                a.src=res.data.data;
              }
              }).catch(function (error) {
                console.log(error);
              })
            }

    },
    created : function () {
      this.getcode();
    }
  }
</script>

<style scoped>
  .main{
    width: 750px;
    margin: 0 auto;
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
