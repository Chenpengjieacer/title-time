<template>
  <div class="foot">
  <van-tabbar v-model="active"
  active-color="#87CEFA"
  inactive-color="#708090"
   route>
  <van-tabbar-item to="/">
    <span>首页</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
      class="iconfont icon-shouye"
    >
  </van-tabbar-item>

  <van-tabbar-item to="/chosen">
    <span>分类</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
      class="iconfont icon-shoucang"

    >
  </van-tabbar-item>
  <van-tabbar-item to="/life">
    <span>探店</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
      class="iconfont icon-huabanfuben"

    >
  </van-tabbar-item >

  <van-tabbar-item to="/my">
    <span>我的</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
      class="iconfont icon-wode"
    >
  </van-tabbar-item>

  </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
        icon: {
        normal: '',
        active: '',
        zhanshi:true
      }
    }
  },
}
</script>

<style>

</style>
