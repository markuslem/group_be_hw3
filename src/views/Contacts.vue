<template>
  <div>
    <HeaderComponent />
    <div class="about">
    <h1>This is the contacts page</h1>
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
