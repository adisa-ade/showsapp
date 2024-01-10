<script setup>
const { character } = defineProps(["character"]);
</script>
<template>
  <n-card>
    <template #cover>
      <img :src="character.image" />
      <h3>{{ character.name }}</h3>
      <h5>{{ character.gender }}</h5>
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
