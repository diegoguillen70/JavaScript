/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { arrow } from "@popperjs/core";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let str =
    getRadomMessage(who) +
    " " +
    getRadomMessage(action) +
    " " +
    getRadomMessage(what) +
    " " +
    getRadomMessage(when);

  document.getElementById("excuse").innerHTML = str;
  console.log("Hello Diego from the console!");
};

function getRadomMessage(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
