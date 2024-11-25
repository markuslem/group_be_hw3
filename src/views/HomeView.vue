<template>
  <div>
    <HeaderComponent />
    <main>
      <h1>Main Page</h1>
      <div v-for="post in posts" :key="post.id" class="post">
        {{ post.content }}
      </div>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "MainPage",
  components: { HeaderComponent, FooterComponent },
  data() {
    return {
      posts: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        content: `Post content ${i + 1}`,
      })),
    };
  },
};
</script>

<style>
.post {
  margin: 1em 0;
  padding: 1em;
  border: 1px solid #ccc;
}
</style>
