<template>
  <el-container class="container-wrapper">
    <m-nav/>

    <el-container class="content-wrapper">
      <m-header/>

      <el-main>

        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="includes">
            <router-view/>
          </keep-alive>
        </transition>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 布局组件
 */
import mNav from './m-nav.vue';
import mHeader from './m-header.vue';

export default {
  name: 'LayoutComp',
  components: {
    mNav,
    mHeader,
  },
  data() {
    return {
      includes: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.container-wrapper {
  height: 100%;
}

.content-wrapper{
  flex-direction: column;
}
</style>
