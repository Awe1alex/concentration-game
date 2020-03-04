<template>
  <div class="container">
    <h1 class="text-center">The Concentration Game</h1>
    <div class="row">
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import generate from "../utils/geterate";

export default {
  name: "Game",
  data() {
    return {
      scrore: 0,
      turnScore: 10,
      bestScore: false,
      cards: []
    };
  },
  mounted() {
    console.log(generate());
  }
};
</script>
