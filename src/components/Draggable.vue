<template>
  <div ref="el" class="draggable">
    <slot />
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useDraggable} from '../composables/useDraggable';

const el = ref<HTMLElement | null>(null);
const {isDragging} = useDraggable(el);
</script>

<style scoped>
.draggable {
  position: absolute;
  cursor: grab;
  user-select: none;
}
.draggable:active {
  cursor: grabbing;
}
</style>
