const div$$ = document.querySelector(".display");

const pintarPokemons = async () => {
  const hacerFetch = [];

  for (let i = 1; i <= 151; i++) {
    let allPokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let pokemonsRes = await allPokemons.json();

    hacerFetch.push(pokemonsRes);
  }

  const map = hacerFetch.map((param) => ({
    id: param.id,
    name: param.name,
    image: param.sprites.other["official-artwork"]["front_default"],
    weight: param.weight,
    height: param.height,
  }));

  ListaPokemons(map);
};

const ListaPokemons = (allPokes) => {
  const crearHTML = allPokes
    .map(
      (pokemon) =>
        `<div class="display__element">
          <h2>${pokemon.name}</h2>
          <img class="card" src="${pokemon.image}" alt="${
          pokemon.name
        }"/>
          <p>Nº ${pokemon.id}</p>
          <p>PESO: ${pokemon.weight * 10} Gramos </p>
          <p>ALTURA: ${pokemon.height * 10} Cm </p>
          </div>`
    )
  div$$.innerHTML = crearHTML;
};

pintarPokemons();

//agradecimientos:
//https://github.com/accesibleprogramacion/pokedex
//Santiago por la web https://www.transparenttextures.com/
//A todos en general 

