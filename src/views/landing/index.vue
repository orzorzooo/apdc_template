<template>
  <div>
    <v-sheet>
      <div class="h-92vh bg-orange-400">
        <div class="">
          <v-img :src="bg" height="92vh">
            <v-container class="h-full text-white">
              <v-row class="h-full" align="center">
                <v-col sm="12" md="6">
                  <div class="text-6xl font-bold text-left">APDC</div>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eum, nesciunt? Id quibusdam provident consequatur dolore
                    ipsa harum praesentium sequi odio eaque doloremque repellat,
                    porro at ad veniam corporis. Fugiat, dolore?
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </div>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import bg from "@/assets/images/landing-hero-bg.png";
export default {
  components: {},
  data() {
    return {
      bg,
    };
  },
};
</script>
