<template>
  <div id="login">
    <div class="top">
      <div>图片</div>
    </div>
    <div class="bot">
      <div class="bot-number">
        <div class="number-phone">
          <span class="phone-sp1">+86</span>
          <input class="phone-inp" type="text" placeholder="输入手机号" />
        </div>
        <div class="phone-abc">
          <input type="text" placeholder="输入验证码" />
        </div>
        <div class="phone-abcbut">59m</div>
        <router-link to="/">
          <button class="phone-login">登录</button>
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
export default {};
</script>

<style lang="scss" scoped>
#login {
  left: 0px;
  top: 20px;
  height: 665px;
  line-height: 20px;
  background-color: rgba(198, 197, 197, 1);
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

