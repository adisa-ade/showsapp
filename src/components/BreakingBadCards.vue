<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import Card from "./Card.vue";
import Hero from "./Hero.vue";

const page = ref(1);
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
    <n-gradient-text :size="40"  gradient="linear-gradient(90deg, yellow 20%, aqua 50%, red 100%)">
        Characters on Page {{ page }}
      </n-gradient-text>    
    <div class="cards">
      <Card
        v-for="character in character"
        :key="character.id"
        :character="character"
        :image="character.image"
        :name="character.name"
        :gender="character.gender"                
      />
    </div>    
    <div class="pagination">
        <n-pagination v-model:page="page" :page-count="42">
        <template #prev>
            Go Prev
          </template>
          <template #next>
            Go Next
          </template>
        </n-pagination>
    </div>    
  </div>          
</template>
<style scoped>
.container {
  background-color: rgb(27, 26, 26);
  padding: 30px;
  display: flex;
  flex-direction: column;  
  align-items: center;
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
.n-pagination{
    margin: 20px 0;
    padding: 10px;    
    color: green;    
    font-size: 25px;
}
.n-pagination:hover{
    transition: 0.5s ease-in-out;
    transform: scale(1.1);
}
.n-gradient-text{
    animation: pulse 5s linear infinite;
}
@keyframes pulse {
    0%{
    opacity: .5;
    }
    100%{
        opacity: 1;
    }
}
</style>
