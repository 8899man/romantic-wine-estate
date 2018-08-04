<template>
  <div id="app">
    <header>
      <span>{{title}}</span>
      <a href="#"><img src="../../assets/back.png" height="43" width="25"/></a>
      <a href="#" id="submit">提交</a>
    </header>
    <main>
      <P>反馈内容</P>
      <textarea placeholder="请填写您的意见，我们会将卖酒做得更好" form="suggestion" name="suggestion"
      v-model.trim="suggestion" @keyup="submit">
      </textarea>
      <p>联系方式</p>
      <form id="suggestion" method="post" action="">
        <input type="text" placeholder="请填写您的QQ或邮箱地址，以方便我们与您联系" name="connection"
        v-model.trim="connection" @keyup="submit"/>
      </form>
      <span v-show="warning">请填写正确的QQ号或邮箱地址</span>
    </main>
  </div>
</template>

<script>
export default {
    name: "feedbackPage",
    data(){
      return{
        title:'更多页面',
        warning:false
      }
    },
    methods:{
        submit(){
          var oa=document.getElementById("submit");
          var text1=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          var text2=/^[1-9][0-9]{4,10}$/;
          if(this.connection&&this.suggestion){
            oa.style.color="#fff";
          }
          if(!this.connection){
            oa.style.color="#d63f4b";
          }
          if(!this.suggestion){
            oa.style.color="#d63f4b";
          }
        }
    }
}
</script>

<style scoped>
#app{width:750px; height:1334px; margin: 0 auto; background-color:#ebebeb;}
/*页面banner部分*/
header{width:750px; height:130px; background-color: #cd2131; position:relative;}
header span{font-size:30px; color:#fff; position:absolute; top:64px; left:295px; cursor:default;}
header a:nth-of-type(1){width:26px; height:43px; position:absolute; top:64px; left:20px; cursor:pointer;}
header a:nth-of-type(2){position:absolute; top:68px; right:49px; cursor:pointer; font-size:24px;
  color:#d63f4b;}  
a:link,a:visited,a:hover,a:active{
  text-decoration: none;
  color:inherit;
}    
/*页面主体部分*/
main{position:relative; padding-top:38px;}
main p:nth-of-type(1){font-size:22px; color:#666666; position:absolute; left:20px; top:39px; margin:0px; cursor:default;}
main textarea{width:709px; height:180px; border:none; display:block; font-size:16px; box-sizing:border-box; 
  padding-left:17px; padding-top:26px; resize:none; box-sizing: border-box; position:absolute; top:83px; left:20px;}
main p:nth-of-type(2){font-size:22px; color:#666666; position:absolute; left:20px;; top:310px; margin:0px; cursor:default;} 
main form input{width:709px; height:71px; border:none; position:absolute; top:352px; left:20px;  box-sizing:border-box;
  padding-left:17px; font-size:16px;}
main span{position:absolute; left:20px; top:435px; font-size:16px; color:#fb6b14}  
</style>
