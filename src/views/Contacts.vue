<template>
  <div>
    <HeaderComponent />
    <div class="about">
    <h1>Contact with Markus, Kristjan and Markus if you have any problems.</h1>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "AboutView",
  components: { HeaderComponent, FooterComponent },
}


</script>
