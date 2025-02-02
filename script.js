const searchInput = document.getElementById("search-input");
const resultArtists = document.getElementById("result-artist");
const resultPlaylists = document.getElementById("result-playlists");

function requestApi(searchValue) {
  const url = `http://localhost:3000/artists?name_like=${searchValue}`;
  fetch();
}

document.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase();
  if (searchValue === "") {
    resultPlaylists.classList.add("hidden");
    resultArtists.classList.remove("hidden");
    return;
  }
});
