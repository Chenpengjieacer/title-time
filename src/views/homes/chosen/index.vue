<template>
  <div>
    <!-- 精选首页 -->
    <div class="chosen-wrap page">
      <h1 class="header">精选</h1>
      <scroll-com class="chosen-content">
        <!-- 包裹的内容 -->
        <div class="content-div">

          <!-- 内容上 -->
          <ul class="content-top">
            <li v-for="item in  detailsList" :key="item.id" class="ontent-top-li" :style="{background:item.backgroundColor}">
              <div class="ontent-top-a" @click="clickAction">
                <div class="top-title">
                  <span class="content-top-span2">{{item.title}}</span>
                </div>
                <!-- 头像 -->
                <p class="ontent-top-a-userImg" :style="{backgroundImage:'url(require'+ item.goodsImg +')'}"></p>
                <!-- 介绍 -->
                <p class="ontent-top-a-introduce">{{item.introduce}}</p>
                <!-- 测试 -->

              </div>
            </li>
          </ul>

          <!-- 内容下 -->
          <div class="content-bottom">
            <p class="chosen-content-header">不错过的小时光</p>

            <!-- 底部轮播图 -->
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="banner in 4" :key="banner" @click="imgAction">
                  <img src="" alt="">
                  <p>某某城市景点{{banner}}</p>
                </div>

              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>

            </div>

          </div>

        </div>

        <!-- 测试尾部 -->
        <!-- <p class="footer"></p> -->
      </scroll-com>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailsList: [
        {
          id: 1,
          title: "趣周末", //b标题
          introduce:
            "巴疲惫打败，让轻松的翅膀越飞越高。把束缚赶走，让自由的心火越烧越旺。我们一起周末愉快吧！", //介绍
          goodsImg: "../../../imgs/choseGoods.png", // 商品头像
          backgroundColor: "#fdb43f" //背景颜色
        },
        {
          id: 2,
          title: "成都当地游", //b标题
          introduce:
            "成都，是一座“旅游城市”，它的景点比赞美它的诗还要多，有宽窄巷子遗址，有环球中心啊啊啊啊", //介绍
          goodsImg: "../../../imgs/choseGoods.png", // 商品头像
          backgroundColor: "#64d9f3" //背景颜色
        },
        {
          id: 3,
          title: "重庆当地游", //b标题
          introduce:
            "重庆，作为世界上最大的内陆山水之城，是一座有山有水有灵气的城市，不仅有美丽的景点可以逛，还有许多美食啊啊", //介绍
          goodsImg: "../../../imgs/choseGoods.png", // 商品头像
          backgroundColor: "#ffc4bf" //背景颜色
        }
      ],
      imgList: [
        { id: 1, img: "", title: "" },
        { id: 2, img: "", title: "" },
        { id: 3, img: "", title: "" }
      ]
    };
  },
  methods: {
    clickAction() {
      // console.log(this.$router);
      this.$router.push("/chosen/nearby/111");
    },
    imgAction() {
      // console.log("img跳转打印了");
      this.$router.push("/chosen/copy/222");
    }
  },
  created() {},
  // 调用banner图
  mounted() {
    new Swiper(".swiper-container", {
      // 同时显示的个数
      slidesPerView: 3,
      // 中间间隔
      spaceBetween: 10,

      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang='scss' scoped>
.chosen-wrap {
  background: #fafafa;
  .header {
    width: 100%;
    height: 44px;
    background: #fdb43f;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    font-weight: 550;
    border-bottom: 1px solid #ccc;
    color: white;
  }
  // 内容
  .chosen-content {
    width: 100%;
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 0;
    .content-div {
      background-color: #fafafa;
      // box-sizing: border-box;
      // padding: 1px 15px 0 15px;
      // 内容上
      .content-top {
        background: white;
        box-sizing: border-box;
        padding: 1px 15px 15px 15px;
        .ontent-top-li {
          width: 100%;
          height: 123px;
          background-color: #fdb43f;
          padding: 18px 0 0 20px;
          box-sizing: border-box;
          border-radius: 10px;
          margin-top: 15px;
          .ontent-top-a {
            // 标题
            .top-title {
              width: 205px;
              height: 30px;
              color: white;
              font-size: 14px;
              float: left;
            }

            // 商品头像
            .ontent-top-a-userImg {
              // display: inline-block;
              width: 90px;
              height: 90px;
              border-radius: 50%;
              border: 1px solid #bbb;
              float: right;
              margin-right: 24px;
              background: url("../../../imgs/choseGoods.png") no-repeat;
              background-size: 100%;
            }
            // 介绍
            .ontent-top-a-introduce {
              // height: 62px;
              width: 165px;
              font-size: 10px;
              line-height: 16px;
              color: white;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
              float: left;
            }
            // .ppp {
            //   float: left;
            //   width: 100px;
            //   height: 100px;
            //   background: url("../../../imgs/choseGoods.png") no-repeat;
            //   background-size: 100%;
            // }
          }
        }
      }
      // 内容下
      .content-bottom {
        background: white;
        margin: 0 5px;
        box-sizing: border-box;
        padding-bottom: 46px;
        .chosen-content-header {
          width: 100%;
          height: 55px;
          line-height: 55px;
          font-size: 13px;
          color: #333;
        }
        .swiper-container {
          width: 100%;
          height: 150px;
          .swiper-wrapper {
            .swiper-slide {
              width: 117px;
              height: 137px;
              border: 1px solid #ccc;
              border-radius: 10px;
              img {
                display: inline-block;
                width: 115px;
                height: 107px;
                background: #fdb43f;
                border-radius: 10px 10px 0 0;
              }
              p {
                height: 30px;
                text-align: center;
                line-height: 30px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style   >
.swiper-container {
  overflow: visible;
}
.swiper-pagination {
  bottom: -20px !important;
  left: 0;
  width: 100%;
}
.swiper-pagination-bullet {
  width: 4px;
  height: 4px;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #ffb63f;
}
</style>
