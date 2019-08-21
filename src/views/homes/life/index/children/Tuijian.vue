
<template>
  <div>
    <div class="tuijian">
      <div class="r_title">推荐</div>
      <div class="c_inner">
        <router-link to="/life/TuijianDetail">  
          <div class="containner">
            <div class="list">
              <p>体会手作的质朴和专注</p><p>回归慢生活</p>
            </div>
            <div class="list1">
                <p>体会手作的质朴和专注</p><p>回归慢生活</p>
            </div>           
          </div>
        </router-link>
      </div>

    </div>
    
  </div>
</template>

<script>

export default {
 

};
</script>

<style scoped>
.c_inner a {
  display: block;
  width: 100%;
  height: 100%;
}
.c_inner {
  width: 100%;
  height: 160px;
  display: flex;
}
* {
  margin: 0;
  padding: 0;
}
.life {
  width: 100%;
  height: 100%;
}
.tuijian {
  width: 100%;
}
.top img {
  width: 129px;
  height: 65px;
  border-radius: 4px 10px 0 0;
}
.l_bottom {
  font-size: 14px;
  color: rgba(16, 16, 16, 1);
}
.l_bottom h4 {
  margin: 12px 0 0 16px;
  line-height: 20px;
}
.l_bottom p {
  color: rgba(117, 116, 116, 1);
  font-size: 12px;
  line-height: 20px;
  margin-left: 16px;
}
.r_title {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  font-family: PingFangSC-regular;
  color:#fff;
}
.containner{
  width: 100%;
  height:170px;
  margin-left: 3%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  box-sizing: border-box;
}
.list{
  width: 200px;
  height: 160px;
  border-radius: 15px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  line-height: 30px;
  font-weight: 900px;
  background:red;
  color: #fff;
  font-size: 18px;
  margin-right: 15px;
}
.list1{
   width: 200px;
  height: 160px;
  border-radius: 15px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  line-height: 30px;
  font-weight: 900px;
  background:blue;
  color: #fff;
  font-size: 18px;
}



</style>