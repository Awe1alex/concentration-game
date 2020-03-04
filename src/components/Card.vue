<template>
  <div class="bg-warning">
    <p>{{ id }}</p>
    <p>{{ link }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    link: Number
  }
};
</script>
