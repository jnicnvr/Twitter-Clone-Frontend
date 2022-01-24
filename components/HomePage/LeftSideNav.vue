<template>
  <v-navigation-drawer
    :width="width"
    :permanent="$vuetify.breakpoint.mdOnly"
    :mini-variant="$vuetify.breakpoint.mdOnly"
    :stateless="$vuetify.breakpoint.mdOnly"
    left
    app
  >
    <v-container>
      <v-row no gutter>
        <v-col xl="6" lg="4"></v-col>
        <v-col lg="8" xl="6" md="12" sm="12" xs="12" class="pa-md-0 h-screen">
          <v-list dense nav>
            <v-list-item>
              <v-list-item-content>
                <img
                  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1592751328987/VzrtgcQNF.jpeg?auto=compress"
                  alt="vuetify"
                />
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="hidden-md-only">
              <v-list-item-content>
               <popup-post-card />
                <!-- <v-btn
                  outlined
                  text
                  rounded
                  class="px-10 py-6 bg-blue-600"
                  dark
                  elevation="2"
                >New Discussion</v-btn> -->
              </v-list-item-content>
            </v-list-item>

            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content class="pa-0">
                <v-list-item-title class="font-weight-black headline pa-5">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
           
            <v-list-item>
              <v-list-item-avatar size="36" color="grey">
                <img
                  src="https://pbs.twimg.com/profile_images/1404486408887230465/Q3H8d4I5_400x400.jpg"
                  alt
                />
              </v-list-item-avatar>
            </v-list-item>
          </v-list>
           <v-spacer></v-spacer>         
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
import PopupPostCard from '../Discussions/PopupPostCard.vue';
export default {
  components: { PopupPostCard },
  data: () => ({
    items: [
      { title: "My Feed", icon: "mdi-menu" },
      { title: "Explore", icon: "mdi-compass" },
      { title: "Topics", icon: "mdi-card-text" },
      { title: "Profile", icon: "mdi-account" },
    ],
  }),
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 400;
        case "md":
          return 367;
        case "lg":
          return 367;
        case "xl":
          return 567;
      }
    },
  },
};
</script>

<style>
</style>