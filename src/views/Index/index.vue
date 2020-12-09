<template>
  <Banner />
  <Intro />
  <Classic-glasses />
  <Co-glasses />
  <Recommend />
  <Contact />
</template>

<script>
import Banner from "/@/layouts/Banner/index.vue";
import Intro from "/@/layouts/Intro/index.vue";
import ClassicGlasses from "/@/layouts/ClassicGlasses/index.vue";
import CoGlasses from "/@/layouts/CoGlasses/index.vue";
import Recommend from "/@/layouts/Recommend/index.vue";
import Contact from "/@/layouts/Contact/index.vue"
export default {
  name: "Index",
  components: {
    Banner,
    Intro,
    ClassicGlasses,
    CoGlasses,
    Recommend,
    Contact
  },
};
</script>
