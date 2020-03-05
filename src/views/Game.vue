<template>
  <div class="container bg-white h-100">
    <h1 class="text-center">The Concentration Game</h1>
    <div class="row">
      <div class="col-12 col-sm-6 col-sm-3">
        <h2>{{ score }}</h2>
      </div>
      <div class="col-12 col-sm-6 col-sm-3">
        <h2>{{ turnScore }}</h2>
      </div>
      <div class="col-12 col-sm-6 col-sm-3">{{ clicked1 }}</div>
      <div class="col-12 col-sm-6 col-sm-3">{{ clicked2 }}</div>
    </div>
    <div class="game-wrapper">
      <div class="game-container">
        <div
          v-for="(card, id) in cards"
          :key="id"
          class="game-card"
          :class="{ clicked: clicked1 === id }"
          @click="cardClick(id)"
        >
          <div class="face" :class="card.color"></div>
          <div class="back"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import generate from "../utils/geterate";

export default {
  name: "Game",
  data() {
    return {
      score: 0,
      turnScore: 10,
      bestScore: false,
      cards: [],
      clicked1: false,
      clicked2: false,
      active: false
    };
  },
  mounted() {
    this.startGame();
  },
  methods: {
    startGame() {
      this.cards = generate();
      this.score = 0;
      this.resetTurn();
      this.clicked1 = false;
      this.clicked2 = false;
      this.active = false;
    },
    cardClick(id) {
      this.clicked1 = id;
      // if (clickable) {
      //   if (this.clicked1 === false) {
      //     this.clicked1 = id;
      //     this.active = link;
      //   } else {
      //     if (this.clicked1 !== id) {
      //       this.clicked2 = id;
      //       if (this.active === link) {
      //         this.removeCards(link);
      //         this.score += this.turnScore;
      //         this.resetTurn();
      //       } else {
      //         this.reducePoints();
      //         this.active = false;
      //         this.clearClicked();
      //       }
      //       this.clearClicked();
      //     }
      //   }
      // }
    },
    resetTurn() {
      this.turnScore = 10;
    },
    reducePoints() {
      if (this.turnScore > 0) {
        this.turnScore -= 1;
      }
    },
    clearClicked() {
      this.clicked1 = false;
      this.clicked2 = false;
    },
    removeCards(l) {
      const cards = this.cards.map(el => {
        if (el.link === l) {
          el.clickable = false;
        }
        return el;
      });
      this.cards = cards;
    }
  }
};
</script>
