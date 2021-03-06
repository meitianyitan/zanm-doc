<template>
  <div class="zvm-doc-nav-container">
    <div class="zvm-doc-nav">
      <div class="zvm-doc-nav__item" v-for="(item, index) in navConfig" :key="index">
        <zvm-doc-nav-link :item="item" :base="base" />
        <div v-if="item.children">
          <div class="nav-item" v-for="(navItem, index) in item.children" :key="index">
            <zvm-doc-nav-link :item="navItem" :base="base" />
          </div>
        </div>
        <div v-if="item.groups" v-for="(group, index) in item.groups" :key="index">
          <div class="zvm-doc-nav__group-title">{{ group.groupName }}</div>
          <div>
            <div :key="index" class="zvm-doc-nav__subitem" v-for="(navItem, index) in group.list" v-if="!navItem.disabled">
              <zvm-doc-nav-link :item="navItem" :base="base" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink';

export default {
  name: 'zvm-doc-nav',

  components: {
    [NavLink.name]: NavLink
  },

  props: {
    navConfig: Array,
    base: {
      type: String,
      default: ''
    }
  },

  created() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  },

  methods: {
    onScroll() {
      const { pageYOffset: offset } = window;
      this.top = Math.max(0, 60 - offset);
    }
  }
};
</script>

<style lang="postcss">
@import '../style/variable';

.zvm-doc-nav-container {
  flex: 0 0 220px;
  width: 220px;
  padding: 0 0 55px;
  border-right: 1px solid #e8e8e8;
  overflow: hidden;
}

.zvm-doc-nav {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  min-width: $zvm-doc-nav-width;
  max-width: $zvm-doc-nav-width;
  box-shadow: 1px 0 1px 0 rgba(0, 0, 0, .08);
  width: 240px;
  padding: 25px 0 0;

  .zvm-doc-nav__item {
    width: 220px;
  }

  @media (min-width: $zvm-doc-row-max-width) {
    left: 50%;
    margin-left: calc(-$zvm-doc-row-max-width/2);
  }

  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(69, 90, 100, .2);
  }

  &__item,
  &__subitem {
    a {
      margin: 0;
      display: block;
      color: #455a64;
      font-size: 16px;
      padding: 10px calc($zvm-doc-padding/2) 10px $zvm-doc-padding;
      line-height: 24px;
      transition: all .3s;

      &.active {
        position: relative;
        color: $zvm-doc-blue;
        background: #f0faff;

        &::after {
          content: "";
          display: block;
          width: 2px;
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          background: #2d8cf0;
        }
      }
    }
  }

  &__item {
    > a {
      font-weight: bold;
    }
  }

  &__subitem {
    a {
      font-size: 14px;

      &:hover {
        color: $zvm-doc-blue;
      }
    }

    span {
      opacity: .6;
      font-size: 13px;
    }
  }

  &__group-title {
    font-size: 14px;
    line-height: 40px;
    padding-left: $zvm-doc-padding;
    color: rgba(69, 90, 100);
    font-weight: bold;
  }

  @media (max-width: 1300px) {
    &__item,
    &__subitem {
      a {
        line-height: 22px;
      }
    }

    &__subitem {
      a {
        font-size: 13px;
      }
    }
  }
}
</style>

