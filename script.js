const pokeName = document.querySelector('[pokeName]');
const pokeImg = document.querySelector('[pokeImg]');

const search = event => {
  event.preventDefault();
  const {value} = event.target.pokemon;
  fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
  .then(data => data.json())
  .then(response => outPokemon(response))
  .catch(err => noPokemon())
}

const outPokemon = data => {
  const sprite = data.sprites.front_default;
  const {stats, types} = data;
  pokeName.textContent = data.name;
  pokeId.textContent = `Nº ${data.id}`;
  pokeImg.setAttribute('src', sprite);

}

const noPokemon = () => {
  pokeName.textContent = 'Pokemon not found. Please check your spelling.';
  pokeImg.setAttribute('src', '');
}

// <-----------------------------------Scrapped Code--------------------------------------->

// document.addEventListener('DOMContentLoaded', () => {

// const searchInput = document.getElementById('search-input');
// const searchResults = document.getElementById('search-results');
// const searchButton = document.getElementById('search-button');
// const pokeImg = document.querySelector('[data-poke-img]');

// searchButton.addEventListener('click', () => {
//     var pokemonName = searchInput.value.toLowerCase().trim();
//     searchResults.innerHTML = '';
  
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         var pokemon = {
//           name: data.name,
//           imageUrl: data.sprites.front_default,
//           types: data.types.map(type => type.type.name).join(', ')
//         };
  
//         var card = `
          
//         `;
  
//         searchResults.innerHTML = `
//             <div>
//                 <img src="${pokemon.imageUrl}">
//                 <h2>${pokemon.name}</h2>
//                 <p>Type(s): ${pokemon.types}</p>
//             </div>;
//         `
//       })
//       .catch(error => {
//         searchResults.innerHTML = 'Pokemon not found.';
//       });
//   });
// });

// <-------------------------------------------------------------------------->