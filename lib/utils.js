import { getPokemons } from './../services/pokemon.services';

export async function getPathsFromIds() {
  const pokemons = await getPokemons();
  debugger;
  const ids = pokemons.result.map((x) => {
    return {
      params: {
        id: x.id,
      },
    };
  });

  return ids;
}
