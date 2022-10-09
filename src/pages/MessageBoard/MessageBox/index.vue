<template>
  <div class="msg-box clearFix">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="col">
        <el-input
          v-model="user"
          placeholder="用户名"
          maxlength="10"
          class="w-50 m-2"
          show-word-limit
        >
        </el-input>
      </el-col>
      <el-col class="col">
        <el-input
          v-model="message"
          :autosize="{ minRows: 4, maxRows: 4 }"
          type="textarea"
          placeholder="留言内容"
        />
      </el-col>
      <el-col class="col">
        <el-button type="primary" @click="setMessage">提交</el-button>
      </el-col>
    </el-row>
    <!-- <button @click="setMessage">提交</button> -->
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
        reqSetMessage(queryParam)
          .then((res) => {
            // console.log(res);
            alert("留言成功！");
            data.message = "";
            setUser(data.user);
            // getMessageList();
            context.emit("getMsg");
          })
          .catch((rej) => {
            alert(rej);
            console.log(rej);
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
  background-color pink
  padding 10px
  .col
    margin-top 10px
  button
    float right
</style>
