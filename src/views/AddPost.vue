<template>
  <div>
    <HeaderComponent />
    <h1>Add a New Post</h1>
    <div>
      <input
        v-model="postContent"
        placeholder="Enter your post content"
        type="text"
        @keyup.enter="submitPost"
      />
      <button @click="submitPost">Submit Post</button>
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
  data() {
    return {
      postContent: "", //store the new post content
    };
  },
  methods: {
    async submitPost() {
      if (!this.postContent.trim()) {
        alert("Post content cannot be empty!");
        return;
      }
      try {
        const response = await fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: this.postContent }),
        });

        if (response.ok) {
          const result = await response.json();
          this.$router.push("/"); //redirect back to home page
        } else {
          console.error("Failed to add post");
          alert("Failed to add post. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting post:", error);
        alert("An error occurred. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
input {
  margin: 10px;
  padding: 5px;
  width: 300px;
}
button {
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
}
</style>
