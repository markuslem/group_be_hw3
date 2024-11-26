<template>
  <div v-if="posts" id="content-container">
    <div class="content-box" v-for="post in posts" :key="post.id">
      <div>
        <p>{{ post['create-time'] }}</p>
        <div>
          <img :src="post['profile-pic']" alt="Profile Icon" width="30" height="30" />
          <p>{{ post.author }}</p>
        </div>
      </div>
      <div v-if="post.picture">
        <img :src="post.picture" alt="Post Image" style="width: 70%;" />
        <p>{{ post['picture-info'] }}</p>
      </div>
      <p v-if="post.desc">{{ post.desc }}</p>
      <p>🤍 {{ post['like-count'] }}</p>
      <button @click="like_Button(post.id)" id=like_button>Like!</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Post",
  computed: {
    ...mapGetters(['postgetter']),
    posts() {
      return this.$store.getters.postgetter
    },
  },
  methods: {
    ...mapActions(["like_Button"])
  }

  };
  

</script>

<style scoped>
#content-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.content-box {
  border: 5px solid #0c5c9e;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  width: 70%;
  background-color: rgb(10, 8, 29);
  color: white;
  overflow-wrap: break-word;
  word-wrap: break-word;
  box-shadow: 8px 4px 16px rgba(0, 0, 0, 0.2);
}

@media (max-width: 500px) {
  .content-box {
    width: 80%;
  }
}

#like_button {
  color: rgb(33, 45, 58);
  background-color: #70ffc8be;
}

#like_button:hover {
  background-color: #70ffc8;
}
</style>
