<template>
<div>
    <div class="bottom">
        <div class="want">
            <div>161人想去</div><div class="all">全部</div>
        </div>
        <div class="cicle">
           <div class="touxiang" v-for="item in items" :key="item.id"><img :src="item.img"/></div>
        </div>
   </div>
</div>
</template>

<script>
export default {
    data(){
        return{
         items:[
                {id:1, img:"/images/tuijian (1).jpg"},
                {id:2, img:"/images/tuijian (2).jpg"},
                {id:3, img:"/images/tuijian (3).jpg"},
                {id:4, img:"/images/tuijian (4).jpg"},
                {id:5, img:"/images/tuijian (5).jpg"}, 
                {id:6, img:"/images/tuijian (6).jpg"},
                {id:7, }  
            ]
        }
    }

}   

</script>


<style scoped>


.bottom{
    width: 100%;
    height: 121px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;   
}
.want{
    width: 100%;
    height:40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
     padding: 0 4%;
 
}
.all{  
    font-size: 18px;
    font-family: PingFangSC-regular;
    color:rgb(246,165,0);
}
.cicle{
    width: 100%;
    height: 80px;  
    display: flex;
    justify-content:space-around;
    align-items: center;
    border-top: 0.7px solid rgba(138,137,137,1);
    box-sizing: border-box;
    padding: 0 4%;
    
}
.cicle .touxiang{
    display: flex;
    width: 50px;
    height: 50px; 
    border-radius: 50%;
}
.cicle .touxiang img{
    width: 100%;
    height: 100%;
    border-radius: 50%; 
}
.cicle .touxiang:nth-child(7){
    background: rgb(246,165,0);
}
</style>

