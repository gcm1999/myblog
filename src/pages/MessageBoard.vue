<template>
  留言板
  <!-- {{ data.messageList }} -->
  <div class="msg-box clearFix">
    <div>
      <input type="text" v-model="user" class="user" placeholder="用户名" />
    </div>
    <div>
      <textarea type="text" v-model="message" class="user" placeholder="留言内容" />
    </div>
    <button @click="setMessage">提交</button>
  </div>

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

.msg-box
  padding: 10px;
  background-color: #eee;
  div
    padding 10px
    // background-color white
    .user
      // background-color: #eee;
      outline none
      border 1px solid black
    textarea
      width 100%
      height 100px
  button
    float right
    padding 3px 5px
    background-color white
    border 0
</style>