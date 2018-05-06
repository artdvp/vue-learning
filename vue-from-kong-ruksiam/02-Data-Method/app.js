new Vue({
  el: "#app",
  data: {
    title: "Hello World Hey",
    textT: "Github"
  },
  methods: {
    getTitle: function() {
      return this.title;
    },
    setName: function(ArgsetName) {
      return (this.textT = ArgsetName);
    }
  }
});
