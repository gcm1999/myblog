<template>
  留言板
  <!-- {{ data.messageList }} -->
  <MessageBox @getMsg="getMessageList"></MessageBox>

  <ul class="list-group">
    <!-- <li class="list-group-item">
      用户名:<input type="text" v-model="user" /> 留言内容:<input
        type="text"
        v-model="message"
      />

      <input type="button" value="提交" @click="setMessage" />
    </li> -->
    <li
      class="list-group-item"
      v-for="(msg, index) in messageList"
      :key="msg.id"
    >
      <!-- <span class="badge">{{ timeHandler(msg.time) }}</span>
      {{ msg.user }}:
      {{ msg.msg }} -->
      <div class="msg" :username="msg.user.slice(0, 1)">
        <span>{{ msg.user }}</span>
        <span>{{ timeHandler(msg.time) }}</span>
        <div>{{ msg.msg }}</div>
      </div>
    </li>
  </ul>
</template>
<script>
import { reqGetMessageList } from "@/api";
import { onMounted, reactive, toRefs } from "vue";
import { timeHandler } from "@/utils";
import MessageBox from "./MessageBox/index.vue";
export default {
  name: "",
  setup() {
    const data = reactive({
      messageList: [],
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

    return { ...RefData, timeHandler, getMessageList };
  },
  components: { MessageBox },
};
</script>
<style lang="stylus" scoped>
.msg:before
  content attr(username)
  text-align center
  line-height 50px
  font-size 36px
  border-radius 50%
  display inline-block
  width 50px
  height 50px
  position absolute
  background-color pink
  left -50px
  top 2px
.msg
  display flex
  flex-direction column
  margin-left 50px
  position relative
  span
    margin-left 10px
  span:nth-of-type(1)
    font-size 24px
  span:nth-of-type(2)
    font-size 12px
    color #666
  div
    margin 10px
    background-color: #eee;
    padding 10px
    font-size 16px
</style>