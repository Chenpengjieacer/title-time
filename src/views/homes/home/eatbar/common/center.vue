<template>
  <div class="eatcenter">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div class="lidiv1">
          <img :src="item.img" alt="">
        </div>
        <div class="lidiv2">
          <div class="div2-no1">
            <p>{{item.sname}}</p>
          </div>
          <div class="div2-no2">
            <p>{{item.sadr}}</p>
          </div>
          <div class="div2-no3">
            <span>{{item.sres}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState,mapMutations,mapActions } from 'vuex'
export default {
    computed:{
      ...mapState('list',['list'])
    },

    methods:{
      ...mapActions('list',['addlistaction'])

    },

    mounted(){
      this.addlistaction()
  //  this.$store.dispatch('list/addlistaction')

    }
}
</script>

<style lang="scss" scoped>
.eatcenter{
  margin-top: 45px;
  width: 100%;
  background: #ccc;

  ul{
    width: 100%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 20px;
    li{
      display: flex;
      width: 350px;
      height: 175px;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0px 3px 7px 0px rgba(170, 170, 170, 1);
      margin: 10px 0;
      background-color: #fff;
      margin-left: 12px;


      .lidiv1{
        flex: 1;
        overflow: hidden;
        img{
        border-radius: 10px 0 0 10px;
        width: 100%;
        height: 100%;
        }
      }
      .lidiv2{
        flex: 1;
        padding-left: 10px;

        .div2-no1{
          height: 40px;
          text-align: left;
          line-height: 20px;
          margin-top: 20px;
          p{
            font-weight: 600;
            font-size: 14px;
          }
        }
        .div2-no2{
          text-align: left;
          p{
            font-size: 12px;
            color: rgba(0, 0, 0, 0.6);
            line-height: 20px;
          }
        }
        .div2-no3{
           text-align: left;
           height: 40px;
           position: relative;
           img{
            position: absolute;
            top: 10px;
            left: 0;
           }
           span{
             font-size: 11px;
            width: 200px;

           }
        }
      }
    }
  }
}
</style>
