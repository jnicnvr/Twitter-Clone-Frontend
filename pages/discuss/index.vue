<template>
  <div>
    <create-post />
    <div v-for="(topic, index) in topics" :key="index">
      <div v-for="(post, index) in topic.post" :key="index">
        <PostCard :post="post" :topic="topic" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CreatePost from "../../components/Discussions/CreatePostCard.vue";
import PostCard from "../../components/Discussions/PostCard.vue";
export default {
  components: { CreatePost, PostCard },
  layout: "navigation",
  data() {
    return {
      form: {
        title: "",
        body: "",
      },
      // topics: [],
    };
  },
  computed: {
    ...mapState("topics", ["topics"]), //same name dapat ang vuex js name at yung sa state
  },
  async fetch({ store }) {
    await store.dispatch("topics/loadPosts");
  },
};
</script>

<style>
</style>