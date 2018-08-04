<template>
    <div id="app">
     <header>
        <span>{{title}}</span>
        <a href="#"><img src="../../assets/back.png" height="43" width="25"/></a>
     </header>
     <main>
        <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)">
            <img src="../../assets/icon7-4.png" height="44" width="44" alt="#"/>
            <p>意见反馈</p>
        </div>
        <div>
            <img src="../../assets/icon8-4.png" height="44" width="44"  alt="#"/>
            <p>关于我们</p>
            <p class=" edition">{{editionnumber}}</p>
        </div>
        <div @mousedown="changeColor($event)" @mouseup="recoverColor($event)" @click="logOff">
            <img src="../../assets/icon9-4.png" height="44" width="44"  alt="#"/>
            <p>退出登录</p>
        </div>
     </main>
    </div>
</template>

<script>
export default {
    name: "morePage",
    data(){
      return{
        title:'更多页面',
        editionnumber:'V1.1'
      }
    },
    methods:{
        //点击效果 
        changeColor(event){
        var t=event.currentTarget;
        t.style.backgroundColor="#ebebeb";
        },
        recoverColor(event){
        var t=event.currentTarget;
        t.style.backgroundColor="#fff";
        },
        //提示框
        logOff(){
            this.$messagebox.confirm('', { 
            message: '确定执行此操作？', 
            title: '提示', 
            showConfirmButton:true,
            showCancelButton:true,
            confirmButtonText: '确定', 
            cancelButtonText: '取消' 
            }).then(action => { 
                this.$message({
                type:'success',
                });
            }).catch(() => { 
                this.$message({
                type:'info',
                });
            });
        }
    }
}
</script>

<style scoped>
#app{width:750px; height:1334px; margin: 0 auto; background-color:#ebebeb;}
/*页面banner部分*/
header{width:750px; height:130px; background-color: #bb3337; position:relative;}
header span{font-size:30px; color:#fff; position:absolute; top:60px; left:305px; cursor:default;}
header a{width:26px; height:43px; position:absolute; top:58px; left:27px; cursor:pointer; display:block;}
/*页面主体部分*/
main{position:relative;}
main div:nth-of-type(1){width:750px; height:83px; background-color:#fff;
 border-bottom:1px #dcdcdc solid; border-top:1px #dcdcdc solid; margin-bottom:71px; text-align:left;}
main div:nth-of-type(1) img{position:absolute; left:48px; top:20px;}
main div:nth-of-type(2){width:750px; height:83px; background-color:#fff;
 border-bottom:1px #dcdcdc solid; border-top:1px #dcdcdc solid; margin-bottom:71px; text-align:left;}
main div:nth-of-type(2) img{position:absolute; left:48px; top:176px;}
main div:nth-of-type(2) .edition{font-size:18px; position:absolute; left:657px; color:#8e8e8e; margin:0px;}
main div:nth-of-type(3){width:750px; height:83px; background-color:#fff;
 border-bottom:1px #dcdcdc solid; border-top:1px #dcdcdc solid; margin-bottom:71px; text-align:left;}
main div:nth-of-type(3) img{position:absolute; left:48px; top:332px;}
main div p{font-size:24px; line-height:83px; position:absolute; left:165px; margin:0; cursor:default;}
</style>
