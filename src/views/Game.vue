<template>
  <div class="container">
    <h1 class="text-center">The Concentration Game</h1>
    <div class="row">
      <div v-for="card in cards" :key="card.id" class="col-3">
        <card :id="card.id" :link="card.link" />
      </div>
    </div>
  </div>
</template>

<script>
import generate from "../utils/geterate";
import Card from "../components/Card";

export default {
  name: "Game",
  components: {
    Card
  },
  data() {
    return {
      scrore: 0,
      turnScore: 10,
      bestScore: false,
      cards: [],
      clicked: false
    };
  },
  mounted() {
    console.log(generate());
    this.cards = generate();
  }
};
</script>
