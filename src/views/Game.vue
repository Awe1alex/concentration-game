<template>
  <div class="container bg-white h-100 pt-2 fullpage">
    <h1 class="text-center">The Game</h1>
    <div class="row text-center justify-content-center">
      <div class="mr-5">
        <h4>{{ gameActive ? "Score:" : "Final Score:" }} {{ score }}</h4>
      </div>
      <div class>
        <h4>
          {{ gameActive ? `You will get ${turnScore} points` : "Good Job!" }}
        </h4>
      </div>
    </div>
    <div class="game-row">
      <div class="game-col">
        <div class="game-wrapper">
          <div class="game-container">
            <button
              v-for="(card, id) in cards"
              :key="id"
              class="game-card"
              :class="{
                clicked:
                  clicked1 === id ||
                  clicked2 === id ||
                  usedColors.includes(card.color)
              }"
              :disabled="
                clicked1 === id ||
                  clicked2 === id ||
                  usedColors.includes(card.color)
              "
              @click="cardClick(id, card.color)"
            >
              <div class="face" :class="card.color"></div>
              <div class="back"></div>
            </button>
          </div>
          <div v-if="!gameActive" class="start-game">
            <button class="btn btn-primary btn-lg cp" @click="startGame()">
              Start New Game
            </button>
          </div>
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
      turnScore: 100,
      bestScore: false,
      cards: [],
      clicked1: false,
      clicked2: false,
      active: false,
      usedColors: [],
      gameActive: true
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
      this.activeColor = false;
      this.gameActive = true;
      this.usedColors = [];
    },
    cardClick(id, color) {
      // First card clicked
      if (this.clicked1 === false) {
        this.clicked1 = id;
        this.activeColor = color;
      }
      // Second card clicked
      else if (this.clicked2 === false) {
        this.clicked2 = id;
        // Check if color match
        if (this.activeColor === color) {
          // AddScore
          this.score += this.turnScore;
          // Add color as used
          this.usedColors.push(color);
          if (this.usedColors.length === 8) {
            this.endGame();
          }
          this.resetTurn();
        }
        // Reduce points
        else {
          this.reducePoints();
        }
        setTimeout(() => {
          this.clearClicked();
        }, 300);
      }
    },
    resetTurn() {
      this.turnScore = 100;
    },
    reducePoints() {
      if (this.turnScore > 0) {
        this.turnScore -= 5;
      }
    },
    clearClicked() {
      this.clicked1 = false;
      this.clicked2 = false;
    },
    endGame() {
      this.gameActive = false;
    }
  }
};
</script>
