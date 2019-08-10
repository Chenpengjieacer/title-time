<template>
  <div id="hearders">
    <div class="city">
      <span class="city-span"><i class="iconfont icon-zuobiaofill"></i></span>
      <p class="city-p">深圳</p>
    </div>
    <div class="topbox">
      <div class="imgs"><img src="" alt="">图片</div>
      <div class="bgcolor"></div>
      <div class="positiondiv">
        <div class="postop">
          <ul>
            <li class="ulli">北京</li>
            <li class="ulli">重庆</li>
            <li class="ulli">深圳</li>
          </ul>
        </div>
        <div class="postext">
          <h3>小时光带你一起发现周边美好小店~</h3>
          <p>这里有最热门的城市无论你想去哪。。。。。。。。。。。。。。。</p>
          <div class="anmo">
            <div><span>查看更多</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#hearders{
  width: 100%;
  height: 340px;
  .city{
    padding: 10px;
    box-sizing: border-box;
    height: 5%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #fff;
    .city-span{

    }
    .city-p{
      display: inline-block;
    }
  }

  .topbox{
    height: 80%;
    width: 100%;
    position: relative;
    .imgs{
      height: 100px;
      background-color: #F5F5F5;
      text-align: center;
      line-height: 100px;
    }
    .bgcolor{
      height: 200px;
      background-color: #A9A9A9 ;
    }
    .positiondiv{
      width: 90%;
      height: 200px;
      position: absolute;
      left: 5%;
      bottom: 0;
      border: 1px solid #fff;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 0 3px #ccc;

      .postop{
        height: 40%;
        ul{
         display: flex;
         height: 100%;
         text-align: center;
          .ulli{
            flex: 1;
          }
        }
      }
      .postext{
        text-align: center;
        h3{
          font-size: 16px;
          font-weight: 500;
        }
        p{
          font-size: 14px;
          margin-top: 10px;
          height: 30px;
          width: 100%;
          line-height: 20px;
        }
        .anmo{
          margin-top: 20px;
          width: 100%;

          div{
            background: #778899;
            width: 200px;
            display: inline-block;
            height: 30px;
            line-height: 30px;
            border-radius: 10px;
            color: #fff;

          }
        }
      }
    }
  }
}
</style>

