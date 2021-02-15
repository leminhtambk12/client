<template>
  <div class="home">
    <PostComponent />
  </div>
</template>

<script>
import PostComponent from "@/components/PostComponent.vue";

export default {
  name: "Home",
  components: {
    PostComponent,
  },
};
</script>
