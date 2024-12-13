<template>
  <div>
    <HeaderComponent />
    <button @click="logOut" class="red-btn" style="margin-bottom: 0.5em;">Log Out</button>
    <Post />
    <button @click="resetLikes" class="red-btn">Reset likes</button>
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
    logOut() {
      this.$router.push('/log-in');
    }
  },
};
</script>

<style>
.red-btn {
  background-color: #bb2929;
}
</style>