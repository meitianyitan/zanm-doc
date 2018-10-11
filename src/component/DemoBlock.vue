<template>
  <section class="zan-doc-demo-block">
    <h2 class="zan-doc-demo-block__title">{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'zan-doc-demo-block',

  props: {
    title: String
  }
};
</script>

<style lang="postcss">
@import '../style/variable';

.zan-doc-demo-block {
  &__title {
    margin: 0;
    font-weight: normal;
    font-size: 14px;
    color: $zan-doc-text-light-blue;
    padding: 40px 15px 15px;
  }

  &:first-of-type {
    .zan-doc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>
