<template>
  <div>
    <Header />
    <scroll-com class="scrollwarp">
    <center />
    </scroll-com>
  </div>
</template>

<script>
import Header from './common/header'
import center from './common/center'
export default {
  components:{
    Header,
    center
  }
}
</script>

<style>
.scrollwarp{
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 0;
}
</style>
