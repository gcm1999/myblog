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
      reqGetMessageList().then((res) => {
        // console.log(res);
        data.messageList = res.data;
      });
    });

    const RefData = toRefs(data);

    function setMessage() {
      const queryParam = { user: data.user, message: data.message };
      reqSetMessage(queryParam).then(res => {
        console.log(res);
      });
    }

    return { ...RefData, setMessage };
  },
};
</script>
<style scoped></style>