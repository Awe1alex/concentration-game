<template>
  <div id="app">
    <header>
      <b-navbar toggleable="sm" type="dark" variant="primary">
        <div class="container">
          <b-navbar-brand href="#/">Concentration Game</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto text-left">
              <b-nav-item href="#/">Home</b-nav-item>
              <b-nav-item href="#/game">The Game</b-nav-item>
              <b-nav-item href="#/instructions">Instructions</b-nav-item>
              <b-nav-item href="#/about">About Us</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss"></style>
