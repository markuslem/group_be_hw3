<template>
  <div>
    <HeaderComponent />
    <main>
      <h1>Main Page</h1>
      <Post />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import Post from "@/components/Post.vue";

export default {
  name: "MainPage",
  components: { HeaderComponent, FooterComponent, Post },
};
</script>

<style>
main {
  margin: 20px;
}
</style>