<template>
  <div v-if="animals.length > 0">
      <h2><span v-if="name">{{name}}</span> Here's your zoo</h2>
      <ol>
          <li v-for="(animal,index) in animals" :key="index">
              <span class="animal" v-html="animalCodes[animal]"></span>
          </li>
      </ol>
  </div>
</template>

<script>
export default {
  props: ["animals", "animalCodes", "name"]
};
</script>