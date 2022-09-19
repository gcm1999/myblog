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
      <span class="badge">{{ timeHandler(msg.time) }}</span>
      {{ msg.user }}:
      {{ msg.msg }}
    </li>
  </ul>
</template>
<script>
import { reqGetMessageList, reqSetMessage } from "@/api";
import { onMounted, reactive, toRefs } from "vue";
import { getUser, setUser, timeHandler } from "@/utils";
export default {
  name: "",
  setup() {
    const data = reactive({
      messageList: [],
      user: getUser() || "",
      message: "",
    });
    onMounted(() => {
      getMessageList();
    });

    const RefData = toRefs(data);

    function getMessageList() {
      reqGetMessageList().then((res) => {
        data.messageList = res.data;
      });
    }
    function setMessage() {
      const queryParam = { user: data.user, message: data.message };
      if (data.user.trim() && data.message.trim()) {
        reqSetMessage(queryParam).then((res) => {
          // console.log(res);
          data.message = "";
          setUser(data.user);
          getMessageList();
        });
      } else {
        alert("打点字再提交啊大哥o.O");
      }
    }

    return { ...RefData, setMessage, timeHandler };
  },
};
</script>
<style scoped></style>
