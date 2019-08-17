<template>
  <div id="" class="page pages copy">
    <h1 class="header">
      <span class="header-span" @click="returnAction">
        < </span>
    </h1>

    <scroll-com class="copy-content">
      <p v-for=" item in 50 " :key="item">{{item}}</p>
    </scroll-com>
    <p class="copy-footer">立即下单</p>
  </div>
</template>

<script>
export default {
  methods: {
    returnAction() {
      console.log(1);
      this.$router.push("/chosen");
    }
  }
};
</script>

<style lang="scss" scoped>
.copy {
  .header {
    width: 100%;
    height: 44px;
    line-height: 44px;
    .header-span {
      margin-left: 10px;
      font-size: 13px;
      color: #0076ff;
    }
  }
  .copy-content {
    width: 100%;
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 48px;
    overflow: hidden;
  }
  .copy-footer {
    width: 100%;
    height: 48px;
    line-height: 48px;
    background: #757474 100%;
    position: fixed;
    bottom: 0px;
    color: white;
    text-align: center;
    font-weight: 900;
    text-shadow: #fff 0px 0px 5px;
  }
}
</style>

<style>
</style>

