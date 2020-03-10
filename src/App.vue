<template>
  <div id="app">
    <header>
      <b-navbar toggleable="sm" type="dark" variant="primary">
        <div class="container">
          <b-navbar-brand href="#/">Concentration Game</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto text-left">
              <b-nav-item to="/" :class="{ active: $route.path === '/'}">Home</b-nav-item>
              <b-nav-item to="/game" :class="{ active: $route.path === '/game'}">The Game</b-nav-item>
              <b-nav-item to="/instructions" :class="{ active: $route.path === '/instructions'}">Instructions</b-nav-item>
              <b-nav-item to="/about" :class="{ active: $route.path === '/about'}">About Us</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss"></style>
