new Vue({
  el: "#app",
  data: {
    like: false
  },
  methods: {
    toggleLike: function(){
      this.like = this.like ? false : true;
    }
  }
});
