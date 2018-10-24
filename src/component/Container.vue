<template>
  <div class="zan-doc-container zan-doc-row" :class="{ 'zan-doc-container--with-simulator': hasSimulator }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'zan-doc-container',

  props: {
    hasSimulator: Boolean
  }
};
</script>

<style lang="postcss">
@import '../style/variable';

.zan-doc-container {
  overflow: hidden;
  box-sizing: border-box;
  background-color: #fff;
  padding-left: $zan-doc-nav-width;
  margin-top: 80px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1);

  &--with-simulator {
    padding-right: calc($zan-doc-simulator-width + $zan-doc-padding);

    @media (max-width: 1300px) {
      padding-right: calc($zan-doc-simulator-small-width + $zan-doc-padding);
    }
  }
}
</style>
