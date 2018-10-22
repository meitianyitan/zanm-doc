<template>
  <section class="zvm-doc-demo-block">
    <h2 class="zvm-doc-demo-block__title">{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'zvm-doc-demo-block',

  props: {
    title: String
  }
};
</script>

<style lang="postcss">
@import '../style/variable';

.zvm-doc-demo-block {
  &__title {
    margin: 0;
    font-weight: normal;
    font-size: 14px;
    color: $zvm-doc-text-light-blue;
    padding: 40px 15px 15px;
  }

  &:first-of-type {
    .zvm-doc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>
