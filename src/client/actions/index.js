addArticle (article) {
  fetch("/api/article/new",{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(article)
  })
  .then(function(res){ console.log(res) })
  .catch(function(res){ console.log(res) })
}
