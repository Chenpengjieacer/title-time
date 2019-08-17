<template>
  <div class="wantogo">
    <Header />
    <Center />
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
}
</style>
