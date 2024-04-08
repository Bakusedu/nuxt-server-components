<script setup>
const images = [
  "ajeet-mestry-UBhpOIHnazM-unsplash.jpg",
  "carson-arias-7Z03R1wOdmI-unsplash.jpg",
  "jess-bailey-l3N9Q27zULw-unsplash.jpg",
];
</script>

<template>
  <Swiper
    :modules="[SwiperAutoplay]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
  >
    <SwiperSlide v-for="(image, index) in images" :key="index">
      <strong>{{ image }}</strong>
      <Image :src="image" />
    </SwiperSlide>
  </Swiper>
</template>
