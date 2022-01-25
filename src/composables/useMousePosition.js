import { onMounted, onUnmounted, reactive, toRefs } from "vue";

export function useMousePosition() {
  const position = reactive({
    x: 0,
    y: 0,
  });

  const update = (event) => {
    position.x = event.clientX;
    position.y = event.clientY;
  };

  onMounted(() => {
    window.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });

  return toRefs(position);
  // return {x: 10, y: 99};
}
