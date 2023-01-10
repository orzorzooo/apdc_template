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
      projects: [
        {
          id: 1,
          name: "專案名稱01",
          description: "lorem paragraph",
          image:
            "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          name: "專案名稱02",
          description: "lorem paragraph",
          image:
            "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 3,
          name: "專案名稱03",
          description: "lorem paragraph",
          image:
            "https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    };
  },
  async created() {
    this.projects = await get({
      url: "projects",
      params: { fields: "*,files.*", limit: 3 },
    });
  },
};
</script>
