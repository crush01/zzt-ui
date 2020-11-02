<template>
  <div class="text-overflow-container" :style="{ width: overWidth }">
    <div class="first-content">
      {{ text }}
    </div>
    <div class="all-content">
      {{ text }}
    </div>
    <div class="last-content">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default() {
        return "";
      },
    },
    overWidth: {
      type: String,
      default() {
        return "100px";
      },
    },
  },
};
</script>

<style lang="less">
.text-overflow-container {
  position: relative;
  // height: auto;
  &:hover {
    .all-content, .last-content {
      z-index: 3;
      white-space: unset;
      width: 100%;
      // height: auto;
      transition: height 2s;
    }
    .first-content {
      display: none;
    }
  }
  .first-content,
  .all-content {
    width: 100%;
    overflow: hidden; /**超出隐藏 */
    text-overflow: ellipsis; /**超出... */
    white-space: nowrap; // 文本不换行
    position: absolute;
    z-index: 2;
  }
  .all-content {
    width: 80%;
    text-overflow: unset;
  }
  .last-content {
    width: 50%;
    overflow: hidden;
    z-index: 1;
    white-space: nowrap;
  }
}
</style>
