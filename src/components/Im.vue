<template>
  <van-button type="primary" @click="sendMessage">主要按钮</van-button>
</template>

<script>
import { io } from 'socket.io-client';
export default {
  name: 'Im',
  data(){
    return{
      socket:null
    }
  },
  props: {
    msg: String
  },
  methods:{
    sendMessage(){
     console.log(this.socket)
     this.socket.emit('/v1/im/new-message', '第一条消息');
      console.log('发送成功')
    }
  },
  mounted(){
    this.socket = io("ws://localhost:7001/", {
      reconnectionDelayMax: 10000,
      query: {
        auth: "Im"
      }
    });
    this.socket.connect()
    this.socket.on('connect', () => {
      console.log('socket连接成功！');
  
    });
    
    this.socket.on('/v1/im/new-message', message => {
      console.log(message)
    });
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
