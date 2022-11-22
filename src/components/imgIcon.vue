<template>
  <div class="bg-gray-400 h-300px p-5 flex items-center">
    <v-img :src="img"></v-img>
  </div>
</template>
<script>
import img from "@/assets/images/img-icon-white.svg";
export default {
  data() {
    return {
      img,
    };
  },
};
</script>
