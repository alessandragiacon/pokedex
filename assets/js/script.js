async function apiConection(){
    await fetch('https://pokeapi.co/api/v2/pokedex/').then((Response) => Response.json())
    .then((data) => {
        console.log(data.results);
    });
}

window.addEventListener('load', apiConection());