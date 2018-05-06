# vue-introduce

> Learning Vue+Firebase

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## Install Firebase vue

```sh
$ npm i firebase vuefire --save
```

## Install Moment for datetime

```sh
$ npm i moment --save
```

## Deploy App to firebase

```sh
$ npm i -g firebase-tools

$ firebase login
$ firebase init

# choose
# (*) Database :
# (*) Function : 
# (*) Hosting : Configure and deploy Firebase Hosting sites
```

## Build And Deploy

```sh
$ npm run build
$ firebase deploy
```

demo >> [https://vue-introduce.firebaseapp.com](https://vue-introduce.firebaseapp.com)


src/config.js

```js
let config = {
  apiKey: "KEY",
  authDomain: "domain",
  databaseURL: "database domain",
  projectId: "project id",
  storageBucket: "storage",
  messagingSenderId: "message id"
};

export default {
    config
}
```