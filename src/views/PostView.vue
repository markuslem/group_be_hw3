<template>
    <div class="post-page">
        <HeaderComponent />
      <div v-if="post" class="post-container">
        <h2>A Post</h2>
        <label for="post-body" class="post-label">Body</label>
        <input v-model="post.content" id="post-body" class="post-input" />
          <div class="button-container">
          <button @click="updatePost" class="btn update-btn">Update</button>
          <button @click="deletePost" class="btn delete-btn">Delete</button>
        </div>
      </div>
      <div v-else>
        <p>Loading post...</p>
      </div>
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
    props: ["id"], //post ID passed as a route parameter
    data() {
      return {
        post: null,
      };
    },
    methods: {
      async fetchPost() {
        try {
          const response = await fetch(`http://localhost:3000/posts/${this.id}`);
          if (!response.ok) throw new Error("Failed to fetch post");
          this.post = await response.json();
        } catch (error) {
          console.error("Error fetching post:", error.message);
        }
      },
      async updatePost() {
        try {
          const response = await fetch(`http://localhost:3000/posts/${this.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: this.post.content }),
          });
          if (!response.ok) throw new Error("Failed to update post");
          this.$router.push("/"); //redirect to homepage after delete
        } catch (error) {
          console.error("Error updating post:", error.message);
        }
      },
      async deletePost() {
        try {
          const response = await fetch(`http://localhost:3000/posts/${this.id}`, {
            method: "DELETE",
          });
          if (!response.ok) throw new Error("Failed to delete post");
          this.$router.push("/"); //redirect to homepage after delete
        } catch (error) {
          console.error("Error deleting post:", error.message);
        }
      },
    },
    mounted() {
      this.fetchPost();
    },
  };
  </script>
  
  <style scoped>
  .post-page {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .navbar {
    background-color: #f0f0f0;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .nav-link {
    text-decoration: none;
    color: #007bff;
    margin: 0 10px;
    font-weight: bold;
  }
  
  .post-container {
    margin: 30px auto;
    padding: 20px;
    width: 300px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-bottom: 15px;
  }
  
  .post-label {
    display: block;
    margin-bottom: 5px;
    text-align: left;
  }
  
  .post-input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .button-container {
    display: flex;
    justify-content: space-between;
  }
  
  .btn {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }
  
  .update-btn {
    background-color: #007bff;
    color: white;
  }
  
  .update-btn:hover {
    background-color: #0056b3;
  }
  
  .delete-btn {
    background-color: #e74c3c;
    color: white;
  }
  
  .delete-btn:hover {
    background-color: #c0392b;
  }
  </style>
  