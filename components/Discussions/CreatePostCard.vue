<template>
  <div>
    <v-card class="mx-auto w-full" outlined>
      <v-list-item three-line>
        <v-list-item-avatar size="50" color="grey">
          <img
            src="https://pbs.twimg.com/profile_images/1404486408887230465/Q3H8d4I5_400x400.jpg"
            alt
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text-h5">
            <v-text-field v-model="form.title" dense label="Add Title"></v-text-field>
            <!-- <v-text-field v-model="form.post" dense label="Whats on your mind?"></v-text-field> -->
            <v-textarea
              v-model="form.body"
              label="Whats on your mind?"
              counter
              maxlength="300"
              full-width
              single-line
              required
            ></v-textarea>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions class="py-0">
        <v-list-item class="grow">
          <v-row align="center" justify="end">
            <v-btn @click="submit" outlined text rounded class="px-10 bg-blue-600" dark>Post</v-btn>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    async submit() {
      await this.$axios.$post("/topic", this.form);
      return this.$router.push("/discuss");
    },
  },
};
</script>

<style>
</style>