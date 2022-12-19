<template>
  <div class="bg-gray-800">
    <div class="bg-gray-800">
      <v-img
        :height="$vuetify.breakpoint.xsOnly ? '30vh' : '50vh'"
        :src="
          assetURL('117c02a4-22df-4d88-a0a2-b66093bd7e0b', {
            quality: 80,
            width: 1920,
          })
        "
      >
        <div
          class="flex justify-center items-center text-white h-full"
          data-aos="fade"
          data-aos-delay="300"
        >
          <div class="w-2/3">
            <div class="text-sm mb-1 text-orange-500">OUR WORKS</div>
            <div
              class="text-3xl md:text-3xl font-bold border-l-3 border-orange-500 px-3"
            >
              所有專案
            </div>
          </div>
        </div>
      </v-img>
    </div>

    <v-container class="py-10">
      <v-row>
        <v-col
          cols="6"
          md="4"
          v-for="(item, i) in projects"
          :key="i"
          data-aos="fade"
          data-aos-offset="-300"
          @click="$router.push({ name: 'project', params: { id: item.id } })"
          class="cursor-pointer"
        >
          <v-img
            v-if="item.files && item.files.length > 0"
            :src="
              assetURL(item.files[0].directus_files_id, {
                quality: 30,
                width: 500,
              })
            "
            height="200"
          >
          </v-img>
          <div
            class="text-sm font-bold border-l-3 border-orange-500 px-3 text-white mt-2"
          >
            {{ item.name }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown";
import ImgIcon from "@/components/imgIcon.vue";
import Gallery from "./components/gallery.vue";
import { get, assetURL } from "@/api/request";
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export default {
  props: ["id"],
  components: { VueMarkdown, ImgIcon, Gallery },
  data() {
    return {
      projects: null,
      assetURL,
    };
  },
  async created() {
    this.projects = await get({
      url: "projects",
      params: { fields: "*,files.*" },
    });
  },
  computed: {
    featureImg() {
      if (!this.projects) return;
      const randomIndex = getRandomInt(this.projects.length);
      const file = this.projects[randomIndex].files[0];
      return assetURL(file.directus_files_id, {
        quality: 80,
        width: 1920,
      });
    },
  },
};
</script>
