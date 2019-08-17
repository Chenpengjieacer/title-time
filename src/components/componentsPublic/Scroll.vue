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
    new BScroll(this.$refs.scroll, {
      click: true,
      tap: true
      // scrollX: true,
      // scrollY: false
    });
  }
};
</script>

<style>
.scroll-wrap {
  overflow: hidden;
}
</style>
