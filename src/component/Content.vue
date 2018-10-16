<template>
  <div :class="['zan-doc-content', `zan-doc-content--${currentPage}`]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'zan-doc-content',

  computed: {
    currentPage() {
      const { path } = this.$route;
      if (path) {
        return path.split('/').slice(-1)[0];
      }
      return this.$route.name;
    }
  }
};
</script>

<style lang="postcss">
@import '../style/variable';

.zan-doc-content {
  flex: 1;
  position: relative;
  padding: 0 0 75px;

  a {
    color: $zan-doc-blue;
  }

  section {
    padding: 10px $zan-doc-padding;
    overflow: hidden;

    > h1,
    > h2,
    > h3,
    > h4,
    > h5,
    > h6 {
      line-height: 1.5;
      font-weight: normal;
      margin: 20px 0 10px;
      color: $zan-doc-black;
    }

    > h1 {
      font-size: 36px;
    }

    > h2 {
      font-size: 30px;
      margin-bottom: 25px;
    }

    > h3 {
      font-size: 22px;
      margin-top: 45px;
    }

    > h2 + h3 {
      margin-top: 25px;
    }

    > h4 {
      font-size: 16px;
      margin-bottom: 15px;
    }

    > h5 {
      font-size: 14px;
    }

    > h6 {
      font-size: 14px;
      color: $zan-doc-dark-grey;
    }

    > p {
      margin: 15px 0;
      font-size: 14px;
      line-height: 26px;
      color: $zan-doc-text-color;
    }

    > ul,
    > ol {
      padding: 15px 0;
      background-color: $zan-doc-code-background-color;
    }

    > ul li,
    > ol li {
      color: $zan-doc-text-color;
      font-size: 14px;
      line-height: 22px;
      margin: 5px 0 5px 20px;
      padding-left: 15px;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 6px;
        margin-top: 8px;
        border-radius: 50%;
        box-sizing: border-box;
        border: 1px solid $zan-doc-dark-grey;
      }

      li {
        margin-left: 0;
      }
    }

    > hr {
      border: 0 none;
      border-top: 1px solid #eee;
    }

    p > code,
    li > code,
    table code {
      margin: 2px;
      padding: 2px 7px;
      display: inline;
    }
  }

  blockquote {
    padding: 16px;
    margin: 20px 0;
    font-size: 14px;
    border-radius: 4px;
    background-color: #ecf9ff;
    color: rgba(52, 73, 94, .8);
    border-left: 5px solid #50bfff;
  }

  table {
    width: 100%;
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 45px;
    background-color: #fff;
    border-collapse: collapse;
    color: $zan-doc-text-color;

    th {
      padding: 8px 10px;
      text-align: left;
      font-weight: normal;
      background-color: $zan-doc-code-background-color;

      &:first-child {
        padding-left: 10px;
      }
    }

    td {
      padding: 8px;
      border-bottom: 1px solid $zan-doc-code-background-color;
    }

    code {
      font-size: 13px;
      padding: 0 8px;
      font-family: inherit;
      word-break: keep-all;
    }
  }

  &--changelog {
    section {
      padding-bottom: 30px;

      > h3 {
        + p {
          margin: 0;

          code {
            margin: 0;
          }
        }

        a {
          color: inherit;
          font-size: 24px;
          -webkit-font-smoothing: auto;
        }

        &:not(:first-of-type) {
          margin-top: 50px;
        }
      }
    }
  }
}
</style>