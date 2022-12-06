<template>
  <div class="bg-gray-200">
    <!-- <v-img
      height="50vh"
      :src="
        assetURL('b37c2ed7-3f89-450c-9026-33a25fee5636.jpg', {
          quality: 80,
          width: 1920,
        })
      "
    ></v-img> -->
    <v-container class="py-30">
      <v-row>
        <v-col cols="12" md="4" v-for="(item, i) in projects" :key="i">
          <v-card
            height="250"
            data-aos="fade"
            :data-aos-delay="i * 100"
            data-aos-offset="-300"
            flat
            color="rgba(0,0,0,0)"
            @click="$router.push({ name: 'project', params: { id: item.id } })"
          >
            <v-img
              v-if="item.files && item.files.length > 0"
              :src="
                assetURL(item.files[0].directus_files_id, {
                  quality: 30,
                  width: 500,
                })
              "
              class="h-50"
            >
            </v-img>
            <div class="text-md font-light leading-relaxed">
              {{ item.name }}
            </div>
          </v-card>
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
};
</script>
