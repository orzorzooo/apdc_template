<template>
  <div class="w-full px-1 h-full">
    <vueper-slides
      v-if="$vuetify.breakpoint.mobile"
      :infinite="true"
      class="no-shadow h-full w-3/4 text-center text-white mx-auto"
      arrows-outside
      bullets-outside
      :visible-slides="2"
      slide-multiple
      :slide-ratio="1 / 3"
      :dragging-distance="20"
      fixed-height="130px"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.name"
        :content="slide.content"
      >
        <template #content>
          <div class="p-1 h-100px">
            <div class="text-gray-100/70 text-sm font-bold mb-2">
              {{ slide.name }}
            </div>
            <v-img
              height="100%"
              @click="onClick(i)"
              :src="assetURL(slide.panorama, { width: 300, quality: 80 })"
              class="rounded-sm border-white"
              :class="{ 'border-1': selected_index == i }"
            >
            </v-img>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>

    <div v-else class="w-full">
      <v-list flat nav class="pt-20">
        <div v-for="(slide, i) in slides" :key="i">
          <v-list-item @click="onClick(i)" class="mb-5">
            <div class="w-full text-center">
              <v-img
                width="100%"
                height="150"
                @click="onClick(i)"
                :src="assetURL(slide.panorama, { width: 300, quality: 80 })"
                class="rounded-sm border-white"
                :class="{ 'border-1': selected_index == i }"
              >
              </v-img>
              <div class="text-xl font-bold text-gray-200/50">
                {{ slide.name }}
              </div>
            </div>
          </v-list-item>
        </div>
      </v-list>
    </div>
  </div>
</template>
<script>
import { assetURL } from "@/api/request";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide },
  props: ["slides", "selected_index"],
  methods: {
    assetURL,
    onClick(index) {
      if (this.selected_index == index) return;
      this.$emit("onSlideClick", index);
    },
  },
  data() {
    return {
      // slides: [],
    };
  },
};
</script>
<style scoped>
.ex--center-mode {
  width: 600px;
  max-width: 100%;
  margin: auto;
}
.vueperslides__bullet .default {
  background-color: rgb(255, 255, 255);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}
</style>
