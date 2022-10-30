// Pegando a tag principal com a classe root para inserção de elemento
const app = document.getElementById('root');

// Criando elemento div com a class container
const container = document.createElement('div');
container.setAttribute('class', 'container');

// Insert da div no HTML
app.appendChild(container);

// Acessando a API e injetando as informações dos pokemons em index
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json())
  .then(data => {
    data.results.forEach( pokemon => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      // criação de tag p com insert de nome do pokemon
      const p = document.createElement('p');
      p.textContent = pokemon.name;

      // Insert das tags no HTML
      container.appendChild(card);
      card.appendChild(p);

    })
  }).catch(err => {
    // Insert de tag p com texto de erro
    const errorMessage = document.createElement('p')
    errorMessage.textContent = `Aah, não está funcionando!`
    app.appendChild(errorMessage)
  });