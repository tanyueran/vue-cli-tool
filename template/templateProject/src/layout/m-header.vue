<template>
  <el-header class="header-wrapper">
    <a
      class="switch-btn"
      @click="switchHandler"
      href="javascript:void(0)"
      :class="[state?'el-icon-s-fold':'el-icon-s-unfold']"></a>

    <ul>
      <li>{{ username }}</li>
      <li>
        <a @click="logoutHandler" href="javascript:void(0);">
          退出
        </a>
      </li>
    </ul>
  </el-header>
</template>

<script>
/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 页面布局头部组件
 */

export default {
  name: 'mHeaderComp',
  computed: {
    state() {
      return this.$store.state.collapse;
    },
    username() {
      return this.$store.state.user.userInfo.userName;
    },
  },
  methods: {
    // 切换
    switchHandler() {
      this.$store.commit('change_collapse', !this.$store.state.collapse);
    },

    // 退出登录
    logoutHandler() {
      this.$router.replace('/login');
      this.$store.dispatch('user/logout');
    },
  },
};
</script>

<style scoped lang="scss">
.header-wrapper {
  border-bottom: 1px solid #efefef;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > ul {
    display: flex;
    margin-right: 2em;

    > li {
      margin-left: 10px;
    }
  }
}

.switch-btn {
  font-size: 20px;
  color: #909090;
}
</style>
