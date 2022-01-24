<template>
  <div>
    <div class="flex justify-center items-center">
      <div class="w-full">
        <div v-for="(context, index) in topics.post" :key="index">
          <Show :context="context" :topic="topics" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Show from "../../components/Discussions/ShowCard.vue";
export default {
  layout: "navigation",
  head() {
    return {
      // title: `${this.topics.user.name} on NuxtJs Forum: "${this.topics.title}" / NuxtJs Forum`,
    };
  },
  components: { Show },
  data() {
    return {};
  },
  async fetch({ store, params }) {
    await store.dispatch("topics/loadSinglePost", { topicId: params.id });
  },
  computed: {
    ...mapState("topics", ["topics"]),
  },
};
</script>

<style>
</style>