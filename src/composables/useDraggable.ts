import {ref, onMounted, onBeforeUnmount} from 'vue';

export function useDraggable(elRef: any) {
  const isDragging = ref(false);

  function onMouseDown(e: MouseEvent) {
    isDragging.value = true;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  function onMouseMove(e: MouseEvent) {
    if (!elRef.value) return;
    elRef.value.style.left = e.pageX + 'px';
    elRef.value.style.top = e.pageY + 'px';
  }

  function onMouseUp() {
    isDragging.value = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  onMounted(() => {
    if (elRef.value) {
      elRef.value.addEventListener('mousedown', onMouseDown);
    }
  });

  onBeforeUnmount(() => {
    if (elRef.value) {
      elRef.value.removeEventListener('mousedown', onMouseDown);
    }
  });

  return {isDragging};
}
