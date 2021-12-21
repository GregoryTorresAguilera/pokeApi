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
        `<li class="display__element">
          <h2>${pokemon.name}</h2>
          <img class="card" src="${pokemon.image}" alt="${
          pokemon.name
        }"/>
          <p>NÚMERO #${pokemon.id}</p>
          <p>PESO: ${pokemon.weight / 10} KG </p>
          <p>ALTURA: ${pokemon.height / 10} M </p>
          </li>`
    )
  div$$.innerHTML = crearHTML;
};

pintarPokemons();



