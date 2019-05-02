import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as firebase from "firebase/app";
import "firebase/firestore";

var config = {
    apiKey: "AIzaSyAPkBQht8SXn6o8_RinqtsyANVz9c0M9Vc",
    authDomain: "travel-schedular.firebaseapp.com",
    databaseURL: "https://travel-schedular.firebaseio.com",
    projectId: "travel-schedular",
    storageBucket: "travel-schedular.appspot.com",
    messagingSenderId: "487080934779"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  ReactDOM.render(<App />, document.getElementById('root'));
