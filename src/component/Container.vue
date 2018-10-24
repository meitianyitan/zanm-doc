<template>
  <div class="zvm-doc-container zvm-doc-row" :class="{ 'zvm-doc-container--with-simulator': hasSimulator }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'zvm-doc-container',

  props: {
    hasSimulator: Boolean
  }
};
</script>

<style lang="postcss">
@import '../style/variable';

.zvm-doc-container {
  overflow: hidden;
  box-sizing: border-box;
  background-color: #fff;
  padding-left: $zvm-doc-nav-width;
  margin-top: 60px;

  &--with-simulator {
    padding-right: calc($zvm-doc-simulator-width + $zvm-doc-padding);

    @media (max-width: 1300px) {
      padding-right: calc($zvm-doc-simulator-small-width + $zvm-doc-padding);
    }
  }
}
</style>
