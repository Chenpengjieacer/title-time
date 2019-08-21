<template>
<div>
    <div class="article" v-for="item in items" :key="item.id">
        <div class="header">{{item.p}}</div>
        <div  class="body"></div>
        <div  class="images"><img :src="item.img"/></div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {id:1,p:"一本好书不应该只是在讲故事，纸张的凹凸起伏，冷暖色泽也是可以表达感情的。",img:"/images/tuijian_2.jpg"},
                {id:2,p:"一本好书不应该只是在讲故事，纸张的凹凸起伏，冷暖色泽也是可以表达感情的。",img:"/images/tuijian_3.jpg"},
                {id:3,p:"一本好书不应该只是在讲故事，纸张的凹凸起伏，冷暖色泽也是可以表达感情的。",img:"/images/tuijian_4.jpg"},
            ]
        }
    },

}   
</script>
    
<style scoped>
.article{
    width: 100%;
    height:auto;
    text-align: left;
    font-size: 14px;
    color: #8c8c8c;
    line-height: 28px;
    font-weight:600;
    display: flex;
    flex-direction: column;
}
.images{
    width: 100%;
    height: 184px;
    margin:15px 0;
}
.images img{
    width: 100%;
    height: 100%;
}
</style>

