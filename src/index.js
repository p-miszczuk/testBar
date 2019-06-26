const obj = {
  list: [
    {
      id: "1",
      title: "Bałamuty na drutach",
      description: "lorem ipsum dolores asdas asdas asdasd adasd"
    },
    {
      id: "2",
      title: "Bałamuty na drutach 2",
      description: "dolores asdas asdas asdasd adasd"
    }
  ]
}

let list = document.querySelector(".wrapper");

const articles = obj.list.map(article => (
  `<h3>${article.title}</h3> <p>${article.description}</p>` 
));


list.innerHTML = articles.join("");
