<template>
  <div>
    <div class="bg h-100vh md:h-50vh">
      <v-container class="h-full py-0">
        <v-row align="end" class="h-full">
          <v-col cols="6" md="6" align-self="center">
            <div class="font-bold text-3xl text-white">
              <div>環景導覽</div>
              <div>PANORAMA</div>
            </div>
          </v-col>
          <v-col md="6" class="p-0">
            <v-img :src="bg" width="100%"> </v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <About></About>

    <div>
      <v-container>
        <v-row>
          <v-col
            v-for="(item, i) in panoProjects"
            :key="i"
            cols="12"
            md="4"
            @click="$router.push({ name: 'pano', params: { id: item.id } })"
          >
            <PanoProjectCard :item="item"></PanoProjectCard>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import Pano from "./components/pano.vue";
import About from "./components/about.vue";
import PanoProjectCard from "@/components/Cards/panoProject.vue";
import { get } from "@/api/request";
export default {
  components: { Pano, PanoProjectCard, About },
  data() {
    return {
      dialog: false,
      selectedProject: null,
      panoProjects: [
        {
          name: "test01",
          featureImg: "4b7aede6-baa0-4f26-9889-382331b7b7b9",
        },
      ],

      bg: require("@/assets/images/panorama-bg-01.png"),
    };
  },
  async created() {
    this.panoProjects = await get({
      url: "pano_projects",
      params: { fields: "id, name, description, image" },
    });
  },
};
</script>
<style scoped>
.bg {
  background: rgb(147, 0, 255);
  background: linear-gradient(
    62deg,
    rgba(147, 0, 255, 1) 0%,
    rgba(67, 0, 177, 1) 100%
  );
}
</style>
