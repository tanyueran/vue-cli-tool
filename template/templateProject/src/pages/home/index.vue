<template>
  <el-container>
    <m-nav class="app-nav-box"></m-nav>
    <el-container>
      <m-header/>
      <el-main class="el-main-content">
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="include">
            <router-view/>
          </keep-alive>
        </transition>
      </el-main>
      <el-footer/>
    </el-container>
  </el-container>
</template>

<script>
/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 首页
 */
export default {
  name: 'index',
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">

</style>
