"use strict";

var obj = {
  list: [{
    id: "1",
    title: "Bałamuty na drutach",
    description: "lorem ipsum dolores asdas asdas asdasd adasd"
  }, {
    id: "2",
    title: "Bałamuty na drutach 2",
    description: "dolores asdas asdas asdasd adasd"
  }]
};

var list = document.querySelector(".wrapper");

var articles = obj.list.map(function (article) {
  return "<h3>" + article.title + "</h3> <p>" + article.description + "</p>";
});

list.innerHTML = articles.join("");