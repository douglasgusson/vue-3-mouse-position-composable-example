<template>
  <MousePositionDisplay />
  <MouseTracker />
</template>

<script>
import MousePositionDisplay from "./components/MousePositionDisplay.vue";
import MouseTracker from "./components/MouseTracker.vue";

export default {
  name: "App",
  components: { MousePositionDisplay, MouseTracker },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

#app {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
