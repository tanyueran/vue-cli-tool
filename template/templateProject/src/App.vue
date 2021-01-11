<template>
  <div id="app">
    <router-view/>
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
  height: 100%;

  &:before {
    content: '';
    display: table;
  }
}
</style>
