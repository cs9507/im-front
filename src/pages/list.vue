<template>
  <van-list
    v-model="loading"
    :finished="finished"
    @load="onLoad"
  >
    <van-cell
      @click="handleLaunchChat($event,item)"
      v-for="(item, index) in list"
      :key="index"
      :value="item.date"
      class="cell-center"
    >
      <template #title>
        <van-image
          width="40px"
          height="40px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div>
          <span class="custom-title">{{ item.name }}</span>
          <span class="custom-title custom-message">{{ item.message }}</span>
        </div>
      </template>
    </van-cell>
  </van-list>
</template>

<script>
import { Icon, List, Cell, Image as VanImage } from "vant";
export default {
  name: "list",
  data() {
    return {
      list: [{
        name: "单元格1",
        userId: `client_${Math.random()}`, 
        message: "在不在",
        date:'16:09'
      },{
        name: "单元格2",
        userId: `client_${Math.random()}`, 
        message: "在不在1",
        date:'16:10'
      }],
      loading: false,
      finished: true,
    };
  },
  components: {
    [Icon.name]: Icon,
    [List.name]: List,
    [Cell.name]: Cell,
    [VanImage.name]: VanImage,
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push({ title: "单元格", value: "AA", message: "在不在" });
      //   }

      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
    },
    handleLaunchChat(e,arg){
      console.log(e,arg)
      this.$router.push({ path: 'chat', query: arg})
    }
  },
};
</script>

<style lang="scss" scoped>
.van-cell {
  align-items: center;
  text-align: left;
  .van-cell__title {
    display: flex;
    align-items: center;
    .custom-title {
      display: block;
      margin-left: 10px;
    }
    .custom-message{
        color:#969799;
    }
    .van-image {
      /deep/ & > img {
        border-radius: 5px;
      }
    }
  }
}
</style>
