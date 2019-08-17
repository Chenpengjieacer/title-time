
<template>
<div>

    <div class="tuijian"> 
      
        <div class="r_title">推荐</div>
        
            <div class="c_inner">
                <router-link to="/life/TuijianDetail">
                <div class="list" v-for="item in items" :key=item.id>     
                    <div class="top"><img :src="item.img"></div>
                    <div class="l_bottom">
                       <h4>{{item.h4}}</h4>
                       <p>{{item.p}}</p>
                       <p>{{item.p2}}</p> 
                    </div>
                </div>
                </router-link>
            </div>
            <router-view></router-view>
           
    </div>

</div>
</template>

<script>
export default {

    data(){
       return{
            items:[
            {id:1,img:"https://dummyimage.com/286x147/4A7BF7&text=Hello",h4:"倾听纸张的故事",p:'敬人自语',p2:"666人想去"},
            {id:2,img:"https://dummyimage.com/286x147/4A7BF7&text=Hello",h4:"倾听纸张的故事",p:'敬人自语',p2:"666人想去"},
            {id:3,img:"https://dummyimage.com/286x147/4A7BF7&text=Hello",h4:"倾听纸张的故事",p:'敬人自语',p2:"666人想去"},
                  
        ]}
    },
 

}
</script>

<style scoped>
.c_inner a{
    display:flex;
    width: 100%;
    height:100%;
}
.c_inner{
    width: 100%;
    height: 146px;
    display: flex; 


}
*{margin:0;padding:0};
/* .a{
  width: 100%;
  height: 300px;
  margin-bottom:20px;
  background: coral;
} */
.life{
  width: 100%;
  height: 100%;
}
.tuijian{
    width: 100%;
} 
.top img{
    width:129px;
    height: 65px;
    border-radius: 4px 10px 0 0;
}
.l_bottom{
    font-size: 14px;
    color:rgba(16,16,16,1);
    
}
.l_bottom h4{
   margin:12px 0 0 16px;
   line-height: 20px;
}
.l_bottom p{
    color:rgba(117,116,116,1);
    font-size: 12px;
    line-height: 20px;
    margin-left:16px;  
}
.list{
    flex-shrink: 1;
    width:129px;
    height: 146px;
    border-radius:10px;
    background: #ddd;
    margin-left:10px;
    border: 1px solid rgba(255, 255, 255, 0);
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

</style>