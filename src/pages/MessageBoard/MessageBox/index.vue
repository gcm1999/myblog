<template>
  <div class="msg-box clearFix">
    <div>
      <input type="text" v-model="user" class="user" placeholder="用户名" />
    </div>
    <div>
      <textarea
        @keyup.enter="setMessage"
        type="text"
        v-model="message"
        class="user"
        placeholder="留言内容"
      />
    </div>
    <button @click="setMessage">提交</button>
  </div>
</template>
<script>
import { reqSetMessage } from "@/api";
import { reactive, toRefs } from "vue";
import { getUser, setUser } from "@/utils";
export default {
  name: "MessageBox",
  setup(props, context) {
    const data = reactive({
      user: getUser() || "",
      message: "",
    });

    // console.log(context);

    function setMessage() {
      const queryParam = { user: data.user, message: data.message };
      if (data.user.trim() && data.message.trim()) {
        reqSetMessage(queryParam).then((res) => {
          // console.log(res);
          data.message = "";
          setUser(data.user);
          // getMessageList();
          context.emit("getMsg");
        });
      } else {
        alert("打点字再提交啊大哥o.O");
      }
    }

    const RefData = toRefs(data);

    return { setMessage, ...RefData };
  },
};
</script>
<style lang="stylus" scoped>
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
