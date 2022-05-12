<template>
  <div id="user">
    <div class="login-info">
      <div class="width">
        <div style="height: 300px; color: white">
          <el-steps direction="vertical" :active="index" :align-center="true">
            <el-step title="开始"></el-step>
            <el-step title="填写账号"></el-step>
            <el-step title="输入密码">></el-step>
            <el-step title="提交">></el-step>
          </el-steps>
        </div>
      </div>
    </div>
    <div class="login-other">
      <h2>欢迎使用调度管理系统！</h2>
      <el-form class="el-from" ref="form" label-width="120">
        <el-form-item label="账号">
          <el-input v-model="account.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="account.password"></el-input>
        </el-form-item>
        <el-form-item style="text-align: right">
          <el-button type="primary" @click="loginClick">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "login",
  setup() {
    const store = useStore();
    const account = reactive({
      name: "",
      password: "",
    });
    const loginClick = () => {
      store.dispatch("loginAction", { ...account });
      // getLogin(account).then((res) => {
      //   console.log(res);
      // });
    };
    return {
      account,
      loginClick,
    };
  },
};
</script>

<style>
#user {
  width: 100vw;
  height: 100vh;
  background-size: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login-info {
  background: linear-gradient(to bottom right, #fafcb1, #3f86f2);
  height: 100%;
  line-height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 40%;
  align-items: center;
}
.width {
  width: 50%;
}
.login-other {
  padding-left: 50px;
  flex: 1;
  text-align: left;
}
.login-other h2 {
  margin: 20px 0;
  font-size: 27px;
}
.el-from {
  width: 60%;
}
.is-vertical {
  color: #fff;
}
</style>
