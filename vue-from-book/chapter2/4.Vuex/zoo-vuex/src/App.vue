<template>
  <div id="app" class="jumbotron">
    <div>
            <label for="name" v-bind:class="{green: name, red: !name }">What's your name ?</label>
            <!-- <introduction @nameChanged="onNameChanged" :initialName="name"></introduction> -->
                        <introduction></introduction>
        </div>
        <img :src="name ? gladSrc : sadSrc" alt="">
        <h1>Hello,
            <strong>{{name}}</strong> ! Let's learn Vue.js</h1>
        <br>
        <h2>
            <span v-show="name">Hello,
                <strong>{{name}}</strong>
            </span> ! Let's learn Vue.js</h2>
        <br>
        <h2>
            <span v-if="name">Hello,
                <strong>{{name}}</strong>
            </span> ! Let's learn Vue.js</h2>
        <div class="emos">&#x1f638;</div>
        <br>
        <div>{{animalCodes.cat}}</div>
        <div v-text="animalCodes.cat"></div>
        <div class="emos" v-html="animalCodes.cat"></div>
        <ol>
            <h2><span>{{name}} !</span>Here's your zoo</h2>
            <li v-for="(animal,index) in animals" :key="index">
                <span class="animal" v-html="animalCodes[animal]"></span>
            </li>
        </ol>
        <hr>
        <select v-model="animalsForZoo" name="animals" id="animals" multiple="multiple">
            <option v-for="(animal,index) in animals" :value="animal" :key="index">{{ animal }}</option>
        </select>
        <ol>
            <h2><span>{{name}} !</span>Here's your selected zoo</h2>
            <li v-for="(animal,index) in animalsForZoo" :key="index">
                <span class="animal" v-html="animalCodes[animal]"></span>
            </li>
        </ol>
    
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Zoo from "./components/Zoo.vue";
import Introduction from "./components/Introduce.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Zoo,
    Introduction
  },
  data() {
    return data;
  },
  methods: {
    onNameChanged(newName) {
      this.name = newName;
    }
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
    animals() {
      return this.$store.state.animals;
    },
    animalCodes() {
      return this.$store.state.animalCodes;
    },
    sadSrc () {
      return this.$store.state.sadSrc
    },
    gladSrc () {
      return this.$store.state.gladSrc
    }
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
