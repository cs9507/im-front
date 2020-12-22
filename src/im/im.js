import io from "socket.io-client";

export default class Im {
  constructor(host,params) {
    this.host = host;
    this.params = params
  }
  init() {
    const socket =  io(this.host,this.params);
    socket.on("connect", () => {
        console.log("socket连接成功！");
      });
    return socket
  }
}
