
<template>
<div class="life">
  <div class="nav">探店-深圳 <img src="../../../../../public/images/fdj.png"/></div>
  <app-scroll class="content">
    <div>

    <Tuijian></Tuijian>
    <Fujin></Fujin>
    <Goodshop></Goodshop>

    </div>
    <router-view></router-view>
  </app-scroll>

</div>

</template>

<script>
import Vue from 'vue';
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
import Tuijian from './children/Tuijian'
import Fujin from './children/Fujin'
import Goodshop from './children/Goodshop'
import TuijianDetail from '../FujinMore/FujinDetail'
import FujinDetail from '../FujinMore/FujinDetail'

export default {
  data(){
    return {

    }
  },
  components:{
    Tuijian,
    Fujin,
    Goodshop,
    FujinDetail,
    TuijianDetail,

  },

}
</script>

<style scoped>
.life{
  width: 100%;
  height: 100%;
}
.nav{
  width:100%;
  height:44px;
  background-color: rgba(247, 247, 247, 0.8);
  display: flex;
  font-size: 17px;
  opacity: 1;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  position: relative;
}


.nav img{
  position: absolute;
  right:14px;
}
.content{
  width: 100%;
  position: fixed;
  top:44px;
  bottom:49px;
  background: #dddddd;
  background-color: rgba(198, 197, 197,1);
  border: 1px solid rgba(225 225 225 0);
}


</style>
