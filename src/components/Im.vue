<template>
  <van-button type="primary" @click="sendMessage">主要按钮</van-button>
</template>

<script>
import { io } from "socket.io-client";
export default {
  name: "Im",
  data() {
    return {
      socket: null,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    sendMessage() {
      this.socket.emit("chat", 'hello world!');
      this.socket.emit("/", 'hello world!');
    },
    initSocket() {
      this.socket = io("http://127.0.0.1:7001/", {
        query: {
          auth: "tokens",
        },
      });
      console.log(this.socket)
      this.socket.on("connect", () => {
        console.log("connect!");
        console.log("socket连接成功！");
      });
      this.socket.on("res", (msg) => {
        console.log("res from server: %s!", msg);
      });
    },
  },
  mounted() {
    this.initSocket()
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
