<template>
  <div class="login-page-wrapper">
    <div class="content-wrapper">
      <div class="form-wrapper">
        <h2 class="text-center">[%projectName%]</h2>
        <el-form
          :model="userObj"
          label-position="top"
          ref="loginForm"
          label-width="60px">
          <el-form-item
            label="账号"
            :rules="[{required:true,message:'账号不可为空',}]"
            prop="username">
            <el-input placeholder="请输入账号" v-model="userObj.username"></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            :rules="[{required:true,message:'密码不可为空',}]"
            prop="password">
            <el-input placeholder="请输入密码" v-model="userObj.password"></el-input>
          </el-form-item>
          <el-form-item class="text-center">
            <el-button :loading="loading" @click="loginBtnHandler">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 登录页面
 * */
import {
  getUserInfo,
  login,
} from '@/api/user';

export default {
  name: 'loginPage',
  data() {
    return {
      loading: false,
      userObj: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    loginBtnHandler() {
      this.$refs.loginForm.validate()
        .then(() => {
          this.loginHandler();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 登录
    loginHandler() {
      this.loading = true;
      login({
        utk: this.userObj.username,
      })
        .then((res) => {
          this.$store.commit('user/set_token', res);
          // 请求用户信息
          getUserInfo()
            .then((result) => {
              this.$store.commit('user/set_user_info', result);
              this.$router.replace('/');
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              this.loading = false;
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.login-page-wrapper {
  position: relative;
  height: 100%;
}

h2 {
  font-size: 24px;
  font-weight: 500;
}

.content-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 370px;
  transform: translate(-50%, -50%);
}

.form-wrapper {
  padding: 3em 3rem 1em;
  transition: all .3s;
  border: 1px solid #efefef;

}

.tip-wrapper {
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
