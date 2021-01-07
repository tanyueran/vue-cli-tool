<template>
  <div id="app">
    <router-view/>

    <!--回到顶部-->
    <el-backtop>
      <!-- eslint-disable -->
      <svg t="1609382968629" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="13306" width="14" height="14">
        <path
          d="M32.579584 414.208a103.936 103.936 0 0 0 0 151.1424l9.6256 9.216a115.712 115.712 0 0 0 157.9008 0L433.168384 351.5392a115.712 115.712 0 0 1 157.9008 0L823.926784 574.464a115.712 115.712 0 0 0 157.9008 0l9.6256-9.1136a103.936 103.936 0 0 0 0-151.1424L591.069184 31.232a115.712 115.712 0 0 0-158.0032 0l-400.384 382.976zM512.016384 1024c61.44 0 111.616-48.128 111.616-106.8032V329.5232c0-58.7776-50.176-106.8032-111.616-106.8032-61.44 0-111.616 48.128-111.616 106.8032v587.6736C400.400384 975.872 450.576384 1024 512.016384 1024z"
          p-id="13307" fill="#ffffff"></path>
      </svg>
      <!-- eslint-enable -->
    </el-backtop>
  </div>
</template>

<script>
/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 全局根组件
 */
export default {
  name: 'APP',
  data() {
    return {};
  },

};
</script>

<style lang="scss">
#app {
  &:before {
    content: '';
    display: table;
  }
}
</style>
