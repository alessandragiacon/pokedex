async function apiConection(){
    await fetch('https://pokeapi.co/api/v2/pokemon/').then((Response) => Response.json())
    .then((data) => {
        console.log(data.results);
    });
}

// Função para injetar o ano no footer
function injectYear(){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let year = document.getElementById("copyrightYear");
    year.innerText = currentYear;
}

window.addEventListener('load', injectYear());
