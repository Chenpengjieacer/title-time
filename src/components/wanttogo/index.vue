<template>
  <div class="wantogo">
    <Header />
    <scroll-com class="scrollwarp">
    <Center />
    </scroll-com>
  </div>
</template>

<script>
import Header from './common/heard'
import Center from './common/center'
export default {
  components:{
    Header,
    Center
  }
}
</script>

<style lang="scss" scoped>
.wantogo{
  width: 100%;
  height: 100%;

  .scrollwarp{
     position: fixed;
    width: 100%;
    top: 40px;
    bottom: 0;
  }
}
</style>
