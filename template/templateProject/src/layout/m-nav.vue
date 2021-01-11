<template>
  <el-aside class="aside-wrapper" :class="[state?'':'close']">
    <header class="logo-wrapper">
      logo
      <span v-if="state">XXX系统</span>
    </header>
    <el-menu
      :default-active="currentPath"
      class="nav-wrapper"
      @select="selectHandler"
      :collapse="!state">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="/home/page1">页面1</el-menu-item>
      </el-submenu>
      <el-menu-item index="/home/page2">
        <i class="el-icon-menu"></i>
        <span slot="title">页面2</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 页面布局导航组件
 */

export default {
  name: 'mNavComp',
  computed: {
    state() {
      return this.$store.state.collapse;
    },
    currentPath() {
      return this.$route.path;
    },
  },
  methods: {
    // 切换
    switchHandler() {
      this.$store.commit('change_collapse', !this.$store.state.collapse);
    },

    // 点击
    selectHandler(path) {
      if (this.$router.path === path) return;
      this.$router.push(path);
    },
  },
};
</script>

<style scoped lang="scss">
.logo-wrapper {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  span {
    margin-left: 1em;
  }
}

.aside-wrapper {
  display: flex;
  flex-direction: column !important;
  transition: all linear .3s;

  &.close {
    width: 64px !important;
  }
}

.nav-wrapper {
  flex: 1;
  overflow-x: hidden;
}
</style>
