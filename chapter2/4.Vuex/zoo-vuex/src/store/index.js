import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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

const animalsDescriptions = {
  dog: "I'm a dog, I bark",
  cat: "I'm a cat, I claw",
  monkey: "I'm a monkey, I climp",
  unicorn: "I'm a unicorn, I rainbow",
  tiger: "I'm a tiger, I roar",
  mouse: "I'm a mouse, I dig",
  rabbit: "I'm a rabbit, I jump",
  cow: "I'm a cow, I milk",
  whale: "I'm a whale, I swim",
  horse: "I'm a horse, I run",
  pig: "I'm a pig, I eat",
  frog: "I'm a frog, I jump",
  koala: "I'm a koala, I sleep"
};

const animals = Object.keys(animalCodes);
const animalsForZoo = [];

const state = {
  name: "Oljow",
  animalCodes,
  animals,
  animalsForZoo,
  animalsDescriptions,
  sadSrc:
    "https://www.shareicon.net/data/128x128/2017/06/16/887152_sad_512x512.png",
  gladSrc:
    "https://www.shareicon.net/data/128x128/2017/06/16/887150_happy_512x512.png"
};

const getters = {};

const mutations = {
  updateName(state, newName) {
    state.name = newName;
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations
});
