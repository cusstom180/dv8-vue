<template>
  <Jumbotron />
  <HomeContent />
  <ImgGallery />
  <WhyCrossfit />
</template>

<script>
import Jumbotron   from "@/components/HomePage/Jumbotron";
import HomeContent from "@/components/HomePage/HomeContent";
import ImgGallery  from "@/components/HomePage/ImgGallery";
import WhyCrossfit from "@/components/HomePage/WhyCrossfit";

export default {
  name: "Home",
  components: {
    Jumbotron,
    HomeContent,
    ImgGallery,
    WhyCrossfit,
  },
};
</script>

<style lang="scss" scoped>
</style>