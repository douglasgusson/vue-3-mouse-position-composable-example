<template>
  <span class="mouse-tracker" :style="{ left: `${x}px`, top: `${y}px` }"></span>
</template>

<script>
import { useMousePosition } from "../composables/useMousePosition";

export default {
  name: "MouseTracker",
  setup() {
    const { x, y } = useMousePosition();

    return { x, y };
  },
};
</script>

<style scoped>
.mouse-tracker {
  border: 2px solid #00ff00;
  position: absolute;
  top: 0;
  left: 0;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
</style>
