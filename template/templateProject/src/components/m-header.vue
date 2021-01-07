<template>
  <header class="m-header-comp">
    <div class="content-wrapper">
      <slot/>
    </div>
  </header>
</template>

<script>
/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 自定义页头组件
 */
export default {
  name: 'm-header',
};
</script>

<style scoped lang="scss">
.m-header-comp {
  height: 0;
  overflow: hidden;
}
</style>
