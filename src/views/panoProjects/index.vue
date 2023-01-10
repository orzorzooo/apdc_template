<template>
  <div class="bg-gray-800">
    <div class="bg-gray-800">
      <v-img :height="$vuetify.breakpoint.xsOnly ? '30vh' : '50vh'" :src="bg">
        <div
          class="flex justify-center items-center text-white h-full"
          data-aos="fade"
          data-aos-delay="300"
          data-aos-anchor-placement="top-center"
        >
          <div class="w-2/3">
            <Title :title="'720 panorama'" :text="'環景專案'"></Title>
          </div>
        </div>
      </v-img>
    </div>

    <About></About>
    <v-container>
      <div class="py-30">
        <Title :title="'projects'" :text="'最新專案'"></Title>

        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(item, i) in panoProjects"
            :key="i"
          >
            <CardProject
              class="cursor-pointer"
              :item="item"
              :delay="i * 200"
              @click.native="
                $router.push({ name: 'pano', params: { id: item.id } })
              "
            ></CardProject>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
import Pano from "./components/pano.vue";
import About from "./components/about.vue";
import CardProject from "@/components/Cards/project.vue";
import Title from "@/components/title.vue";
import { get, assetURL } from "@/api/request";
export default {
  components: { Pano, About, CardProject, Title },
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
      assetURL,
      bg: require("@/assets/images/panorama-bg-01.png"),
    };
  },
  async created() {
    this.panoProjects = await get({
      url: "pano_projects",
      params: { fields: "id, name, description, image, files.*" },
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
