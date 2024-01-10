<script setup>
import { ref } from 'vue';
import axios from 'axios'
import {useRoute} from 'vue-router'
const route = useRoute()
const response = await axios.get(
  `https://rickandmortyapi.com/api/character`
    )
    const characterDetail = response.data.results.find(character => character.name)  
  // console.log(characterDetail)
  console.log(response.data.results)
  console.log(route.params.id)
</script>

<template>
         <h1>Card View</h1>
        <!-- <p>{{characterDetail.name}}</p>
        <p>{{characterDetail.gender}}</p> -->
</template>