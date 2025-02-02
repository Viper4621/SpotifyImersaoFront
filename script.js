//abaixo estamos selecionando o input de busca e os resultados de artistas e playlists
const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

//estamos fazendo uma requisição para a API de artistas
function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result, searchTerm));
}

//estamos exibindo os resultados da busca e selecionando nosso container grid
function displayResults(result, searchTerm) {
  resultPlaylist.classList.add("hidden");
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.innerHTML = ""; // Limpa os resultados anteriores

  //abaixo estamos filtrando os artistas que contém o termo de busca
  const filteredArtists = result.filter(
    (artist) => artist.name.toLowerCase().includes(searchTerm) // estamos verificando se nosso array tem o que foi pesquisado
  );

  //abaixo será a criação de cards dinamicamente com a estruta html
  filteredArtists.forEach((artist) => {
    const artistCard = document.createElement("div");
    artistCard.classList.add("artist-card");

    artistCard.innerHTML = `
          <div class="card-img">
              <img class="artist-img" src="${artist.urlImg}" />
              <div class="play">
                  <span class="fa fa-solid fa-play"></span>
              </div>
          </div>
      <div class="card-text">              
              <span class="artist-name">${artist.name}</span>
              <span class="artist-categorie">Artista</span>
          </div>
      `;
    //abaixo estamos adicionando o card ao container grid que ira buscar .name e .url img pra retornar o correto
    gridContainer.appendChild(artistCard);
  });

  resultArtist.classList.remove("hidden");
}
//abaixo estamos adicionando um evento de input para que a cada letra digitada seja feita uma busca e acrescentando um trim para retirar espaços em branco
document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (searchTerm === "") {
    resultPlaylist.classList.remove("hidden");
    resultArtist.classList.add("hidden");
    return;
  }

  requestApi(searchTerm);
});
