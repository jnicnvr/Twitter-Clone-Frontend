<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      :fullscreen="$vuetify.breakpoint.smOnly"
      :hide-overlay="$vuetify.breakpoint.smOnly"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          rounded
          class="px-10 py-6 my-2"
        >New Discussion</v-btn>
      </template>
      <v-card rounded="xl">
        <v-card-title>
          <v-btn class="bg-gray-100" @click="dialog = false" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <!-- <span class="text-h5">New Discussion</span> -->
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="form.title" label="Add Title" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="form.body"
                  label="Whats on your mind?"
                  counter
                  maxlength="300"
                  full-width
                  single-line
                  required
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="submit">Post</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      form: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    async submit() {
      await this.$axios.$post("/topic", this.form);
      return this.$router.push("/homie");
    },
  },
};
</script>

<style>
</style>