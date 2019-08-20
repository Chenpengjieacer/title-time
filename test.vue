<template>
  <div class="asd">
    <scroll-com class="didi" ref="myref">
      <div>
        <ul>
          <li v-for=" (it,i) in 50" :key="i">
              {{it}}
          </li>
        </ul>
      </div>


  </scroll-com>
  </div>
</template>

<script>

export default {
  components: {

  },

  data() {
    return {

    };
  },

  methods: {

  },



};
</script>

<style lang="scss" scoped>
.asd{
   position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;

    .didi{
        height: 100%;
    overflow: hidden;
    }
}
</style>>
