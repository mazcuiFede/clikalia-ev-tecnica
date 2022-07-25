import { getPokemons } from '../services/pokemon.services';

export async function getPathsFromIds() {
  const pokemons = await getPokemons();
  const ids = pokemons.result.map((x) => ({
    params: {
      id: x.id,
    },
  }));

  return ids;
}
