<template>
  <div class="mb-10">
    <div class="text-sm mb-1 text-orange-500 text-uppercase">{{ title }}</div>
    <div class="text-2xl md:text-3xl font-bold text-white">{{ text }}</div>
  </div>
</template>
<script>
export default {
  props: ["title", "text"],
};
</script>
