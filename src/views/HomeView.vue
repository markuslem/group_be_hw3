<template>
    <div>
    <HeaderComponent />
      <Post />
      <button @click="resetLikes" id="resetter">Reset likes</button>
    </div>
    <FooterComponent />
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

#resetter {
  background-color: #bb2929;
}
</style>