<template>
  <v-app id="inspire">
    <!-- left -->
    <left-side-nav />

    <!-- right -->
    <right-side-nav />

    <!-- App Bar -->
    <v-app-bar dense outlined flat app>
      <!-- <v-app-bar-nav-icon ></v-app-bar-nav-icon> -->

      <v-toolbar-title>Home</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>
    <!-- buttom nav -->
    <bottom-nav />
  </v-app>
</template>

<script>
import PopupPostCard from "../components/Discussions/PopupPostCard.vue";
import BottomNav from "../components/HomePage/BottomNav.vue";
import LeftSideNav from "../components/HomePage/LeftSideNav.vue";
import RightSideNav from "../components/HomePage/RightSideNav.vue";
export default {
  components: { RightSideNav, LeftSideNav, BottomNav, PopupPostCard },
  data: () => ({ drawer: null }),
};
</script>