<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import Card from "./Card.vue";
import Hero from "./Hero.vue";
const page = ref(0);
const character = ref(null);

const response = await axios.get(
  "https://rickandmortyapi.com/api/character?page=1"
);
character.value = response.data.results;
watch(page, async () => {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${page.value}`
  );
  character.value = res.data.results;
});
</script>
<template>
    <Hero/>    
  <div class="container">
    <div class="cards">
      <Card
        v-for="character in character"
        :key="character.id"
        :image="character.image"
        :name="character.name"
        :gender="character.gender"
      />
    </div>
    <div class="button-container">
      <button @click="page--">&lt</button>
      <button @click="page++">></button>
    </div>
  </div>
</template>
<style scoped>
/* Breaking Bad Styles */
.container {
  background-color: rgb(27, 26, 26);
  padding: 30px;
}
.cards {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.cards h3 {
  font-weight: bold;
}
.cards p {
  font-size: 10px;
}
.button-container {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.button-container button {
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin: 0 5px;
  cursor: pointer;
  outline: none;
}
.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
