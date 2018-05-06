<template>
  <div id="app">
    <img src="./assets/logo.png">
    <zoo :animals="animals" :animalCodes="animalCodes" :name="name"></zoo>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Zoo from "./components/Zoo.vue";

const animalCodes = {
  dog: "&#x1f436;",
  cat: "&#x1f638;",
  monkey: "&#x1f435;",
  unicorn: "&#x1f984;",
  tiger: "&#x1f42f;",
  mouse: "&#x1f42d;",
  rabbit: "&#x1f430;",
  cow: "&#x1f42e;",
  whale: "&#x1f433;",
  horse: "&#x1f434;",
  pig: "&#x1f437;",
  frog: "&#x1f438;",
  koala: "&#x1f43c;"
};
const animals = Object.keys(animalCodes);
var animalsForZoo = [];

var data = {
  name: "Oljow",
  animalCodes,
  animals,
  animalsForZoo,
  sadSrc:
    "https://www.shareicon.net/data/128x128/2017/06/16/887152_sad_512x512.png",
  gladSrc:
    "https://www.shareicon.net/data/128x128/2017/06/16/887150_happy_512x512.png"
};

export default {
  name: "app",
  components: {
    HelloWorld,
    Zoo
  },
  data() {
    return data;
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
