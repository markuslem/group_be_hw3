<template>
  <div>
    <HeaderComponent />
    <main>
      <Post />
      <button @click="resetLikes" id="resetter">Reset likes</button>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import Post from "@/components/Post.vue";
import { mapActions } from "vuex";

export default {
  name: "MainPage",
  components: { HeaderComponent, FooterComponent, Post },
  methods: {
    ...mapActions(['resetLikes']),
  },
};
</script>

<style>
/* main {
  margin: 20px;
} */

#resetter {
  background-color: #bb2929;
}
</style>