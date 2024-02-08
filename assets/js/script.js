async function apiConection(){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    await fetch('https://pokeapi.co/api/v2/pokedex/').then((Response) => Response.json())
    .then((data) => {
        console.log(data.results);
    });
    console.log(currentYear);
}

window.addEventListener('load', apiConection());