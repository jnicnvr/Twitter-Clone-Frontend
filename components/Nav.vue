<template>
  <div>
    <v-app-bar class="white" app dense fixed>
      <v-container>
        <v-toolbar dense flat class="mx-60">
          <v-toolbar-title>NuxtJs Forum</v-toolbar-title>
          
          <v-spacer></v-spacer>
          <v-toolbar-items class="mx-2">
            <v-btn text depressed>Home</v-btn>
            <v-btn text depressed>Topic</v-btn>
            <v-btn to="/discuss" text depressed>Discussion</v-btn>
          </v-toolbar-items>
          <v-avatar color="orange" size="36">
            <span class="white--text headline">
              <img
                src="https://pbs.twimg.com/profile_images/1404486408887230465/Q3H8d4I5_400x400.jpg"
                alt
              />
            </span>
          </v-avatar>
        </v-toolbar>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dropdown: false,
    };
  },
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push("/");
    },
  },
};
</script>