<template>
    <div class="Good">
        <div class="r_title">好店</div> 
        <!-- <div class="img"></div> -->
        <div class="position"><img src="https://dummyimage.com/286x147/4A7BF7&text=Hello"></div>
        <div class="content"></div>
        <div class="loading">查看更多</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.Good{
    width:100%;
    height:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    
}
.r_title{
    width: 100%;
    height:40px;
    line-height: 40px;
    padding-left: 10px;
    box-sizing: border-box;
    font-family: PingFangSC-regular;
    color: rgba(16, 16, 16, 1);
} 
.position{
    width: 225px;
    height: 236px;
    position: absolute;
    top:40px;
    display: flex;
}
.position img{
    width:100%;
    height: 100%;
    border-radius: 10px;
}
.content{ 
    margin-top:58px;
    display: flex;
    width: 292px;
    height: 320px;
    border-radius: 10px;
    border: 1px solid rgba(187, 187, 187, 1);
    background: #ffff;
}
.loading{
    width: 200px;
    height: 33px;
    line-height: 33px;
    margin:20px 0;
    border-radius: 10px;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    font-family: Arial;
    background: #ffff;
    border: 1px solid rgba(187, 187, 187, 1);
    
}

</style>

