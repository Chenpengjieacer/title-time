<template>
<div class="TuijianDetail">
    
    <DetailTop></DetailTop>

    <div class="containner">
        <div class="inner">
            <div class="c_top">
                <h3>倾听纸张的故事</h3>
                <div class="title"><span>敬人纸语</span><p>艺术空间</p></div>
                <strong>[周一~周五] 9:00am-14:00pm.</strong>
                <a>[周六~周日] 9:00am-14:00pm.</a>
            </div>
            <div class="message">
                 <div class="phone">14578677878</div><div class="address">地址：深圳市福田区新洲花园大道</div>
            </div>

            <div class="DetailCenter">
                <h3>【敬人纸语】</h3>
                <div class="D_inner">
                    <DetailCerter></DetailCerter>
                   
                   
                    
                           
                </div> 
            </div>
            <DetailBottom></DetailBottom>

        </div>
    </div>
       
</div>
</template>

<script>
import DetailTop from './children/DetailTop'
import DetailCerter from './children/DetailCenter'
import DetailBottom from './children/DetailBottom'
export default {
    components:{
        DetailTop,
        DetailCerter,
        DetailBottom,
    }
    
}
</script>
<style scoped>
.containner{
    width: 100%;
    height:1250px;; 
    background: #fcfcfe;
}
.inner{
    display: flex; 
    width: 100%;
    height: auto;
    flex-direction: column;
}
.c_top{
    width: 100%;
    height: 140px;
    border-bottom: 1px solid rgba(138,137,137,1);
    box-sizing: border-box;
    padding: 0 4%;
}
.c_top .title{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.c_top p{ 
    margin-top:15px;
    font-size: 18px;
    text-align: left;
    font-family: PingFangSC-regular;
    display: flex;
    color:rgb(246,165,0);

}
.c_top h3{
    font-style: normal;
    margin-top:15px;
    font-size: 18px;
    font-family:cursive;
    display: flex;

}
.c_top span{
    color: rgba(142, 141, 141, 1);
    font-size: 18px;
    font-family: PingFangSC-regular;
    margin-top:15px;
    display: block;
  
}
.c_top strong{
    font-weight: normal;
    color: rgba(149, 147, 147, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
    margin-top:15px;
    display: block;
    line-height: 20px;
    
}
.c_top a{
    font-style: normal;
    font-family: PingFangSC-regular;
    font-size: 14px;
    display: block;
    color: rgba(149, 147, 147, 1);
    line-height: 20px;
}
.message{
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 25px;
    border-bottom: 1px solid rgba(138,137,137,1);
    color: rgba(132, 131, 131, 1);
    font-size: 14px;  
    padding: 0 4%;
    box-sizing: border-box;  
}
.DetailCenter{
    width: 100%;
    height: 100%;
    text-align: center;
}
.DetailCenter h3{
    display: block;
    margin:13px 0;
    font-family: cursive;
}
.D_inner{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 4%;
    text-align: center; 
}

</style>

