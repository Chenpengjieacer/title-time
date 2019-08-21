<template>

   
    <div class="FujinDetail">
        <div class="nav">
            <div class="font" @click="prev()">
                <span>返回</span>
            </div> 
            <div>探店-深圳</div> 
            <div>&nbsp;&nbsp;</div>         
        </div>

    <div class="containner">
        <div class="content">
            <div class="detail" v-for="(item,index) in items" :key="item.id" >
                <div class="d_wrap">
                    <div class="title">
                        <h2>七彩云南，半夏味道</h2>
                        <p>宝安区一半夏云南味道</p>
                    </div>

                    <div class="center">
                        <div><img :src="item.img1"/></div>
                        <div><img :src="item.img2"/></div>
                        <div><img :src="item.img3"/></div>
                    </div>

                    <div class="border"></div>
                    <div class="xjgh" @click="toggle(item.id,index)">点击</div>
                </div>

                    <div class="yincang" v-if="show">
                        <div>$</div>
                        <div>$</div>
                        <div>$</div>
                        <div>$</div>
                        <div>$</div>                    
                    </div> 
            </div>
        </div>
    </div>  
    </div>
 

</template>

<script>
export default {
    data(){
        return{
            show:false,
            items:[
                {id:1,h2:"七彩云南，半夏味道",p:"宝安区一半夏云南味道",img1:"/images/tandian_1.jpg",img2:"/images/tandian_2.jpg",img3:"/images/tandian_3.jpg",show:true,},
                {id:2,h2:"七彩云南，半夏味道",p:"宝安区一半夏云南味道",img1:"/images/tandian_4.jpg",img2:"/images/tandian_5.jpg",img3:"/images/tandian_6.jpg",show:true,},
                {id:3,h2:"七彩云南，半夏味道",p:"宝安区一半夏云南味道",img1:"/images/tandian_1.jpg",img2:"/images/tandian_2.jpg",img3:"/images/tandian_3.jpg",show:true,},
            ]
        }
    },
    methods:{
        // if(index){
             toggle(id,index){      
            this.show=!this.show      
            console.log(id)
            // }         
        },
             
        prev(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.content{
    overflow:scroll;
    background: linear-gradient(#FF9900,#fdb43f);
    margin-bottom: 50px;
}
.FujinDetail{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:absolute;
    left: 0;
    top:0;
}
.nav{
    width:100%;
    height:44px;
    font-size: 17px;
    opacity: 1;
    display: flex;
    justify-content:space-between;
    align-items: center;
    position:absolute;
    top: 0;
    left: 0;
    font-size: 17px;
    background: #fff;
    font-family: SFUIText-regular;
}
.font span{
    display: flex;

}
.return{
    width: 40px;
    background: chartreuse;
    height: 100%;
}
.containner{
    width: 100%;
    position:absolute;
    top: 44px;
    left: 0;
    display:flex;
    justify-content: center;
}
.detail{   
    margin-top:20px;
    width: auto;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 3%;
    box-sizing: border-box;
    margin-bottom: 20px;
}
.d_wrap{
    width: 100%;
    height: auto;
    background: #fff;
    border-radius: 10px;
    border: 1px solid rgba(187, 187, 187, 1);  
    box-sizing: border-box;  
}
.title{
    width: 100%;
    height:auto;
    box-sizing: border-box;
    padding:13px 0 0 17px;
}
.title p{
    color: rgba(16, 16, 16, 1);
    font-size: 16px;
    font-family: PingFangSC-regular;
    margin:8px 0 13px 0;
}
.title p{
    font-size: 12px;
    color: rgba(142, 142, 142, 1);
    font-size: 12px;
    text-align: left;
    font-family: PingFangSC-regular;
}
.center{
    width: 100%;
    height: auto;
    display: flex;
    justify-content:space-between;
    box-sizing: border-box;
    padding:0 17px;   
}
.center div{
    display: flex;
    flex: 1;
    box-sizing: border-box;
    height: 107px;   
}
.center div:nth-child(2){
  margin:0 10px;   
}
.center div img{
    width: 100%;
    height: 100%;
    border-radius:10px;
}
.border{
    height: 1px;
    background: black;
    margin-top: 15px;   
}
.xjgh{
    width: 100%;
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: center;    
}
.xjgh img{
    margin:10px 0;
}
.yincang{
    width: 300px;
    height: 50px;
    width: 300px;
    background: #fff;   
    border-radius: 10px;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);
    display: flex;
    justify-content:space-around;
    align-items: center;
}
</style>