<template>
  <van-nav-bar
  title="好店-深圳"
  fixed
  left-arrow
  @click-left="onClickLeft"
  id="vanhear"
/>
</template>

<script>
export default {
   methods: {
    onClickLeft() {
     this.$router.push({path:'/'})
    },

  }
}
</script>

<style lang="scss" scoped>
#vanhear{
  background:#fdb43f;
  color: #fdb43f;
}
</style>
