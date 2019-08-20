<template>

  <!-- 111111111111111111111 -->
  <div id="" class="page pages copy">
    <!-- 内容 -->
    <scroll-com class="copy-content">
      <!-- 最上面的头部 -->
      <div class="content-wrap">
        <div class="content-header">
          <span class="iconfont icon-jiantou-copy header-left" @click="returnAction">
          </span>
          <span class="iconfont icon-fenxiang header-right "></span>
        </div>
        <div class="content-bottom">
          <!-- 标题 -->
          <h2 class="content-bottom-title">
            {{title}}
          </h2>

          <!-- 价格 -->
          <p class="content-bottom-price">￥{{goodsPrice}}</p>

          <!-- 地址 -->
          <p class="content-bottom-address">
            <span class="iconfont  icon-weizhi address-icof"></span> {{shopAddress}}
          </p>

          <!-- 类型 -->
          <p class="content-bottom-type">{{type}}</p>

          <!-- 商品名 -->
          <p class="content-bottom-goods">
            {{goods}}
            <!-- 右边栏图标 -->
            <span class="goods-span">
              {{goodsPrice}}
              <i class="iconfont icon-xuanzhong goods-i"></i>
            </span>
          </p>

          <!-- 详情标题 -->
          <p class="content-bottom-introducetitle">{{introducetitle}}</p>

          <!-- 详情标题2 -->
          <p class="content-bottom-introducetitle2"> [ {{introducetitle2}} ]</p>

          <!-- 详情介绍 -->
          <p class="content-bottom-introduce">{{introduce}}</p>

          <!-- 详情内容 -->
          <div class="introduce-content" v-for="introduce in introducecontent" :key="introduce.id">
            <img src="" alt="" class="introduce-content-img">
            <p class="introduce-content-word"> {{ introduce.introduceword}}</p>
          </div>

          <!-- 活动时间标题 -->
          <h3 class="content-bottom--activity">[ {{activitytiem}} ]</h3>

          <!-- 活动具体时间 -->
          <p class="content-bottom-activitytiem" v-for="activitytiem in activitytiemcontent " :key="activitytiem.id">
            {{activitytiem.week}}
            <span v-for="(day,index) in activitytiem.daytime" :key="index">{{day}}</span>
          </p>

          <!-- 活动地点标题 -->
          <h3 class="activity-place-title">[ {{activityplacetitle}} ] </h3>

          <!-- 活动具体地点外套 -->
          <div class="place">
            <!-- 活动具体地点 -->
            <p class="activity-place">{{activityplace}}</p>
            <!-- 活动地点宣传图片 -->
            <img src="" alt="" class="activity-place-img">
          </div>

          <!-- 预定通知标题 -->
          <h3 class="content-bottom-notice-title">[ {{activityplacetitle}} ] </h3>

          <!-- 预定通知内容外套 -->
          <div class="notice-content-wrap">
            <p class="notice-content" v-for="noticecontent in noticecontents" :key="noticecontent.id"> {{noticecontent.noticeName}} :
              <span>{{noticecontent.noticeContent}}</span>
            </p>
          </div>

          <!-- 参与人员信息 -->
          <div class="content-bottom-personnel">
            <!-- 人数 -->
            <div class="content-bottom-personnel-top"> {{personnelNum}}人想去
              <span>全部</span>
            </div>
            <!-- 头像 -->
            <div class="content-bottom-personnel-bottom">

              <img class="personnel-img" v-for="personimg in  personnelPhoto" :key="personimg.id" src="" alt="">
              <span class="iconfont icon-gengduomore12  personnel-imgs" v-if="imgshow"></span>
            </div>
          </div>

          <!-- 尾部下单 -->
          <p class="copy-footer">立即下单</p>
 
        </div>

      </div>

    </scroll-com>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "我是标题 请你们尊重一下我 谢谢！", //标题
      goodsPrice: "200", //价格
      shopAddress: "黄桶坪铁路四村28号造物空间（黄桶坪店）", // 书店地址
      type: "票务类型", // 类型
      goods: "一把木勺", // 商品名
      introducetitle: "活动详情", // 详情标题
      introducetitle2: "课程介绍", //详情标题2
      introduce:
        "腔木勺是所有木艺手工爱好者的入门课。用到的工具都比较少几乎涉及木作（非家具类）的全过程，耗要时间少，无论是木料还是形制都有很大的变化空间，总之是入门必选。将来晋级了，可以做木盘，做玩具，只要你坚持，必有所成。", //详情介绍
      //详情内容
      introducecontent: [
        {
          id: 1,
          introduceword:
            " 在木勺的基础上，造物空间结合铜艺，推出了木柄铜勺制作体验。木柄为红木类，经过精细打磨，配以您亲手打制的锤纹铜勺，尽显手作之美。 ", // 详情文字
          introduceimg: "" //  详情图片
        },
        {
          id: 2,
          introduceword:
            " 此外，造物空间还有纯铜勺制作。在勺坯的基础上，制作者通过均匀的敲打，使勺体成形，并最终击打出美丽的铜勺。您也可以根据需要裁剪勺体，使之贴合自己的需要。", // 详情文字
          introduceimg: "" //  详情图片
        },
        {
          id: 3,
          introduceword:
            " 也许你看过太多最美木匠的照片，却从未想过，自己能够亲手试一试。 ", // 详情文字
          introduceimg: "" //  详情图片
        },
        {
          id: 4,
          introduceword:
            " 荒废时光，周末无处可去？来重庆本土木作体验空间，挖一枚木勺，体验一下当木匠的感觉吧。在造物空间，你可以大胆创造，把自己的想法融入温润的木质中，让时光慢慢下来。 ", // 详情文字
          introduceimg: "" //  详情图片
        }
      ],
      activitytiem: "活动时间", // 活动
      activitytiemcontent: [
        {
          id: 11,
          week: "周六",
          daytime: ["上午9：00-12：00", "下午13：30-17：00"]
        },
        { id: 22, week: "周日", daytime: ["下午13：30-17：00"] }
      ], //活动时间
      activityplacetitle: "活动地点", // 活动地点标题
      activityplace:
        "重庆市九龙坡区黄桶坪街道铁路四村28号。百度地图搜索造物空间，选择黄桶坪店。", // 活动具体地点
      noticetitle: "预定通知", // 预定通知标题
      // 预定通知内容
      noticecontents: [
        {
          id: 111,
          noticeName: "活动内容",
          noticeContent: "木勺子制作（仅限黄角坪店）"
        },
        { id: 222, noticeName: "活动时长", noticeContent: "约3~4小时" },
        {
          id: 333,
          noticeName: "费用包含",
          noticeContent: "材料、场地、设计、老师指导"
        },
        { id: 444, noticeName: "用户自备", noticeContent: "无需" },
        { id: 555, noticeName: "活动形式", noticeContent: "木作" },
        {
          id: 666,
          noticeName: "活动人数",
          noticeContent: "一张票仅限一人使用适用人群建议13岁以上"
        },
        {
          id: 777,
          noticeName: "报名截止时间",
          noticeContent:
            "参加活动的前一天请提前1天预约，如无法参加活动，请提前24小时联系我们。"
        }
      ],
      personnelNum: 169, // 想去人员数
      personnelPhoto: [
        //想去人数的头像
        { id: 1234, Photo: "" },
        { id: 1235, Photo: "" },
        { id: 1236, Photo: "" },
        { id: 1237, Photo: "" },
        { id: 1238, Photo: "" },
        { id: 1239, Photo: "" }
      ],
      imgshow: false
    };
  },
  computed: {},
  methods: {
    returnAction() {
      console.log(1);
      // 编程式写法 路由
      this.$router.push("/chosen");
    }
  },

  created() {
    if (this.personnelPhoto.length >= 6) {
      console.log("我长度大于5", this.imgshow);
      return (this.imgshow = true);
    } else {
      console.log("我长度大于5", this.imgshow);
      return (this.imgshow = false);
    }
  }
};
</script>

<style lang="scss" scoped>
.copy {
  .copy-content {
    width: 100%;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    .content-wrap {
      width: 100%;

      .content-header {
        width: 100%;
        height: 250px;
        background: #b6b4b5;
        color: white;
        padding-top: 38px;
        box-sizing: border-box;
        .header-left {
          font-size: 20px;
          float: left;
          margin-left: 10px;
        }
        .header-right {
          font-size: 20px;
          margin-right: 10px;
          float: right;
        }
      }
      .content-bottom {
        padding: 0 10px 17px 10px;
        box-sizing: border-box;
        background: white;
        .content-bottom-title {
          // 标题
          // 单行文本超出隐藏
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis; //文本溢出显示省略号
          white-space: nowrap; //文本不会换行（单行文本溢出）
          // ---------------------
          height: 56px;
          line-height: 56px;
          font-size: 14px;
        }
        // 价格
        .content-bottom-price {
          // 价格
          width: 100%;
          height: 22px;
          line-height: 22px;
          font-size: 10px;
          color: #ff2526;
          font-weight: 900;
        }
        // 地址
        .content-bottom-address {
          width: 100%;
          height: 22px;
          line-height: 22px;
          font-size: 12px;
          color: #999;
          .address-icof {
            font-size: 12px;
          }
        }
        // 类型
        .content-bottom-type {
          height: 47px;
          line-height: 47px;
          font-size: 13px;
          color: #343434;
        }
        // 商品名称
        .content-bottom-goods {
          height: 11px;
          line-height: 11px;
          color: #999999;
          font-size: 10px;
          .goods-span {
            display: inline-block;
            font-size: 10px;
            float: right;
            .goods-i {
              font-size: 10px;
              color: #fbb442;
            }
          }
        }
        //详情标题
        .content-bottom-introducetitle {
          height: 42px;
          display: flex;
          align-items: flex-end;
          font-size: 13px;
          color: #323232;
        }
        //详情标题2
        .content-bottom-introducetitle2 {
          height: 37px;
          line-height: 37px;
          font-size: 11px;
          color: #848484;
        }
        // 详情介绍
        .content-bottom-introduce {
          line-height: 19px;
          font-size: 12px;
          color: #8c8c8c;
        }
        // 详情内容
        .introduce-content {
          .introduce-content-img {
            display: inline-block;
            width: 317px;
            height: 203px;
            margin: 13px 19px 16px 19px;
            border: 1px solid #ccc;
            box-sizing: border-box;
            background-color: #f9fef8;
          }
          .introduce-content-word {
            line-height: 19px;
            font-size: 12px;
            color: #8c8c8c;
          }
        }
        // 活动时间标题
        .content-bottom--activity {
          height: 48px;
          line-height: 48px;
          font-size: 11px;
          color: #848484;
        }
        // 活动具体时间
        .content-bottom-activitytiem {
          font-size: 12px;
          line-height: 18px;
          color: #8d8d8d;
          span {
            margin-right: 10px;
          }
        }
        // 活动地点标题
        .activity-place-title {
          height: 48px;
          line-height: 48px;
          font-size: 12px;
          color: #666666;
        }
        // 活动具体地点外套
        .place {
          .activity-place {
            line-height: 19px;
            font-size: 12px;
            color: #8c8c8c;
          }
          .activity-place-img {
            display: inline-block;
            width: 317px;
            height: 203px;
            margin: 13px 19px 15px 19px;
            border: 1px solid #ccc;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            background-color: #6a4c32;
          }
        }
        //预定通知标题
        .content-bottom-notice-title {
          height: 19px;
          font-size: 12px;
          color: #666666;
        }
        // 预定通知内容外套
        .notice-content-wrap {
          .notice-content {
            font-size: 12px;
            line-height: 27px;
            color: #8d8d8d;
          }
        }
        // 参与人员信息
        .content-bottom-personnel {
          // 人数
          .content-bottom-personnel-top {
            padding: 27px 0 0 5px;
            box-sizing: border-box;
            height: 57px;
            font-size: 11px;
            color: #999999;
            border-bottom: 1px solid #f0f0f0;
            span {
              color: #ffb73e;
              float: right;
            }
          }
          // 头像
          .content-bottom-personnel-bottom {
            height: 80px;
            width: 100%;
            background: white;
            display: flex;
            align-items: center;
            padding: 0 12px;
            box-sizing: border-box;
            .personnel-img {
              display: inline-block;
              width: 31px;
              height: 31px;
              border-radius: 50%;
              background: #cee9fc;
              margin: 0 8px;
            }
            .personnel-imgs {
              font-size: 31px;
              margin: 0 8px;
              color: #fdcf9b;
            }
          }
        }
        // 尾部立即下单
        .copy-footer {
          width: 100%;
          height: 39px;
          line-height: 39px;
          text-align: center;
          background: #feb63e;
          font-size: 12px;
          color: white;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>

<style>
</style>

