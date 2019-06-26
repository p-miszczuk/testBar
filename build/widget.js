"use strict";

function Bar(data) {

  // handles
  var barButton = document.querySelector(".show-bar");
  var bar = document.querySelector('.bar');
  var barExit = document.getElementById("bar-exit");
  var text = document.getElementById('bar-text');

  // listeners
  barButton.addEventListener("click", handleShowBar, false);
  barExit.addEventListener("click", handleHideBar, false);
}