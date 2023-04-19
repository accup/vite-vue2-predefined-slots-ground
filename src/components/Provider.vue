<script setup>
import { computed, reactive, readonly } from "vue";

const props = defineProps({
  data: Object,
  computed: Object,
});

const slotProps = {};

if (props.data != null) {
  slotProps.data = reactive(props.data);
}

if (props.computed != null) {
  slotProps.computed = readonly(
    reactive(
      Object.fromEntries(
        Object.entries(props.computed).map(([key, getter]) => [
          key,
          computed(getter),
        ])
      )
    )
  );
}
</script>

<template>
  <div>
    <slot v-bind="slotProps" />
  </div>
</template>
