<template>
  <div id="app" class="jumbotron">
    <div class="container">
      <div v-if="messageMy.header !== undefined">
         <h1>{{ messageMy.header }}</h1>
      </div>
      <div v-else>
        <h1>Hello !</h1>
      </div>
      <hr>
      <form @submit.prevent="addMessage">
        <div class="form-group">
          <input class="form-control" v-model="newMessage.title" type="text" :placeholder="messageMy.placeholdertitle" maxlength="40" autofocus/>
        </div>
        <div class="form-group">
          <textarea v-model="newMessage.text" class="form-control" rows="3" :placeholder="messageMy.placeholderarea"></textarea>
        </div>
        <button class="btn btn-primary" type="submit">Send</button>
      </form>
      <hr>
      <div class="card-columns">
        <card class="card border-success"
        :title="messageMy.title"
        :text="messageMy.text"
        :footer="'Added on '+ dateToString(Date.now())"
        ></card>
        <card v-for="(message,index) in messages" :key="index"
        :title="message.title"
        :text="message.text"
        :footer="'Added on '+ dateToString(message.timestamp)"
        ></card>
      </div>
     </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Firebase from "firebase";
import { dateToString } from "./utils/utils";
import Card from "./components/Card";

let config = {
  apiKey: "AIzaSyDz3www4KfCnSdA6UlkDyADjBUfmFwuCnk",
  authDomain: "vue-introduce.firebaseapp.com",
  databaseURL: "https://vue-introduce.firebaseio.com",
  projectId: "vue-introduce",
  storageBucket: "vue-introduce.appspot.com",
  messagingSenderId: "871672068953"
};

let app = Firebase.initializeApp(config);

let db = app.database();
let messageOur = db.ref("titletext");
let messageRef = db.ref("message");

export default {
  firebase: {
    messages: messageRef,
    messageMy: {
      source: messageOur,
      asObject: true
    }
  },
  components: {
    Card
  },
  name: "App",
  mounted() {
    // log check data
    // messageRef.on(
    //   "value",
    //   function(snapshot) {
    //     console.log(snapshot.val());
    //   },
    //   function(errorObject) {
    //     console.log("The read failed: " + errorObject.code);
    //   }
    // );
  },
  data() {
    return {
      newMessage: {
        title: "",
        text: "",
        timestamp: null
      },
      placeholdertitle: 'Test',
      placeholderarea: ''
    };
  },
  methods: {
    addMessage(e) {
      e.preventDefault();

      if (
        this.newMessage.title.trim() === "" ||
        this.newMessage.text.trim() === ""
      ) {
        return 0;
      }
      this.newMessage.timestamp = Date.now();
      messageRef.push(this.newMessage);
      this.newMessage.title = "";
      this.newMessage.text = "";
      this.newMessage.timestamp = null;
    },
    dateToString: dateToString
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
