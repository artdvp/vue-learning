let post = new Vue({
  el: "#post",
  data() {
    return {
      title: "Project Data",
      message: "Description"
    };
  }
});

let comment = new Vue({
  el: "#comment",
  data() {
    return {
      text: "Good Weather"
    };
  }
});

let like = new Vue({
  el: "#like",
  data() {
    return {
      like: false
    };
  },
  methods: {
    changeLike: function() {
      this.like = !this.like;
    }
  }
});
