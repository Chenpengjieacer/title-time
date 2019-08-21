<template> 

 <app-scroll class="content">  
    <div class="Detailtop"> 
        <span @click="prev()">返回</span>    
        <div class="banner"><img src="../../../../../../public/images/tuijian_1.jpg"/></div>
    </div> 

</app-scroll> 
</template>

<script>
export default {
    methods:{
        prev(){
            this.$router.go(-1)
        },
    }
  
}
</script>

<style scoped>
.Detailtop{
    width: 100%;
    height: 100%;
    position: relative;
}
.banner{
    width: 100%;
    /* height:164px; */

}
.banner img{
    width: 100%;
    height: 100%;
}
.Detailtop span{
    position: absolute;
    top: 20px;
    left:20px;
    color: #fff;
    font-weight: 900;
    font-size: 18px;
    display: flex;
}
</style>