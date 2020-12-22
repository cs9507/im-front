<template>
  <div>
    <van-nav-bar title="信息"> </van-nav-bar>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <components :is="componentId" />
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="chat-o" name="list">消息</van-tabbar-item>
      <van-tabbar-item icon="search" name="friend">通讯录</van-tabbar-item>
      <van-tabbar-item icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        >我</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Search, NavBar, Icon, List, Cell } from "vant";
import list from "@/pages/list.vue";
import friend from "@/pages/friend.vue";
export default {
  name: "index",
  data() {
    return {
      componentId: "list",
      active: "list",
      value: "",
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Search.name]: Search,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [List.name]: List,
    [Cell.name]: Cell,
    [list.name]: list,
    [friend.name]: friend,
  },
  methods: {
    onChange(name) {
      this.componentId = name;
    },
  },
};
</script>

<style></style>
