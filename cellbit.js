// Search bar functionality to filter games by title
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', (event) => {
  const searchQuery = event.target.value.toLowerCase(); // Convert input to lowercase
  const articles = document.querySelectorAll('.card__article');

  articles.forEach((article) => {
    const title = article.querySelector('.card__title').textContent.toLowerCase(); // Title of the card

    // Show articles where the title matches the query
    if (title.includes(searchQuery)) {
      article.style.display = ''; // Show the article
    } else {
      article.style.display = 'none'; // Hide the article
    }
  });
});


// Lista de categorias selecionadas
let activeCategories = [];

// Atualiza a visibilidade dos jogos com base apenas nas categorias
function updateCategoryFilter() {
  const articles = document.querySelectorAll('.card__article');

  articles.forEach((article) => {
    const categories = article.getAttribute('data-category').split(' ');

    // Exibir o jogo se ele pertencer a pelo menos uma categoria selecionada
    if (
      activeCategories.length === 0 || // Caso nenhuma categoria esteja selecionada
      activeCategories.some((category) => categories.includes(category)) // Combina com uma ou mais categorias
    ) {
      article.style.display = ''; // Mostra o artigo
    } else {
      article.style.display = 'none'; // Esconde o artigo
    }
  });
}

// Alterna o estado do filtro de categorias (ativo ou nÃ£o)
function toggleCategory(category) {
  const button = document.querySelector(`button0[data-category="${category}"]`);

  if (activeCategories.includes(category)) {
    // Remove a categoria da lista ativa
    activeCategories = activeCategories.filter((c) => c !== category);
    button.classList.remove('active'); // Remove a aparÃªncia "ativa"
  } else {
    // Adiciona a categoria Ã  lista ativa
    activeCategories.push(category);
    button.classList.add('active'); // Adiciona a aparÃªncia "ativa"
  }

  updateCategoryFilter(); // Atualiza os jogos exibidos
}
