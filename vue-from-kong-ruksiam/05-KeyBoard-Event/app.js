new Vue({
  el: "#app",
  data: {
    name: "Hello World Hey",
    job: "Web Developer",
    age: 25,
    website: "https://www.artdvp.me",
    count: 0
  },
  methods: {
    getTitle: function() {},
    setName: function(ArgsetName) {},
    addAge: function() {
      this.age++;
      console.log(this.age);
    },
    subtractAge: function() {
      this.age--;
      console.log(this.age);
    },
    addCounter: function() {
      this.count++;
      console.log(this.count);
    }
  }
});
