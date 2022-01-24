<template>
  <v-navigation-drawer width="30vw" class="hidden-md-and-down" right absolute app>
    <v-container class="h-screen">
      <v-row>
        <v-col cols="12">
          <v-list class="pb-0 -mb-5">
            <v-list-item>
              <v-text-field dense placeholder="Search" outlined prepend-inner-icon="mdi-magnify"></v-text-field>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12">
           <v-list class="pt-0">
      <v-list-item>
        <v-card outlined rounded="xl">
          <v-card-text>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5">Top Articles</v-list-item-title>
                <v-list-item-subtitle>Last Week</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
          <v-row>
            <v-card-text class="mx-auto pt-0" max-width="400">
              <v-divider></v-divider>
              <v-card-title class="py-0">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Evan You</v-list-item-title>
                </v-list-item-content>
              </v-card-title>

              <v-card-text
                class="py-0 subtitle-1"
              >"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."</v-card-text>

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
            </v-card-text>

            <v-card-text class="mx-auto pt-0" max-width="400">
              <v-divider></v-divider>
              <v-card-title class="py-0">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Evan You</v-list-item-title>
                </v-list-item-content>
              </v-card-title>

              <v-card-text
                class="py-0 subtitle-1"
              >"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."</v-card-text>

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
            </v-card-text>
          </v-row>
        </v-card>
      </v-list-item>
    </v-list>
        </v-col>
      </v-row>
    </v-container>

   
  </v-navigation-drawer>
</template>

<script>
export default {};
</script>

<style>
</style>