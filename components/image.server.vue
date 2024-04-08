<script setup>
defineProps({
  src: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div>
    <NuxtImg :src="src" width="500" height="500" />
  </div>
</template>
