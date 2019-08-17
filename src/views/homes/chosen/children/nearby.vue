<template>
  <!-- 精选第一级分页 - 附近好店 -->
  <div class="nearby-wrap page pages">
    <!-- 标题头部 -->
    <h1 class="nearby-header">
      <span class="header-span1" @click="returnAction"> 《 </span>
      <span class="header-span2">附近好店</span>
      <span class="header-span3"> ★ </span>
    </h1>
    <!-- 滚动内容 -->
    <scroll-com class="nearby-content">
      <!-- 内容包裹的盒子 -->
      <div class="content-div">
        <!-- 内容上 -->
        <div class="content-information" v-for="item in contentList" :key="item.id">
          <p class="information-title">{{item.title}}</p>
          <p class="information-introduce">{{item.introduce}}</p>
          <!-- 内容下 -->
          <div class="information-imgs">
            <img v-for="imgg in imgList" :key="imgg.id" :src="imgg.img" alt="" class="information-img">
          </div>

          <!-- 下箭头点击评分 -->
          <p class="information-info" @click="incofAction"> {{item.info}} </p>
        </div>
      </div>
    </scroll-com>

  </div>
</template>

<script>
export default {
  data() {
    return {
      contentList: [
        {
          id: 1,
          title: "追魂爪 大漠孤魂",
          introduce: "锦衣卫游走江湖，秘密参与了许多的武林事变",
          info: "﹀"
        },
        {
          id: 2,
          title: "断情七绝 刀断情终",
          introduce: "江湖散招，七招为主也称七绝，刀刀断情",
          info: "﹀"
        },
        {
          id: 3,
          title: "辟邪剑谱 群邪辟易",
          introduce: "学习这门武学要付出很大的代价",
          info: "﹀"
        }
      ],
      imgList: [
        { id: 1, img: "../../../../imgs/yunnan.png" },
        { id: 2, img: "../../../../imgs/yunnan.png" },
        { id: 3, img: "../../../../imgs/yunnan.png" }
      ],
      incof: false
    };
  },
  methods: {
    returnAction() {
      this.$router.push("/chosen");
    },
    incofAction() {
      console.log("下标事件触发了");
    }
  }
};
</script>

<style lang='scss' scoped>
.nearby-wrap {
  width: 100%;
  height: 100%;
  z-index: 10;
  .nearby-header {
    width: 100%;
    height: 44px;
    background: white;
    line-height: 44px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    .header-span1 {
      float: left;
      font-size: 15px;
      color: #0076ff;
    }
    .header-span3 {
      float: right;
      font-size: 20px;
      color: black;
      margin-right: 10px;
    }
  }
  .nearby-content {
    width: 100%;
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 0;
    .content-div {
      width: 100%;
      overflow: hidden;
      padding: 0 15px;
      box-sizing: border-box;
      background: #ccc;
      .content-information {
        width: 100%;
        height: 230px;
        background: white;
        border-radius: 10px;
        margin-top: 10px;
        .information-title {
          width: 100%;
          margin-left: 27px;
          height: 35px;
          line-height: 35px;
          color: rgba(16, 16, 16, 1);
          font-size: 16px;
        }
        .information-introduce {
          margin-left: 27px;
          width: 100%;
          height: 20px;
          line-height: 20px;
          color: rgba(142, 142, 142, 1);
          font-size: 12px;
        }
        .information-imgs {
          margin: 15px 0;
          width: 100%;
          display: flex;
          justify-content: space-around;
          .information-img {
            width: 101px;
            height: 107px;
            background: wheat;
            border-radius: 5px;
          }
        }
        .information-info {
          width: 100%;
          line-height: 30px;
          height: 30px;
          background-color: white;
          text-align: center;
          &.bor-top {
            border-top: 1px solid #bbbbbb;
          }
        }
      }
    }
  }
}
</style>
