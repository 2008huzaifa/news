var search = document.getElementById('Search')
 function Search(){
 
 
 fetch(`https://newsapi.org/v2/everything?q=${search.value}&from=2024-05-04&sortBy=publishedAt&apiKey=fa1cb56ee1db4409afd95dff3974feae`)
 .then(function(jso){
    return jso.json()
 })
.then(function(news){
    var getdiv = document.querySelector('#new')
    for(var i = 0 ; i < news.articles.length ;i++){
getdiv.innerHTML += `<div class="card d-flex justify-content-between m-3 " style="width: 18rem;height:600px;border:10px solid blue " "><br> 
<img  style="width: 250px;height: 200px !important;border: 5px solid blue;" src="${news.articles[i].urlToImage ? news.articles[i].urlToImage : 'data:image/png;base64,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'}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 style="" class="card-title">${news.articles[i].title ? news.articles[i].title : 'No Title'}</h5>
  <p class="card-text">${news.articles[i].description ? news.articles[i].description : 'No Description'}</p>
</div>
</div>` 
    }
})






 .catch(function(err){
    console.log(err)

 })
}