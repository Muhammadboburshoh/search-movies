var compactMovies = movies.map(function(movie,i) {
  return {
    id: i + 1,
    title: movie.Title.toString(),
    year: movie.movie_year,
    categories: movie.Categories.split('|'),
    summary: movie.summary,
    imdbId: movie.imdb_id,
    imdbRating: movie.imdb_rating,
    runtime: movie.runtime,
    language: movie.language,
    youtubeId: movie.ytid
  };
}); 

var elSearchForm = $_(".search-movies-form");
var elSearchInput = $_(".search-movies-input", elSearchForm);
var reoladList = $_(".reolad-list")
var elMoviesCradTemplet = $_("#movies_card_template").content;


elSearchForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  searchInput = elSearchInput.value.trim();
  if (searchInput === "") {
    alert("Kino nomini yozib qidiring:)")
    return;
  }

  var searchRegex = new RegExp(searchInput, "gi");

  thereAreMovies = [];

  compactMovies.forEach(function(movie) {

    if(movie.title.match(searchRegex)) {
      thereAreMovies.push(movie)
    }

  })
  // searchInput.innerHTML = "",
  reoladList.innerHTML = "";

  if (thereAreMovies.length > 0) {
    thereAreMovies.forEach(function(movie) {

      var newTemplate = elMoviesCradTemplet.cloneNode(true);
      newTemplate.querySelector(".movies-name").textContent += movie.title;
      reoladList.appendChild(newTemplate);

    })
  }
  else {
    reoladList.innerHTML = "<span class=\"list-group-item list-group-item-action bg-danger text-center w-25 mx-auto text-white\">Topilmadi!</span>";
  }

})

