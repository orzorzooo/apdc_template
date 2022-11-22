<template>
  <div>
    <v-container>
      <v-row class="h-500px" align="center">
        <v-col data-aos="fade-left">
          <div class="text-3xl font-bold">720 環景拍攝</div>
        </v-col>
        <v-col data-aos="fade-right">
          <v-img :src="panoIcon01"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import panoIcon01 from "@/assets/images/panorama-icon-01.svg";
export default {
  data() {
    return {
      panoIcon01,
    };
  },
};
</script>
