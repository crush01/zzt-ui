<template>
  <div
    class="flip-container"
    :style="{width: flipWidth, height: flipHeight}"
  >
    <div class="flipper">
      <div class="front"></div>
      <div class="back"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reversal',
  props: {
    flipWidth: {
      type: String,
      default() {
        return '320px'
      }
    },
    flipHeight: {
      type: String,
      default() {
        return '320px'
      }
    }
  }
}
</script>

<style lang="less">
.flip-container {
  perspective: 1000;
  &:hover {
    .flipper {
      transform: rotateY(180deg);
    }
  }
  .flipper {
    width: 100%;
    height: 100%;
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }
  .front, .back {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  .front {
    z-index: 2;
    background-color:tomato;
  }
  .back {
    background-color: turquoise;
    transform: rotateY(180deg)
  }
}
</style>