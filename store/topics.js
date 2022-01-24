export const state = () => ({
    topics: [],
})

// export const getters = {
//     post : state => state.topics
// }

export const mutations = {
    SET_TOPICS(state, topics) {
        state.topics = topics
    },
    LOAD_SINGLE_POST(state, topics) {
        state.topics = topics
    },
}

export const actions = {
    async loadPosts({ commit }) {
        let response = await this.$axios.get("/topic");
        let topics = response.data.data

        commit('SET_TOPICS', topics)
        // console.log(state.topics = data.data);
    },
    async loadSinglePost({ commit},{ topicId }) {
        let response = await this.$axios.get(`/topic/${ topicId }`);
        let topics = response.data.data

        commit('SET_TOPICS', topics)
        // console.log(topics)


    }
}