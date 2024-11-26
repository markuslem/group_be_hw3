<template>
  <div v-if="posts" class="content-container">
    <div class="content-box" v-for="post in posts" :key="post.id">
      <div>
        <p>{{ post['create-time'] }}</p>
        <div>
          <img 
            :src="post['profile-pic']" 
            alt="Profile Icon" 
            width="30" 
            height="30" 
          />
          <p>{{ post.author }}</p>
        </div>
      </div>
      <div v-if="post.picture">
        <img 
          :src="post.picture" 
          alt="Post Image" 
          style="width: 100%;" 
        />
        <p>{{ post['picture-info'] }}</p>
      </div>
      <p v-if="post.desc">{{ post.desc }}</p>
      <p>🖤 {{ post['like-count'] }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Post",
  computed: {
    ...mapGetters(['postgetter']),
    posts() {
      return this.$store.getters.postgetter
    },
  },
};
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.content-box {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
}
</style>
