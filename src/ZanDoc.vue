<template>
  <div class="zan-doc">
    <zan-doc-header :config="config.header" :active="active" />
    <zan-doc-nav :nav-config="config.nav" :base="base" />
    <zan-doc-container :has-simulator="!!(simulator || simulators.length)">
      <zan-doc-content>
        <slot />
        <zan-doc-footer-nav :nav-config="config.nav" :base="base" />
      </zan-doc-content>
    </zan-doc-container>
    <zan-doc-simulator v-if="simulator" :src="simulator" />
    <zan-doc-simulator
      v-for="(url, index) in simulators"
      v-show="index === currentSimulator"
      :src="url"
      :key="url"
    />
  </div>
</template>

<script>
export default {
  name: 'zan-doc',

  props: {
    active: String,
    config: {
      type: Object,
      required: true
    },
    currentSimulator: Number,
    simulator: String,
    simulators: {
      type: Array,
      default: () => []
    },
    base: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="postcss">
@import './style/index.css';
</style>

