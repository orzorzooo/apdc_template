<template>
  <div>
    <v-container>
      <v-row class="h-500px text-gray-100" align="center">
        <v-col data-aos="fade-left">
          <div class="mb-10">
            <div class="text-sm mb-1 text-orange-500">PANORAMA</div>
            <div
              class="text-2xl md:text-3xl font-bold text-white leading-loose"
            >
              720 環景拍攝
            </div>
          </div>
          <div class="leading-loose">
            環景一詞源自於panorama，簡稱pano。環景攝影即英文panoramic
            photography。就攝影發展而言，早已邁入數位化，相對於異於傳統單一視角畫面，對於物體有所謂的環物（Object
            VR）攝影。相對的，對於環境景物的呈現，就稱為環景（Pano VR）
          </div>
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
