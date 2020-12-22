<template>
  <van-button type="primary" @click="sendMessage">主要按钮</van-button>
</template>

<script>
import Im from '@/im/im'
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
      this.socket.emit("/", 'hello world!');
    },
    initSocket() {
       this.socket = new Im('http://127.0.0.1:7001/').init({
        query: {
          auth: "tokens",
        },
      })
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
