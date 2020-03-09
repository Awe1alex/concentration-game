<template>
  <div class="container bg-white py-5 fullpage">
    <h1 class="text-center">Concentration game</h1>
    <p class="mt-3">
      Concentration, also known as Match Match, Match Up, Memory, Pelmanism,
      Shinkei-suijaku, Pexeso or simply Pairs, is a card game in which all of
      the cards are laid face down on a surface and two cards are flipped face
      up over each turn. The object of the game is to turn over pairs of
      matching cards.
    </p>
    <h3 class="text-center">
      Try it out
      <router-link to="/game">here</router-link>
    </h3>
    <h6 class="text-center mt-3">
      You also can check game instructions
      <router-link to="/instructions">here</router-link>
    </h6>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
