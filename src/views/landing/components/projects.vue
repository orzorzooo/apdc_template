<template>
  <div class="bg-gray-800 py-30">
    <v-container>
      <Title :title="'projects'" :text="'最新專案'"></Title>

      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="(item, i) in projects" :key="i">
          <CardProject
            class="cursor-pointer"
            :item="item"
            :delay="i * 200"
            @click.native="
              $router.push({ name: 'project', params: { id: item.id } })
            "
          ></CardProject>
        </v-col>
      </v-row>
      <div class="w-full mx-auto text-center mt-10">
        <v-btn
          x-large
          block
          color="orange"
          dark
          outlined
          @click="$router.push({ name: 'projects' })"
          >所有專案</v-btn
        >
      </div>
    </v-container>
  </div>
</template>
<script>
import CardProject from "@/components/Cards/project.vue";
import Title from "@/components/title.vue";
import { get } from "@/api/request";
export default {
  components: { CardProject, Title },
  methods: {
    alertMsg() {
      alert("click event is happen");
    },
  },
  data() {
    return {
      projects: null,
    };
  },
  async created() {
    const { data } = await get({
      collection: "projects",
      params: { fields: "*,files.*", limit: 3 },
    });
    this.projects = data;
  },
};
</script>
