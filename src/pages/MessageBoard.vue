<template>
  留言板
  <!-- {{ data.messageList }} -->
  <ul class="list-group">
    <li class="list-group-item">
      用户名:<input type="text" v-model="user" /> 留言内容:<input
        type="text"
        v-model="message"
      />
      <input type="button" value="提交" @click="setMessage" />
    </li>
    <li
      class="list-group-item"
      v-for="(msg, index) in messageList"
      :key="msg.id"
    >
      <span class="badge">{{ msg.time.slice(0, 19) }}</span>
      {{ msg.user }}:
      {{ msg.msg }}
    </li>
  </ul>
</template>
<script>
import { reqGetMessageList, reqSetMessage } from "@/api";
import { onMounted, reactive, toRefs } from "vue";
export default {
  name: "",
  setup() {
    const data = reactive({
      messageList: {},
      user: "",
      message: "",
    });
    onMounted(() => {
      getMessageList();
    });

    const RefData = toRefs(data);

    function getMessageList() {
      reqGetMessageList().then((res) => {
        // console.log(res);
        data.messageList = res.data;
      });
    }

    function setMessage() {
      const queryParam = { user: data.user, message: data.message };
      if (data.user && data.message) {
        reqSetMessage(queryParam).then((res) => {
          data.user = "";
          data.message = "";
          getMessageList();
        });
      } else {
        alert("打点字再提交啊大哥o.O");
      }
    }

    return { ...RefData, setMessage };
  },
};
</script>
<style scoped></style>
