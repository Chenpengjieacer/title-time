
<template>
<div class="fujin">
    <div class="f_top">附近</div>
    <div class="f_container">
        <div class="content">
            <router-link to="/life/FujinDetail">
            <div class="c_top"><div>三公里特色小店</div><div>更多</div></div>
            </router-link>
            <div class="c_bottom">
                <div class="left">
                    <img src="https://dummyimage.com/286x147/4A7BF7&text=Hello">
                    <div class="title">七彩云南,半夏味道</div>    
                </div>
                <div class="right">
                    <img src="https://dummyimage.com/286x147/4A7BF7&text=Hello">
                    <div class="title">街边安静的绿房子</div> 
                </div>   
            </div>
        </div>

    </div>

</div>



</template>


<script>
export default {
   
 
}
</script>

<style scoped>


.fujin{
    width: 100%;
    height: auto;
    background: rgba(198,197,197,1)
}
.f_top{
    width: 100%;
    height:40px;
    line-height: 40px;
    padding-left: 10px;
    box-sizing: border-box;
    font-family: PingFangSC-regular;
    color: rgba(16, 16, 16, 1);
}
.f_container{
    width: 100%;
    height: 250px;
    display: flex;
    justify-content:center; 
}
.content{
    
    width:95%;
    height: 230px;
    border-radius: 10px;
    border: 1px solid rgba(187, 187, 187, 1);
    display: flex;
    flex-direction: column;
    background: #ffff;
    
}
.c_top{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    box-sizing: border-box;
    padding: 0 17px;
    justify-content: space-between;
}
.c_top div{
    height: 40px;
   
    display: flex;
}
.c_bottom{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    
}
.c_bottom .left,.right{
    width: 121px;
    height: 140px;
    border-radius: 10px;
    background: chartreuse;
}
.c_bottom img{
    border-radius: 10px;
    width: 100%;
    height:100%;
}
.c_bottom .left{
    margin-right:19px;
}
.title{
    text-align: center;
    height: 27px;
    line-height: 27px;
    color: rgba(16, 16, 16, 1);
    font-size: 12px;
    font-family: PingFangSC-regular;
}
</style>