// Props Validate

Vue.component("btn-post", {
  data() {
    return {
      count: 0
    };
  },
  template: `
  <div>
  <p>{{ count }} </p>
  <button @click="count++">Add</button>
  </div>`
});

Vue.component("post", {
  props: ["title"],
  template: `<h3>{{ title }}</h3>`
});

/**
 * Custom Youtube
 */
Vue.component("showview", {
  props: {
    titlename: {
      type: String,
      required: true
    },
    view: {
      type: Number,
      default: 0
    }
  },
  template: `<h3>{{ titlename }} - {{ view }}</h3>`
});

new Vue({
  el: "#app"
});
