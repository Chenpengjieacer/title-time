<template>
  <van-nav-bar
  title="全部想去的用户"
  fixed
  left-arrow
  @click-left="onClickLeft"
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

</style>
