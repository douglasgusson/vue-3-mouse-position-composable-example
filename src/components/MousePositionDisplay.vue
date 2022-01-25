<template>
  <div class="mouse-position">
    <div>
      <strong>X</strong>
      <span>{{ x }}</span>
    </div>
    <div>
      <strong>Y</strong>
      <span>{{ y }}</span>
    </div>
  </div>
</template>

<script>
import { useMousePosition } from "../composables/useMousePosition";

export default {
  name: "MousePositionDisplay",
  setup() {
    const { x, y } = useMousePosition();

    return { x, y };
  },
};
</script>

<style scoped>
.mouse-position {
  background-color: #222;
  color: #fff;
  padding: 0.4rem;
  min-width: 120px;
  font-size: 1.2rem;
  text-align: center;
  border-radius: 0.4rem;
}

strong {
  margin-right: 0.5rem;
}

strong::after {
  content: ":";
}
</style>
