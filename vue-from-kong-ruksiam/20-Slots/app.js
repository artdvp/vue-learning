let food = {
  template: "#foodarea"
};

new Vue({
  el: "#app",
  components: {
    foodApp: food
  },
  data() {
    return {
      newComment: ""
    };
  },
  methods: {}
});
