<template>
  <!-- 精选第一级分页 - 附近好店 -->
  <div class="nearby-wrap page pages">
    <!-- 标题头部 -->
    <h1 class="nearby-header">
      <span class="header-span1" @click="returnAction"> 《 </span>
      <span class="header-span2">附近好店</span>

    </h1>
    <!-- 滚动内容 -->
    <scroll-com class="nearby-content">
      <!-- 内容包裹的盒子 -->
      <div class="content-div">
        <!-- 内容 -->
        <div class="content-information" v-for="item in contentList" :key="item.id">
          <!-- 内容上 -->
          <div class="information-top">
            <!-- 标题 -->
            <div class="information-title">
              <!-- 标题左 -->
              <p class="title-left">{{item.titleLeft}}</p>
              <!-- 标题右 -->
              <p class="title-right">{{item.titleRight}}人想去</p>
            </div>
            <!-- 内容介绍 -->
            <p class="information-introduce">
              {{item.introduceRegion}}
              <span class="information-introduce-span"></span>
              [ {{item.introduceShop}} ]
            </p>
            <!-- 内容图片区 -->
            <div class="information-imgs">
              <img v-for="imgg in imgList" :key="imgg.id" :src="imgg.img" alt="" class="information-img">
            </div>
            <!-- 下箭头点击评分 -->
            <p class="information-info" @click="incofAction(item)"> {{item.info}} </p>
          </div>
          <!-- 内容下 -->
          <div class="information-bottom" v-if="item.incof">
            <!-- 收藏分享功能区域 -->
            <div class="information-application">
              <span class=" application-star  iconfont icon-star alsos"></span>
              <span class="application-xihuan iconfont icon-xihuan"></span>
              <span class="application-fenxiang iconfont icon-fenxiang"></span>
              <span class="application-pinglun iconfont icon-pinglun"></span>
            </div>
          </div>
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
          titleLeft: "追魂爪 大漠孤魂", //标题
          titleRight: "80", // 人数
          introduceRegion: "宝安区", //介绍(区域)
          introduceShop: "半夏云南味道", //介绍(店铺)
          info: "﹀", // 箭头
          incof: false //判断是否创建
        },
        {
          id: 2,
          titleLeft: "断情七绝 刀断情终",
          titleRight: "95",
          introduceRegion: "深圳大鹏区",
          introduceShop: "时光里客栈古城店",
          info: "﹀",
          incof: false
        },
        {
          id: 3,
          titleLeft: "辟邪剑谱 群邪辟易",
          titleRight: "50",
          introduceRegion: "宝安区",
          introduceShop: "素迟",
          info: "﹀",
          incof: false
        }
      ],
      imgList: [
        { id: 1, img: "../../../../imgs/yunnan.png" },
        { id: 2, img: "../../../../imgs/yunnan.png" },
        { id: 3, img: "../../../../imgs/yunnan.png" }
      ],
      show: false
    };
  },
  methods: {
    returnAction() {
      this.$router.push("/chosen");
    },
    incofAction(item) {
      // console.log("下标事件触发了", item);
      item.incof = !item.incof;
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
    background: #fbb442;
    line-height: 44px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    color: white;
    .header-span1 {
      width: 30px;
      float: left;
      font-size: 15px;
      color: white;
      text-align: center;
    }
    .header-span2 {
      font-size: 16px;
      margin-left: -30px;
    }
  }
  // 滚动内容区域
  .nearby-content {
    width: 100%;
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 0;
    // 内容盒子
    .content-div {
      width: 100%;
      overflow: hidden;
      padding: 0 15px 10px 15px;
      box-sizing: border-box;
      background: #f5bd62;
      // 内容信息
      .content-information {
        width: 100%;
        // height: 205px;x`
        // background: white;
        // border-radius: 10px;
        // margin-top: 10px;
        // box-sizing: border-box;
        // padding: 15px 15px 0 15px;
        // 内容上
        .information-top {
          width: 100%;
          // height: 205px;x`
          background: white;
          border-radius: 10px;
          margin-top: 10px;
          box-sizing: border-box;
          padding: 15px 15px 0 15px;
          .information-title {
            width: 100%;
            height: 13px;
            display: flex;
            justify-content: space-between;
            .title-left {
              font-size: 13px;
              color: #333;
            }
            .title-right {
              font-size: 10px;
              color: #a6a6a6;
            }
          }
          // 介绍
          .information-introduce {
            width: 100%;
            height: 31px;
            // line-height: 22px;
            color: #9a9a9a;
            font-size: 10px;
            display: flex;
            align-items: center;
            .information-introduce-span {
              display: inline-block;
              width: 2px;
              height: 2px;
              border-radius: 50%;
              background: #fbb442;
              margin: 0 5px;
            }
          }
          // 图片区外盒 用弹性盒分开
          .information-imgs {
            margin: 7px 0;
            width: 100%;
            display: flex;
            justify-content: space-around;
            .information-img {
              width: 98px;
              height: 98px;
              background: wheat;
            }
          }
          // 底部下标
          .information-info {
            width: 100%;
            height: 34px;
            line-height: 34px;
            background-color: white;
            text-align: center;
            &.bor-top {
              border-top: 1px solid #bbbbbb;
            }
          }
        }
        // 内容下
        .information-bottom {
          width: 100%;
          display: flex;
          justify-content: center;
          // 图标 收藏 喜欢......
          .information-application {
            width: 315px;
            height: 56px;
            background-color: #f3f2f2;
            border-radius: 0 0 5px 5px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            span {
              display: inline-block;
              font-size: 22px;
              color: #9a9a9a;
              &.alsos {
                color: #feb63e;
              }
            }
            .application-fenxiang {
              font-size: 27px;
            }
          }
        }
      }
    }
  }
}
</style>
