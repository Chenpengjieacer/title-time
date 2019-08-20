<template>
  <div id="hearders">

    <div class="topbox">
      <div class="imgs"><img src="" alt=""></div>
      <div class="bgcolor"></div>
      <div class="positiondiv">
        <div class="postop">
          <h2 class="postoph2">推荐热门城市</h2>
          <ul>
            <li class="ulli" v-for="item in todos" :key='item.id'>
              <img src="./images/t1.png" alt="">
              <p>{{item.name}}</p>
            </li>

          </ul>
        </div>
        <div class="postext">
          <h3>小时光带你一起发现周边美好小店~</h3>
          <p>这里有最热门的城市无论你想去哪。。。。。。。。。。。。。。。</p>
          <div class="anmo">
            <div><router-link to="/goodshop"><span>查看更多</span></router-link></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        todos:[
          {id:1,imga:'./images/t1.png',name:'北京'},
          {id:2,imga:"./images/t2.png",name:'重庆'},
          {id:3,imga:"./images/t3.png",name:'深圳'},
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
#hearders{
  width: 100%;
  height: 340px;


  .topbox{
    height: 80%;
    width: 100%;
    position: relative;
    .imgs{
      height: 100px;

      text-align: center;
      line-height: 100px;
    }
    .bgcolor{
      height: 200px;
      background-color: #ffffff ;
    }
    .positiondiv{
      width: 90%;
      height: 280px;
      position: absolute;
      left: 5%;
      bottom: -55px;
      border: 1px solid #fff;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 0 3px #ccc;

      .postop{
        height: 40%;
        .postoph2{
          margin: 10px 0 20px 10px;
        }
        ul{
         display: flex;
         height: 100%;
         text-align: center;
          .ulli{
            flex: 1;
            img{
              width: 60px;
            }
          }
        }
      }
      .postext{
        text-align: center;
        margin-top: 20px;
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
            span{
              color:#000;
            }
          }
        }
      }
    }
  }
}
</style>

