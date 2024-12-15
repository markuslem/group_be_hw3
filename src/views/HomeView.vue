<template>
  <div>
    <HeaderComponent />
    <button v-if = "authResult" @click="Logout" class="red-btn" style="margin-bottom: 0.5em;">Log Out</button>
    <Post />
    <button @click="resetLikes" class="red-btn">Reset likes</button>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import Post from "@/components/Post.vue";
import auth from "../auth";
import { mapActions } from "vuex";

export default {
  name: "MainPage",
  components: { HeaderComponent, FooterComponent, Post },
  data: function() {
    return {
    authResult: auth.authenticated()
    }
  },
  methods: {
    ...mapActions(['resetLikes']),

    Logout() {
      console.log(this.authResult)
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/log-in");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  },
};
</script>

<style>
.red-btn {
  background-color: #bb2929;
}
</style>