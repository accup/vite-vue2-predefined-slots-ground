<script setup>
import { computed } from "vue";

const props = defineProps({
  items: Array,
  orderBy: String,
  keyName: String,
});

const ordered = computed(() => {
  const ordered = props.items.map((item, index) => [index, item]);
  const key = props.orderBy;
  ordered.sort(([, a], [, b]) => a[key] - b[key]);
  return ordered;
});
</script>

<template>
  <ul>
    <TransitionGroup name="list">
      <template v-for="[index, item] in ordered">
        <li :key="props.keyName == null ? index : item[props.keyName]">
          <slot :name="props.keyName == null ? index : item[props.keyName]" />
        </li>
      </template>
    </TransitionGroup>
  </ul>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
