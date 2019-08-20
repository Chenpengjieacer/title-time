<template>
  <div id="login">
    <div class="top">
      <div>
        <img src="./images/logo.png" alt />
      </div>
    </div>
    <div class="bot">
      <div class="bot-number">
        <div class="number-phone">
          <span class="phone-sp1">+86</span>
          <input class="phone-inp" type="text" placeholder="输入手机号" v-model="inpval" @change="fn1" />
          <div class="isdiv" v-show="isphone">
            <span>手机号码格式错误</span>
          </div>
          <div class="isdiv" v-if="isphoneif === true">
            <span>手机号不能为空</span>
          </div>
        </div>
        <div class="phone-abc">
          <input type="text" placeholder="输入验证码" v-model="numcode" @keyup="iskey" />
        </div>

        <div class="phone-abcbut">
          <span v-show="show" @click="getCode">获取验证码</span>
          <span v-show="!show" class="count">{{count}}秒重发</span>
        </div>
        <div class="abcisdiv" v-show="iscode">
          <span>验证码错误</span>
        </div>
        <div class="abcisdiv" v-if="iscodeif === true">
          <span>验证码不能为空</span>
        </div>

        <router-link :to="qqq ? '/' : ''">
          <button class="phone-login" @click="fn2">登录</button>
        </router-link>
      </div>
      <div class="warp">
        <span class="link"></span>
        <div class="warp-p">其他方式登录</div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { watch } from 'fs';
export default {
  data() {
    return {
      qqq: false,
      show: true,
      count: "",
      timer: null,
      inpval: "",
      isphone: false,
      isphoneif: false,


      iscode: false,
      iscodeif: false,
      numcode: "",

      iphone: false,
      iphone2: false
    };
  },
  computed: {
    ...mapState("login", ["num"]), //获取仓库验证码值
    ...mapState('login',['oker']),

  },
  methods: {
    iskey(e){
      if(e.keyCode === 8){
        this.iscode = false
      }
    },
    ...mapActions("login", ["getphone"]), //派发请求事件
     ...mapActions('login',['setpass']),
    getCode() {
      this.fn1(); // 手机号码 input value  的  @change
      if (this.iphone === true) {
        //如果 手机号码规则没问题
        this.getphone(this.inpval); // 触发 派发事件 把手机号码传参过去

        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            //计时器 up
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
            if (this.count === 58) {
              let str = this.$store.state.login.num;
              this.$toast("验证码为:" + str); //弹窗显示 验证码
            }
          }, 1000); //计时器 down
        }
      }
    },

    fn1() {
      // 手机号码 input value  的  @change
      const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
      if (this.inpval === "") {
        this.isphone = false;
        this.isphoneif = true;
      } else if (!reg.test(this.inpval)) {
        this.isphone = true;
        this.isphoneif = false;
      } else {
        this.isphone = false;
        this.isphoneif = false;
        this.iphone = true;
      }
    },
    fn2() {
      let datas = {
        val:this.inpval,
        num:this.numcode
      }

      // 登录的 @click
      const reg = /^\d{4}$/; //正则表达式 验证码
      if (this.numcode === "") {
        this.iscode = false;
        this.iscodeif = true;
      } else if (!reg.test(this.numcode)) {
        this.iscode = true;
        this.iscodeif = false;
      } else {
        this.iscode = false; //判断input value 开关
        this.iscodeif = false;
        this.iphone2 = true;
      }

      if (this.iphone === true && this.iphone2 === true) {
           this.setpass(datas)
      }

       let str = this.$store.state.login.num;
       if(str !== this.numcode){
          this.iscode = true
       }else{
         this.iscode = false
       }
      if (this.inpval === "") {
        //如果手机号码value为空 则提示报错
        this.isphone = false;
        this.isphoneif = true;
      }
    }
  },
  watch:{
    oker(){
          localStorage.setItem("user",'userinfo')


        this.$router.replace('/')
        this.$store.state.login.oker = false

    }
  },

  mounted(){

  }

};
</script>

<style lang="scss" scoped>
#login {
  left: 0px;
  top: 20px;
  height: 665px;
  line-height: 20px;
  background-color: #fdb43f;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0);

  .top {
    margin: 45px 137px;
    left: 137px;
    top: 65px;
    width: 101px;
    height: 86px;
    border-radius: 10px;
    background: #ededed;
    img {
      width: 100%;
    }
  }
  .bot {
    display: inline-block;
    left: 28px;
    top: 196px;
    width: 318px;
    height: 417px;
    line-height: 20px;
    border-radius: 10px;
    background-color: rgba(248, 248, 248, 1);
    text-align: center;
    box-shadow: 0px 2px 6px 0px rgba(155, 154, 154, 1);
    border: 1px solid rgba(255, 255, 255, 0);

    .bot-number {
      text-align: center;
      height: 225px;
      .number-phone {
        margin: 45px 0 10px 0;
        display: inline-block;
        left: 45px;
        top: 241px;
        width: 288px;
        height: 43px;
        line-height: 43px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0px 1px 5px 0px rgba(219, 217, 217, 1);
        border: 1px solid rgba(255, 255, 255, 0);

        .phone-sp1 {
          width: 26px;
          height: 40px;
          color: rgba(16, 16, 16, 1);
          font-size: 14px;
          font-family: PingFangSC-regular;
          float: left;
          margin-left: 8px;
        }
        .phone-inp {
          height: 20px;
          color: #000;
          font-size: 14px;
          text-align: left;
          font-family: PingFangSC-regular;
          border: none;
          background: #f8f8f8;
        }
        .isdiv {
          position: relative;
          span {
            font-size: 12px;
            position: absolute;
            top: -10px;
            left: 83px;
            color: red;
          }
        }
      }
      .phone-abc {
        width: 187px;
        height: 43px;
        line-height: 20px;
        border-radius: 10px;
        box-shadow: 0px 1px 5px 0px rgba(219, 217, 217, 1);
        border: 1px solid rgba(255, 255, 255, 0);
        margin-left: 17px;
        float: left;
        margin-top: 10px;
        input {
          border: none;
          height: 43px;
          line-height: 43px;
          background: #f8f8f8;
        }
      }
      .phone-abcbut {
        width: 82px;
        height: 43px;
        line-height: 43px;
        border-radius: 10px;
        box-shadow: 0px 1px 5px 0px rgba(219, 217, 217, 1);
        border: 1px solid rgba(255, 255, 255, 0);
        float: left;
        margin-left: 19px;
        margin-top: 10px;
        .count {
          color: #ccc;
        }
      }

      .abcisdiv {
        height: 20px;
        span {
          font-size: 12px;
          color: red;
        }
      }

      .phone-login {
        width: 288px;
        height: 43px;
        line-height: 23px;
        border-radius: 10px;
        color: rgba(51, 50, 50, 1);
        font-size: 16px;
        text-align: center;
        box-shadow: 0px 1px 5px 0px rgba(219, 217, 217, 1);
        font-family: Arial;
        border: 1px solid rgba(255, 255, 255, 0);
        float: left;
        margin: 21px 17px;
      }
    }
    .warp {
      .link {
        display: inline-block;
        width: 318px;
        height: 2px;
        border-top: 1px dashed rgba(187, 187, 187, 1);
      }

      .warp-p {
        width: 72px;
        height: 17px;
        color: rgba(168, 166, 166, 1);
        font-size: 12px;
        text-align: center;
        display: inline-block;
        margin-top: 40px;
        font-family: PingFangSC-regular;
      }
    }
  }
}
</style>

