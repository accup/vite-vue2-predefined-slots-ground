<script setup>
const props = defineProps({
  mode: String,
  mod: Number,
});

const emit = defineEmits();

const push = () => emit("push");
const pop = () => emit("pop");
const asc = () => emit("update:mode", "asc");
const desc = () => emit("update:mode", "desc");
const modAsc = () => emit("update:mode", "mod_asc");
const modDesc = () => emit("update:mode", "mod_desc");
</script>

<template>
  <div>
    <div>
      Array /
      <button type="button" @click="push">Push</button>
      <button type="button" @click="pop">Pop</button>
    </div>
    <div>
      Sort by number /
      <button type="button" @click="asc" :disabled="mode == 'asc'">Asc</button>
      <button type="button" @click="desc" :disabled="mode == 'desc'">
        Desc
      </button>
    </div>
    <div>
      Sort by mod: <input :value="mod" @input="(e) => emit('update:mod', e.target.valueAsNumber)" type="number" min="1" /> /
      <button type="button" @click="modAsc" :disabled="mode == 'mod_asc'">
        Asc
      </button>
      <button type="button" @click="modDesc" :disabled="mode == 'mod_desc'">
        Desc
      </button>
    </div>
  </div>
</template>
