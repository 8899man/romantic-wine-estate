<template>
  <div class="gdetail">
    <!--顶部商品详情及其按钮部分-->
        <div v-on:click="retur()">
          <img class="img1"  src="./img/icon.png" alt="返回按钮不见了"/>
        </div>
    <div class="gdetailxq">
      商品详情
    </div>
      <div v-on:click="push()">
        <img class="img2" src="./img/lianj.png"  alt="主页按钮不见了"/>
      </div>
        <div class="gdetaillbt"><!--轮播图-->
              <img :src="goodsImage" alt="图片不见了"/>
        </div>
    <div class="wxin" ><!--具体信息栏-->
       <ul><!--商品名称及价格等-->
         <li class="wname">{{goodsTitle}}</li>
         <li class="wpiece">&yen {{goodsPrice}}</li>
         <li class="wshop">热销 {{sellNum}}</li>
       </ul>
    </div>
    <div class="xxxx"><!--商品具体信息栏-->
      <ul>
        <li>原产地:{{placeOfArea}}</li>
        <li>口感:{{taste}}</li>
        <li>类型:{{category}}</li>
      </ul>
    </div>
    <div class="wcir"><!--评论栏-->
      <div class="spcir">
        商品评论
        <div class="und"><!--跳转到评论的按钮-->
          <img src="./img/und.png" v-on:vlick="push1()" alt="跳转的图标">
        </div>
      </div>
      <div class="hpd"><!--好评度-->
        好评度
      </div>
      <div class="hpdz"><!--接受好评度的数据-->
        <p>{{favourableRate * 100}}%</p>
      </div>
      <div class="hprs"><!--评论人数-->
        评论人数
      </div>
      <div class="hpds"><!--评论人数的数据-->
        {{commentNum}}
      </div>
    </div>
    <div class="db"><!--底部信息栏-->
      <div class="gouwu" v-on:click="add()"><!--加入购物车按钮-->
       加入购物车
      </div>
      <div class="xinxin"><!--原本空心图片-->
        <img src="./img/xinxin.png" alt="心形图不见了"/>
      </div>
      <div class="honxin"><!--点击关注时候变红的心形-->
        <img v-show="exist" id="changec" src="./img/honxin.png" alt="红心">
      </div>
      <div class="guanzhu" v-on:click="change()"><!--点击关注的按钮-->
        关注
      </div>
      <div class="gwctu">
        <p id="number">0</p>
        <img src="./img/gwctu.png"><!--购物车图标-->
      </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      exist: false,
      goodsTitle: '',
      goodsPrice: '',
      sellNum: '',
      placeOfArea: '',
      taste: '',
      category: '',
      favourableRate: '',
      commentNum: ''
    }
  },
  created() {
    // 接受商品id
    let Id = this.$route.query.goodsId
    this.$http.get('/api/queryByGoodsId.htm/?', {
      params: {
        goodsId: Id
      }
    }).then((res) => {
      this.goodsTitle = res.data.data.goodsTitle
      this.goodsPrice = res.data.data.goodsPrice
      this.sellNum = res.data.data.sellNum
      this.placeOfArea = res.data.data.placeOfArea
      this.taste = res.data.data.taste
      this.category = res.data.data.category
      this.favourableRate = res.data.data.favourableRate
      this.commentNum = res.data.data.commentNum
      this.goodsImage = res.data.data.goodsImage
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    retur () {
      this.$router.go(-1)
    },
    push () {
      this.$router.push({
        path: '/goodMain'
      })
    },
    push1 () {
      let goodsId = this.$route.query.goodsId
      this.$router.push({
        path: '/commentlist',
        query: {goodsId: goodsId}
      })
    },
    // 点击加入购物车传参
    add () {
      this.$http.get('/api/status.htm', {
        params: {}
      }).then((res) => {
        if (res.data.status == '0') {
          this.$router.push({
            path: '/loginPage'
          })
        } else {
          const value1 = document.getElementById('number');
          value1.innerHTML = Number(value1.innerHTML) + 1;
          let Id = this.$route.query.goodsId
          this.$http.get('/api/addGoods.htm', {
            params: {
              goodsId: Id,
              goodsNum: value1.innerHTML
            }
          }).then((res) => {
            console.log(res.data)
          }).catch((error) => {
            console.log(error)
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 点击关注传参
    change () {
      this.$http.get('/api/status.htm', {
        params: {}
      }).then((res) => {
        if (res.data.status == '0') {
          this.$router.push({
            path: '/loginPage'
          })
        } else {
          this.exist = !this.exist
          let Id = this.$route.query.goodsId
          this.$http.get('/api/addAttention.htm?', {
            params: {goodsId: Id}
          }).then((res) => {
            console.log(res.data)
          }).catch((error) => {
            console.log(error)
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.gdetail {width:750px;
  height:128px;
  background-color:#cc2030;
  margin:0 auto;
  padding:0px;
  position:relative;
  }
.img1{width:30px;
  height:52px;
  position:absolute;
  left:60px;
  top:60px;}
a{color:#fff;
  text-decoration: none;}
.gdetailxq {margin:0px;
  padding:0px;
  position:absolute;
  width:162px;
  height:40px;
  left:293px;
  top:61px;
  font-size:40px;
  line-height:40px;
  color:#FFFDFD;
}
.img2{width:87px;
  height:50px;
  position:absolute;
  right:10px;
  bottom:5px;}
  .gdetaillbt{
    width:750px;
    height:440px;
    background-color:#fff;
    margin:0px;
    padding:0px;
    position:absolute;
    left:0px;
    top:128px;}
  .gdetaillbt img{
    width:750px;
    height:440px;
  }
  .wxin{background-color: #fff;
    height:273px;
    width:750px;
    position:absolute;
    left:0px;
    top:568px;
    border-top:#DADADA 1px solid;
    border-bottom: #DADADA 1px solid;
    margin:0px;
    padding-top:22px;
    padding-left:16px;}
  ul,li{list-style:none;
    text-align:left;}
  .wname{font-size:35px;
    width:640px;
    height:50px;
    margin-top:-10px;
    }
  .wpiece{
    width:708px;
    height:82px;
    position:absolute;
    left:45px;
    top:160px;
    color:#F9121A;
    font-size:50px;
    margin:0px;
    padding:0px;
  }
  .wshop{width:660px;
    height:102px;
    position:absolute;
    left:42px;
    top:230px;
    font-size:30px;
    color:#B5B5B5;
    margin:0px ;
    padding:0px ;
  }
  .wcir{background-color:#EBEBEB;
    width:750px;
    height:136px;
    position:absolute;
    left:0px;
    top:1080px;
    margin-top:12px;
    }
  .xxxx{
    width:750px;
    height:210px;
    position:absolute;
    left:51px;
    top:875px;
    color:#8A8A8A;
    margin-left:-30px;
    margin-top:-14px;
    }
  .xxxx li{
    width:750px;
    height:70px;
    font-size:30px;
    line-height:70px;
    margin:0px;
  }
  .spcir{width:750px;
    height:60px;
    color:#8A8A8A;
    font-size:30px;
    line-height:60px;
    text-align:left;
    padding-left:42px;
    }
  .und{
    position:absolute;
    right:0px;
    top:-1.5px;
    background-color:#EBEBEB;
  }
  .und img{
    width:55px;
    height:58px;
  }
  .hpd{width:750px;
    height:34px;
    text-align:left;
    line-height:34px;
    font-size:30px;
    color:#8A8A8A;
    padding-left:43px;
  }
  .hpdz p{
    width:72px;
    height:20px;
    position:absolute;
    left:150px;
    top:60px;
    font-size:30px;
    color:#F9121A;
  }
  .hpds{
    width:72px;
    height:24px;
    position:absolute;
    left:430px;
    top:60px;
    font-size:30px;
  }
  .hprs{
  width:300px;
  height:34px;
  position:absolute;
  left:200px;
  top:55px;
  font-size:30px;
    color:#8A8A8A;
  }
  .db{width:750px;
    height:120px;
    background-color:#fff;
    position:absolute;
    left:0px;
    top:1216px;
    overflow:hidden;
    margin:0px;
  }
  .gouwu{
  color:#fff;
  background-color:#E12442;
  width:300px;
  height:120px;
  position:absolute;
  right:0px;
  bottom:0px;
    line-height:120px;
    font-size:40px;
   }
  .gwctu{
    width:100px;
    height:100px;
    position:absolute;
    left:250px;
    bottom:10px;
    margin:0px;
  }
  .gwctu img{
    width:96px;
    height:85px;
  }
 p{
    color:#fff;
    font-size:30px;
    margin:0px;
    position:absolute;
    left:65px;
    top:5px;
    z-index:2;
  }
  .xinxin{
    width:100px;
    height:100px;
    position:absolute;
    left:0px;
    bottom:-28px;
    margin:0px;
  }
  .xinxin img{
  width:79px;
  height:68px;
   }
.honxin{
  width:100px;
  height:100px;
  position:absolute;
  left:0px;
  bottom:-18px;
  margin:0px;
  z-index:2;
}
.honxin img {
  width:75px;
  height:58px;
}
  .guanzhu{width:70px;
    color:#747474;
    font-size:30px;
    height:100px;
    position:absolute;
    background-color:#fff;
    left:100px;
    bottom:-25px;}
</style>
