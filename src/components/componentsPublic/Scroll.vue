<template>
  <div class="scroll-wrap" ref="scroll">
    <div class="scroll">
      <slot/>
    </div>

  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll-com",


  mounted() {
   let scroll = this.scroll =new BScroll(this.$refs.scroll, {
      click: true,
      tap: true
      // scrollX: true,
      // scrollY: false
    });
    // 点击更新 refresh 方法重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
    scroll.on("beforeScrollStart", () => {
      scroll.refresh();
    });
       scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
            console.log(123)
        })
  },




  methods: {
    // 定义一个方法
    scrollTop() {
      this.scroll.scrollTo(100, 0, 0);
    }
  }
};
</script>

<style>
.scroll-wrap {
  overflow: hidden;
}
</style>
