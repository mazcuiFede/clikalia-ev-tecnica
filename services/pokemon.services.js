export async function getPokemons() {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  );
  const json = await res.json();
  const result = json.results.map((x) => {
    return {
      name: x.name,
      id: x.url
        .substring(0, x.url.length - 1)
        .split('/')
        .pop(),
    };
  });
  return { result };
}

export async function getPokemonDetails(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const json = await res.json();

  return { result: json };
}
