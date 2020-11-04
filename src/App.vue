<template>
  <div id="app">
    <h3>反转效果组件：</h3>
    <reversal />
  </div>
</template>

<script>
import Reversal from "../packages/Reversal";

export default {
  name: "App",
  components: {
    Reversal,
  },
  data() {
    return {
      textList: [
        {
          text: "import Reversal from ../packages/Reversal",
          isOut: false,
        },
        {
          text: "import Revers",
          isOut: false,
        },
        {
          text: "import Reversal from ../packages/Reversal",
          isOut: true,
        },
        {
          text: "import Reversal from ../packages/Reversal",
          isOut: false,
        },
      ],
    };
  },
};
</script>

<style></style>
