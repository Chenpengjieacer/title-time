<template>
  <van-nav-bar
  title="全部想去的用户"
  fixed
  left-arrow
  @click-left="onClickLeft"
  id="heardcolor"
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
#heardcolor{
  background: #fdb43f
}
</style>
