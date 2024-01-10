<template>
<div class="hero">
    
    <n-gradient-text :size="40"  gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)" :repeat="2">
        <h1> Rick and Morty</h1>
      </n-gradient-text>
    <p></p>
</div>
</template>
<style scoped>
.hero {
    height : 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column
}
.hero img {
    position: absolute;
    height: 700px;
    opacity: 0.1;
}
.hero h1 {
    font-size: 100px;
    font-weight: bold;
}

</style>