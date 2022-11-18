<template>
  <div class="bg-gray-100 py-30">
    <v-container>
      <div class="text-center mb-10 font-bold text-3xl text-orange-400">
        Projects
      </div>
      <v-row>
        <v-col cols="6" md="4" v-for="(item, i) in projects" :key="i">
          <ProjectCard
            :item="item"
            :delay="i * 200"
            @click.native="
              $router.push({ name: 'project', params: { id: item.id } })
            "
          ></ProjectCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ProjectCard from "@/components/Cards/project.vue";
import { get } from "@/api/request";
export default {
  components: { ProjectCard },
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
      params: { fields: "*,files.*" },
    });
  },
};
</script>
