<template>
  <div>
    <v-card class="mx-auto pt-0" flat outlined>
      <v-list three-line>
        <v-card-title class="py-0">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{context.user.name}}</v-list-item-title>
            <v-list-item-subtitle>{{topic.created_at}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-card-title>

        <v-card-text class="py-0">
          <v-list-item-content>
            <v-list-item-title class="text-h4">{{topic.title}}</v-list-item-title>
            <v-list-item-subtitle class="text-h6">{{context.body}}</v-list-item-subtitle>
          </v-list-item-content>
     
        </v-card-text>

        <v-card-actions class="py-0">
          <v-list-item class="grow">
            <v-row>
              <v-icon class="mr-1">mdi-heart</v-icon>
              <span class="subheading mr-2">256</span>
              <span class="mr-1">·</span>
              <v-icon class="mr-1">mdi-share-variant</v-icon>
              <span class="subheading">45</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  
  props: {
    topic: Object,
    context: Object,
  },
};
</script>

<style>
</style>