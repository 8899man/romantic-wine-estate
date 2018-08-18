<template>
    <div class="add">
        <header>
            <span class="title">{{title}}</span>
            <img src="./img/icon13.png" alt="#" @click="rel">
        </header>
        <div class="top"></div>
        <mt-field label="收件人" placeholder="请输入收件人姓名" :value="data.contact" v-model="data.contact"></mt-field>
        <div class="check-add">
            <span>取货地区</span>
            <input type="text" placeholder="请选择收货地区" @focus="address" ref="tex"
            :value="data.province+' '+data.city+' '+data.town">
        </div>
        <mt-field label="详细地址" placeholder="请填写详细地址" :value="data.address" v-model="data.address"></mt-field>
        <mt-field label="手机号码" placeholder="请填写手机号码" :value="data.mobile" v-model="data.mobile"></mt-field>
        <button class="used" @click="tip">保存并使用</button>
        <div class="shadow" ref="shadow"></div>
        <div class="check" ref="checked">
            <span>请选择地址</span>
            <mt-picker :slots="slots" ref="choose" @change="chooseAdd"></mt-picker>
            <button class="yes" @click="affirm">确认</button>
            <button class="no" @click="cut">取消</button>
        </div>
    </div>
</template>

<script>
  var addId = null;
  import axios from 'axios'
export default {
    data (){
      return {
        title: '收货地址',
        slots: [{
          flex: 1,
          values: ['北京市', '上海市', '广东省', '天津市', '重庆市', '湖北省','辽宁省','江苏省',
            '四川省','陕西省','河北省','山西省','河南省','吉林省','黑龙江省','内蒙古自治区','山东省',
            '安徽省','浙江省','福建省','湖南省','广西壮族自治区','江西省','贵州省','云南省','西藏自治区','海南省',
            '甘肃省','宁夏回族自治区','青海省','新疆维吾尔自治区','香港特别行政区','澳门特别行政区','台湾省'],
          className: 'slot1',
          textAlign: 'left'
        },{
          divider: true,
          content: '-',
          className: 'slot2'
        },{
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'middle'
        },{
          divider: true,
          content: '-',
          className: 'slot4'
        },{
          flex: 1,
          values: [],
          className: 'slot5',
          textAlign: 'right'
        }],
        data:{}
      }
    },
    methods : {
      address(){
          this.$refs.shadow.style.display = 'block';
          this.$refs.checked.style.display = 'block';
      },
      cut(){
          this.$refs.shadow.style.display = 'none';
          this.$refs.checked.style.display = 'none';
      },
      affirm(){
          var oDiv = this.$refs.choose;
          var v1 = oDiv.getSlotValue(0);
          var v2 = oDiv.getSlotValue(1);
          var v3 = oDiv.getSlotValue(2);
          this.$refs.tex.value = v1 + "  " + v2 + "  " + v3;
          this.$refs.shadow.style.display = 'none';
          this.$refs.checked.style.display = 'none';
      },
      tip(){
          var _this = this;
          var oDiv = this.$refs.choose;
          var v1 = oDiv.getSlotValue(0);
          var v2 = oDiv.getSlotValue(1);
          var v3 = oDiv.getSlotValue(2);
          if(addId){
            axios.get("/api/updateOneAddress.htm",{
              params:{
                addressId:addId,
                userId:"000001",
                contact:_this.data.contact,
                mobile:_this.data.mobile,
                province:_this.data.province,
                city:_this.data.city,
                town:_this.data.town,
                address:_this.data.address
              }
            }).then((res) => {
              console.log(res.data);
            }).catch((error) => {
              console.log(error);
            })
          }else{
            axios.get("/api/addOneAddress.htm",{
              params:{
                userId:"000001",
                contact:_this.data.contact,
                mobile:_this.data.mobile,
                province:v1,
                city:v2,
                town:v3,
                address:_this.data.address
              }
            }).then((res) => {
              console.log(res.data);
            }).catch((error) => {
              console.log(error);
            })
          }
          this.$toast({
            message: '操作成功',
            iconClass: 'icon icon-success'
          })
      },
      rel(){
          this.$router.go(-1)
      },
      oldAdd(){
        this.$http.get("/api/queryAddressByAddressId.htm",{
          params:{
            addressId:addId
          }
        }).then((res) => {
          this.data = res.data.data;
        }).catch((error) => {
          console.log(error);
        })
      },
      chooseAdd(){
        var oDiv = this.$refs.choose;
        var v1 = oDiv.getSlotValue(0);
        this.$http.get("/api/queryProvinceAndCity.htm",{
          params:{
            name:v1,
            queryStatus:1
          }
        }).then((res) => {
          this.slots[2].values = res.data.data;
        }).catch((error) => {
          console.log(error);
        })
        var v2 = oDiv.getSlotValue(1);
        this.$http.get("/api/queryProvinceAndCity.htm",{
          params:{
            name:v2,
            queryStatus:2
          }
        }).then((res) => {
          this.slots[4].values = res.data.data;
        }).catch((error) => {
          console.log(error);
        })
      }
    },
    created:function() {
      addId = this.$route.query.ids + "";
      if(addId){
        this.oldAdd();
      }
    }
}
</script>

<style>
  @import url(../../style/common1.css);
  .add{
    width: 750px;
    height: 1334px;
    margin: 0 auto;
    position: relative;
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
  .top{
    width: 100%;
    height: 24px;
    background-color: #f2f2f2;
  }
  .mint-field {
    height: 82px;
    font-size: 20px;
  }
  .mint-cell-text{
    font-family: '新宋体';
    font-size: 30px;
    font-weight: bold;
    text-align: left;
    color: #666;
  }
  .mint-field-core{
    font-family: '新宋体';
    font-size: 26px;
    font-weight: bold;
    color: #848484;
  }
  .mint-field .mint-cell-title{
    width: 170px;
    padding-right: 30px;
  }
  .used{
    width: 714px;
    height: 80px;
    background-color: #e94343;
    font-family: '新宋体';
    font-weight: bold;
    font-size: 30px;
    color: #fff;
  }
  .check-add{
    width: 100%;
    height: 82px;
    border-top: 1px #eee solid;
    position: relative;
  }
  .check-add span{
    font-family: 新宋体;
    font-weight: bold;
    font-size: 30px;
    color: #666;
    position: absolute;
    top: 30px;
    left: 20px;
  }
  .check-add input{
    width: 480px;
    height: 50px;
    font-family: 新宋体;
    color: #848484;
    font-weight: bold;
    font-size: 26px;
    position: relative;
    top: 15px;
    left: 45px;
    border: 0px;
  }
  .picker-slot{
    font-family: 新宋体;
    font-size: 26px;
    font-weight: bold;
    color: #848484;
  }
  .picker-slot-wrapper{
    text-align: center;
  }
  .check{
    width: 720px;
    height: 300px;
    margin: 0 auto;
    margin-left: 15px;
    position: fixed;
    bottom: 160px;
    background-color: #fff;
    display: none;
  }
  .check span{
    font-family: 新宋体;
    font-size: 30px;
    font-weight: bold;
    color: #666;
    position: absolute;
    top: 15px;
    left: 20px;
  }
  .check .picker{
    width: 100%;
    position: absolute;
    top: 50px;
  }
  .check .yes{
    width: 120px;
    height: 50px;
    font-family: 新宋体;
    font-size: 26px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 3px;
    background-color: #e94343;
    position: absolute;
    bottom: 5px;
    right: 140px;
  }
  .check .no{
    width: 120px;
    height: 50px;
    font-family: 新宋体;
    font-size: 26px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 3px;
    background-color: #e94343;
    position: absolute;
    bottom: 5px;
    right: 10px;
  }
  .shadow{
    width: 750px;
    height: 1334px;
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    top: 0px;
    left: 0px;
    display: none;
  }
</style>
