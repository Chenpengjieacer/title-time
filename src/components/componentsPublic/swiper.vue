<template>
    <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
            <slot/>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

    </div>
</template>

<script>
export default {
  name: "swiper-com",
  // 定义一个方法 在数据更新时候调用
  methods: {
    update() {
      this.swiper && this.swiper.update();
    }
  },

  //   在dom挂载后创建上去
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, {
      loop: true, // 循环模式选项
      //   自动轮播
      autoplay: {
        //   轮播时间
        delay: 500,
        // 触碰是否停止轮播
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>

<style>
</style>
