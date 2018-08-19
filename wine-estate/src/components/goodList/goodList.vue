<template>
  <div class="gdlist">
    <div class="ppp"></div>
    <!--顶部搜索框及按钮-->
    <div class="gdlssk">
      <div class="gdlfh">
        <img src="./img/icon.png" v-on:click="retur()" alt="返回上一页"><!--左边返回按钮-->
      </div>
      <div class="gdlzy">
        <img src="./img/lianj.png" v-on:click="push()" alt="返回主页"><!--右边回到主页按钮-->
      </div>
      <div class="gdltub">
        <img src="./img/sstb.png" alt="搜索图标"/><!--搜索框内的搜索图标-->
      </div>
        <input type="text" v-on:click="push1()" placeholder="搜索商品"><!--搜索图标-->
    </div>
    <!--排列方式nav-->
    <div class="gdlxxk"><!--三种排列方式-->
      <ul id="list">
        <li v-on:click="mo()">默认</li>
        <li v-on:click="shop()">销量</li>
        <li v-on:click="price()">价格</li>
      </ul>
    </div>
    <!--商品列表部分-->
    <ul>
        <li v-for="item in data"  class="shop" :key="item.id" v-on:click="todea($event)">
          <img :src="item.smallPic" alt="图片不见了">
            <p>{{item.goodsTitle}}</p>
            <p>销量 {{item.sellNum}}</p>
            <p>&yen {{item.goodsPrice}}</p>
            <p>{{item.goodsId}}</p>
        </li>
    </ul>
    <div v-on:click="load()" class="load" v-show="value">
      加载更多
    </div>
    <ul>
      <li v-for="item in data1"  class="shop" :key="item.id" v-on:click="todea($event)">
        <img :src="item.smallPic" alt="图片不见了">
        <p>{{item.goodsTitle}}</p>
        <p>销量 {{item.sellNum}}</p>
        <p>&yen {{item.goodsPrice}}</p>
        <p id="iid">{{item.goodsId}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [],
      data1: [],
      value: true
    }
  },
  created () {
    // 接受搜索框内的内容
    let search1 = this.$route.query.search
    this.$http.get('/api/keysearch.htm?', {
      params: {
        keyWords: search1,
        move: 1
      }
    }).then((res) => {
      this.data = res.data.data
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })
    // 获取点击原产地传来的参数
    let name = this.$route.query.placeOfArea
    this.$http.get('/api/placeOfArea.htm?orderMethod=nano&start=0', {
      params: {
        placeOfArea: name
      }
    }).then((res) => {
      this.data = res.data.data
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })
    // 获取点击口感传来的参数
    let name2 = this.$route.query.taste
    this.$http.get('/api/taste.htm?orderMethod=nano&start=0', {
      params: {
        taste: name2
      }
    }).then((res) => {
      this.data = res.data.data
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })
    // 获取点击类型传来的参数
    let name3 = this.$route.query.category
    this.$http.get('/api/category.htm?orderMethod=nano&start=0', {
      params: {
        category: name3
      }
    }).then((res) => {
      this.data = res.data.data
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })
    // 获取点击价格传来的参数
    let name4 = this.$route.query.goodsPrice
    this.$http.get('/api/goodsPrice.htm?&orderMethod=nano&start=0', {
      params: {
        goodsPrice: name4
      }
    }).then((res) => {
      this.data = res.data.data
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    // 获取商品id
    todea (event) {
      let goodsId = event.currentTarget.lastChild.innerHTML;
      this.$router.push({
        path: '/goodDetail',
        query: {goodsId: goodsId}
      })
    },
    retur () {
      this.$router.go(-1)
    },
    push () {
      this.$router.push({
        path: '/goodMain'
      })
    },
    push1 () {
      this.$router.push({
        path: '/goodSearch'
      })
    },
    shop () {
      // 获取搜索框传来的数据按销量排序
      let search1 = this.$route.query.search
      this.$http.get('/api/keysearchBysellNum.htm?', {
        params: {
          keyWords: search1,
          move: 1
        }
      }).then((res) => {
        this.data = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
      // 获取点击原产地传来的数据按销量排序
      let name = this.$route.query.placeOfArea
      this.$http.get('/api/placeOfArea.htm?orderMethod=orderBySellNum&start=0', {
        params: {
          placeOfArea: name
        }
      }).then(res => {
        this.data = res.data.data
      }).catch(function (error) {
        console.log(error)
      })
      // 获取点击口感传来的数据按销量排序
      let name2 = this.$route.query.taste
      this.$http.get('/api/taste.htm?orderMethod=orderBySellNum&start=0', {
        params: {
          taste: name2
        }
      }).then((res) => {
        this.data = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
      // 获取点击类型传来的数据按销量排序
      let name3 = this.$route.query.category
      this.$http.get('/api/category.htm?&orderMethod=orderBySellNum&start=0', {
        params: {
          category: name3
        }
      }).then((res) => {
        this.data = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
      // 获取点击价格传来的数据按销量排序
      let name4 = this.$route.query.goodsPrice
      this.$http.get('/api/goodsPrice.htm?&orderMethod=orderBySellNum&start=0', {
        params: {
          goodsPrice: name4
        }
      }).then((res) => {
        this.data = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    price () {
      let search1 = this.$route.query.search
      this.$http.get('/api/keysearchByPrice.htm?', {
        params: {
          keyWords: search1,
          move: 1
        }
      }).then((res) => {
        this.data = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
      // 获取点击原产地传来的数据按价格排序
      let name = this.$route.query.placeOfArea
      this.$http.get('/api/placeOfArea.htm?orderMethod=orderByPrice&start=0', {
        params: {
          placeOfArea: name
        }
      }).then(res => {
        this.data = res.data.data
      }).catch(function (error) {
        console.log(error)
      })
      // 获取点击口感传来的数据按价格排序
      let name2 = this.$route.query.taste
      this.$http.get('/api/taste.htm?orderMethod=orderByPrice&start=0', {
        params: {
          taste: name2
        }
      }).then((res) => {
        this.data = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
      // 获取点击类别传来的数据按价格排序
      let name3 = this.$route.query.category
      this.$http.get('/api/category.htm?&orderMethod=orderByPrice&start=0', {
        params: {
          category: name3
        }
      }).then((res) => {
        this.data = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
      // 获取点击价格传来的数据按价格排序
      let name4 = this.$route.query.goodsPrice
      this.$http.get('/api/goodsPrice.htm?&orderMethod=orderByPrice&start=0', {
        params: {
          goodsPrice: name4
        }
      }).then((res) => {
        this.data = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    mo () {
      let search1 = this.$route.query.search
      this.$http.get('/api/keysearch.htm?', {
        params: {
          keyWords: search1,
          move: 1
        }
      }).then((res) => {
        this.data = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
      let name = this.$route.query.placeOfArea
      this.$http.get('/api/placeOfArea.htm?&orderMethod=default&start=0', {
        params: {
          placeOfArea: name
        }
      }).then(res => {
        this.data = res.data.data
      }).catch(function (error) {
        console.log(error)
      })
      let name2 = this.$route.query.taste
      this.$http.get('/api/taste.htm?orderMethod=default&start=0', {
        params: {
          taste: name2
        }
      }).then((res) => {
        this.data = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
      let name3 = this.$route.query.category
      this.$http.get('/api/category.htm?&orderMethod=default&start=0', {
        params: {
          category: name3
        }
      }).then((res) => {
        this.data = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
      let name4 = this.$route.query.goodsPrice
      this.$http.get('/api/goodsPrice.htm?&orderMethod=default&start=0', {
        params: {
          goodsPrice: name4
        }
      }).then((res) => {
        this.data = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    // 再次获取数据
    load () {
      this.value = !this.value
      let name = this.$route.query.placeOfArea
      this.$http.get('/api/placeOfArea.htm?&orderMethod=default&start=5', {
        params: {
          placeOfArea: name
        }
      }).then((res) => {
        this.data1 = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
      let name2 = this.$route.query.taste
      this.$http.get('/api/taste.htm?orderMethod=default&start=0', {
        params: {
          taste: name2
        }
      }).then((res) => {
        this.data1 = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
      let name3 = this.$route.query.category
      this.$http.get('/api/category.htm?&orderMethod=default&start=0', {
        params: {
          category: name3
        }
      }).then((res) => {
        this.data1 = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
      let name4 = this.$route.query.goodsPrice
      this.$http.get('/api/goodsPrice.htm?&orderMethod=default&start=0', {
        params: {
          goodsPrice: name4
        }
      }).then((res) => {
        this.data1 = res.data.data
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  a{text-decoration:none;}
  .gdlist{width:750px;
    margin:0 auto;
    padding:0px;}
  .ppp{width:750px;
    height:40px;
    background-color:#d02131;
    margin:0px;
    padding:0px;}
  .gdlssk{height:88px;
    width:750px;
    background-color:#d02131;
    position:relative;}
  .gdlfh{
    margin:0px;
    padding:0px;
    width:30px;
    height:52px;
    position:absolute;
    left:60px;
    top:10px;
  }
  .gdlfh img{
    width:30px;
    height:50px;
  }
  .gdlzy{
    margin:0px;
    padding:0px;
    width:30px;
    height:52px;
    position:absolute;
    right:60px;
    top:30px;
  }
  .gdlzy img{
    width:87px;
    height:50px;
  }
  .gdltub{height:58px;
    width:44px;
    position:absolute;
    top:6px;
    left:145px;
    background-color:#DC908C;
    margin:0px;
    padding:0px;
  }
  .gdltub img{
    width:44px;
    height:60px;
  }
  input{background-color:#DC908C;
    width:416px;
    height:55px;
    margin:0px;
    padding-left:30px;
    position:absolute;
    left:189px;
    top:6px;
    border:none;
    color:#F8E8E7;
    font-size: 24px;}
  ul,li{list-style:none;
    padding:0px;
    margin:0px;}
  .gdlxxk li{width:250px;
    height:88px;
    line-height:88px;
    float:left;
    color:#666;
    border-radius:15px;
    -moz-transition:background-color 1s;
    -moz-transition-timing-function:ease-in-out;
    }
  .gdlxxk{
    width:750px;
    height:88px;
    font-size:28px;
    background-color:#EBEBEB;
    overflow:hidden;
  }
  .gdlxxk li:hover{
    background-color:#666;
    color:#9F9F9F;
  }
  .gdlxxk li:active{
   color:#fff;
  }
  .gdlljz li{
    width:750px;
    height:222px;
    padding:0px;
  }
  .shop{
    width:750px;
    height:200px;
    margin:0px;
    padding-top:10px;
    border-top:#999 1px solid;
    border-bottom:#999 1px solid;
  }
  .shop img{
    height:180px;
    width:120px;
    margin-right:20px;
    float:left;
    font-size:20px;
  }
 p:nth-child(2){
    width:720px;
    height:104px;
    margin:0px;
    padding-top:10px;
    color:#333;
    text-align:left;
    font-size:28px;
  }
  p:nth-child(3){
    width:750px;
    height:36px;
    margin:0px;
    padding:0px;
    color:#9B9B9B;
    text-align:left;
    font-size:24px;
  }
  p:nth-child(4){
    width:750px;
    height:80px;
    margin-top:10px;
    color:#f00;
    text-align:left;
    font-size:28px;
  }
  p:nth-child(5){
     display:none;
   }
  .load{
    position:fixed;
    bottom:10px;
    right:300px;
    width:150px;
    height:30px;
    line-height:30px;
    font-size:20px;
    border-radius:8px;
    background-color:#999;
  }
</style>
