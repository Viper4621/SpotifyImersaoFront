const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      //   console.log("Resultados encontrados:", result); // Para debug
      displayResults(result);
    });
}

function displayResults(result) {
  resultPlaylist.classList.add("hidden");
  const artistName = document.getElementById("artist-name");
  const artistImage = document.getElementById("artist-img");

  // Vamos verificar exatamente o que estamos recebendo
  //   console.log("Termo pesquisado:", searchInput.value);
  //   console.log("Número de resultados:", result.length);

  if (result.length > 0) {
    // Podemos adicionar uma validação mais específica aqui
    const artist = result.find((art) =>
      art.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    if (artist) {
      artistName.innerText = artist.name;
      artistImage.src = artist.urlImg;
    } else {
      artistName.innerText = "Artista não encontrado";
      artistImage.src = ""; // ou imagem padrão
    }
  }

  resultArtist.classList.remove("hidden");
}

document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultPlaylist.classList.add("hidden");
    resultArtist.classList.add("hidden");
    return;
  }

  requestApi(searchTerm);
});
