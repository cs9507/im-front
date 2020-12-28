import io from "socket.io-client";

export default class Im {
  constructor(host, params) {
    this.host = host;
    this.params = params;
  }
  init() {
    const socket = io(this.host, this.params);
    socket.on("connect", () => {
      console.log("socket连接成功！");
      // 接收在线用户信息
      socket.on("online", (msg) => {
        console.log("#online,", msg);
      });

      // 系统事件
      socket.on("disconnect", (msg) => {
        console.log("#disconnect", msg);
      });

      socket.on("disconnecting", () => {
        console.log("#disconnecting");
      });

      socket.on("error", () => {
        console.log("#error");
      });
    });

    return socket;
  }
}
