<template>
  <div class="zvm-doc-block">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'zvm-doc-block'
};
</script>

<style lang="postcss">
@import '../style/variable';

.zvm-doc-block {
  display: flex;
  margin-bottom: 20px;

  .highlight {
    flex: 1;
    box-sizing: border-box;

    pre {
      word-break: break-all;
    }
  }
}
</style>
