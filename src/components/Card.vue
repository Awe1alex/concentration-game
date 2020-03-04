<template>
  <div
    class="game-card"
    :style="clicked ? `background-color: ${color}` : ''"
  ></div>
</template>

<script>
export default {
  props: {
    id: Number,
    link: Number,
    clickable: Boolean,
    clicked1: Boolean,
    clicked2: Boolean
  },
  data() {
    return {
      colors: [
        "#cf3a30",
        "#e000f5",
        "#5c6bcc",
        "#5ec259",
        "#c2c936",
        "#db8d2e",
        "#15cbd1",
        "#f25ab3"
      ]
    };
  },
  computed: {
    color() {
      return this.colors[this.link - 1];
    },
    clicked() {
      if (this.clicked1 || this.clicked2) {
        return true;
      }
      return false;
    }
  }
};
</script>
