Vue.component('btn-post', {
  data() {
    return {
      count: 0
    }
  },
  template: `
  <div>
  <p>{{ count }} </p>
  <button @click="count++">Add</button>
  </div>`
})

Vue.component('post', {
  template: `<h3>New Post</h3>`
})

new Vue({
  el: '#app'
})