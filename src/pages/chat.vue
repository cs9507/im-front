<template>
  <div>
    <van-nav-bar
      :title="friendName"
      left-text="返回"
      right-text="按钮"
      @click-left="handleLeftBack"
      left-arrow
    >
      <template #right>
        <van-icon name="ellipsis" size="20" />
      </template>
    </van-nav-bar>
    <div class="message-content"></div>
    <div
      class="message-bottom van-hairline--top-bottom van-tabbar van-tabbar--fixed"
    >
      <van-field v-model="msg" center autofocus clearable left-icon="smile-o">
        <template #button>
          <van-button size="small" type="primary" @click="handleSendInfo"
            >发送</van-button
          >
        </template>
      </van-field>
    </div>
  </div>
</template>

<script>
import { NavBar, Icon, Field, Button } from "vant";
export default {
  name: "chat",
  data() {
    return {
      friendName: "",
      msg: "",
      socket: null,
      socketId: "",
      userId: "",
    };
  },
  created() {
    this.handleDealParams();
    this.initIm();
  },
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Field.name]: Field,
    [Button.name]: Button,
  },
  methods: {
    initIm() {
      this.socketId = this.$socket.id;
      console.log(this.socketId);
      this.$socket.on(this.socketId, (msg) => {
        console.log(msg);
      });
    },
    handleLeftBack() {
      this.$router.go(-1);
    },
    handleDealParams() {
      const { name, userId } = this.$route.query;
      this.friendName = name;
      this.userId = userId;
    },
    handleSendInfo() {
      this.$socket.emit("/", {
        target: this.socketId,
        payload: {
          msg: this.msg,
          userId: this.userId,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.message-bottom {
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ebedf0;
}
</style>
