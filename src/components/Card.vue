<script setup>
import { useRouter } from "vue-router";
const { character, image, name, gender } = defineProps(["character", "image", "name", "gender"]);
const router = useRouter()
const navigateToCharacterDetails = () => {
  router.push(`/character/${character.id}`);
};
</script>
<template>
  <n-card @click="navigateToCharacterDetails">
    <template #cover>
      <img :src="image" />
      <h3>{{ name }}</h3>
      <h5>{{ gender }}</h5>
    </template>
  </n-card>    
</template>

<style scoped>
.n-card {
  width: 200px;
  margin: 15px 20px;
  cursor: pointer;
}
.n-card:hover {
  transition: 0.8s all ease-in;
  transform: scale(1.1);
}
.n-card img {
  height: 250px;
}
</style>
