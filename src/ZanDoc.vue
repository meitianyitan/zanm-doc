<template>
  <div class="zvm-doc">
    <zvm-doc-header :config="config.header" :active="active" />
    <div class="zvm-doc-layout">
      <zvm-doc-nav :nav-config="config.nav" :base="base" />
      <zvm-doc-container :has-simulator="!!(simulator || simulators.length)">
        <zvm-doc-content>
          <slot />
          <zvm-doc-footer-nav :nav-config="config.nav" :base="base" />
        </zvm-doc-content>
      </zvm-doc-container>
      <zvm-doc-simulator v-if="simulator" :src="simulator" />
      <zvm-doc-simulator
        v-for="(url, index) in simulators"
        v-show="index === currentSimulator"
        :src="url"
        :key="url"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'zvm-doc',

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

.zvm-doc {
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: auto;
  overflow: auto;

  .zvm-doc-layout {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex: auto;
    overflow: auto;
  }
}
</style>

