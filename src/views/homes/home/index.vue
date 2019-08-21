<template>
  <div>
    <Heartop />
    <scroll-com class="scrollwarp" >
    <Headers />

    <Sort />
    <Youlove />
    </scroll-com>
    <Marginbot />
  </div>
</template>

<script>
import Headers from './common/header'
import Sort from './common/sort'
import Youlove from './common/youlove'
import Heartop from './common/heatop'
import Marginbot from './common/marginbot'
import { request } from 'http';
export default {
  components:{
    Headers,
    Sort,
    Youlove,
    Heartop,
    Marginbot
  },

  mounted(){
    this.$http.get('/mine/orderlist/')
    .then(res => {
      console.log(res)

    })
  }
}
</script>

<style scoped>
.scrollwarp{
   position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
}
</style>>


