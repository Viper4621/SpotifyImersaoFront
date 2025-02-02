const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => {
      //abaixo estamos verificando se a resposta da requisição foi bem sucedida se a resposta for diferente vamos retornar um erro ao usuario
      if (!response.ok) {
        throw new Error("Erro na requisição");
      }
      return response.json();
    })
    .then((result) => {
      displayResults(result);
    })
    .catch((error) => {
      console.error("Erro:", error);
      // como fizemos acima o throw new Error("Erro na requisição"); o catch vai pegar esse erro e exibir para o usuario no console
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
  //aqui aklém de verificar se o campo de pesquisa está vazio estamos verificando se o tamanho do campo é menor que 3 se deixar sem e digitar algo com menos de 3 caracteres o codigo retornar cards quem não tem nada a ver com o que foi digitado || searchTerm.length < 3
  //mas como no proposito do desafio seria buscar e msotrar todos por pesquisa a cada letra digitada então não faz sentido essa validação
  if (searchTerm === "") {
    resultPlaylist.classList.add("hidden");
    resultArtist.classList.add("hidden");
    return;
  }

  requestApi(searchTerm);
});
