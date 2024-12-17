<template>
  <div class="home-view">
    <HeaderComponent />
    <div class="logout-container">
      <button @click="logout" class="logout-button">Logout</button>
    </div>
    <main class="posts-container">
      <div v-if="posts.length">
        <router-link
          v-for="post in posts"
          :key="post.id"
          :to="{ name: 'PostView', params: { id: post.id } }"
          class="post-item-link"
        >
          <div class="post-item">
            <p class="post-timestamp">{{ formatDate(post.created_at) }}</p>
            <p class="post-content">{{ post.content }}</p>
          </div>
        </router-link>
      </div>
      <div v-else>
        <p>No posts available.</p>
      </div>
    </main>
    <footer class="footer">
      <div class="button-container">
        <router-link to="/add-post">
          <button>Add Post</button>
        </router-link>
        <button @click="deleteAllPosts" class="delete-button">Delete All Posts</button>
      </div>
    </footer>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch("http://localhost:3000/posts");
        if (!response.ok) throw new Error("Failed to fetch posts");
        this.posts = await response.json();
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    },
    async deleteAllPosts() {
      try {
        const response = await fetch("http://localhost:3000/posts", {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Failed to delete posts");

        this.posts = []; //clear posts
      } catch (error) {
        console.error("Error deleting posts:", error.message);
      }
    },
    async logout() {
      try {
        const response = await fetch("http://localhost:3000/auth/logout", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) throw new Error("Logout failed");

        //redirect to the login page
        this.$router.push("/log-in");
      } catch (error) {
        console.error("Error logging out:", error.message);
      }
    },
    formatDate(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style scoped>

.logout-container {
  text-align: middle;
  margin: 10px 20px;
}

.logout-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.posts-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post-item {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.post-timestamp {
  font-size: 12px;
  color: #777;
  margin-bottom: 10px;
}

.post-content {
  font-size: 16px;
  color: #333;
  margin: 0;
}

.footer {
  text-align: center;
  padding: 15px;
  background-color: #80d2e6;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  background-color: #007bff;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.delete-button {
  background-color: #e74c3c;
}

.delete-button:hover {
  background-color: #c0392b;
}
</style>