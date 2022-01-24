<template>
  <v-layout class="group">
    <v-flex lg12 xl12 md12>
      <v-card class="mx-auto w-full group-hover:bg-gray-100 cursor-pointer" outlined>
        <nuxt-link :to="{name: 'discuss-id', params:{id: topic.id}}">
          <v-card-title>
            <v-list-item>
              <v-list-item-avatar size="36" color="grey">
                <img
                  src="https://pbs.twimg.com/profile_images/1404486408887230465/Q3H8d4I5_400x400.jpg"
                  alt
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="text-md font-semibold">{{post.user.name}}</v-list-item-title>
                <v-list-item-subtitle>
                  <span class="text-xs italic">{{post.user.email}} . {{topic.created_at}}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <!-- <v-spacer></v-spacer> -->
          </v-card-title>

          <v-card-subtitle>
            <v-list-item-title class="headline hover:underline text-black">{{topic.title}}</v-list-item-title>
          </v-card-subtitle>

          <v-card-text>
            <v-list-item-subtitle class="text-sm text-black">{{post.body}}</v-list-item-subtitle>
          </v-card-text>

          <v-card-actions class="py-0">
            <v-list-item>
              <v-row>
                <v-icon class="mr-1">mdi-heart</v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1">mdi-share-variant</v-icon>
                <span class="subheading">45</span>
                <v-spacer></v-spacer>
                <span
                  class="float-right px-6 font-semibold text-yellow-600 bg-transparent rounded-full border border-yellow-600 hover:text-white hover:bg-yellow-600"
                >Laravel</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </nuxt-link>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: {
    topic: Object,
    post: Object,
  },
};
</script>