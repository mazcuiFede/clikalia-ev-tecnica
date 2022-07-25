import Head from 'next/head';
import { Grid } from '@mui/material';
import { getPathsFromIds } from '../../lib/utils';
import { getPokemonDetails } from '../../services/pokemon.services';
import BasicCard from '../../components/BasicCard';

export default function PokemonDetail({ pokemonDetails }) {
  const buildDescription = (details) => ({
    Tipo: details.types.map((x) => `${x.type.name} `),
    Peso: details.weight,
    Habilidades: details.abilities.map((x) => `${x.ability.name} `),
    Movimientos: details.moves.map((x) => `${x.move.name} `),
  });

  return (
    <div className="details">
      <Head>
        <title>{pokemonDetails.name} - Details - PokeKalia</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>

      <main className="">
        <Grid container>
          <Grid item xs={12}>
            <h1 className="">
              {pokemonDetails.name.charAt(0).toUpperCase() +
                pokemonDetails.name.slice(1).replace('-', ' ')}
            </h1>
          </Grid>
          <Grid item xs={0} sm={4} />
          <Grid item xs={12} sm={4}>
            <div>
              <BasicCard
                image={pokemonDetails.sprites.other.dream_world.front_default}
                name={pokemonDetails.name}
                description={buildDescription(pokemonDetails)}
              />
            </div>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getPathsFromIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const pokemonDetails = await getPokemonDetails(id);

  return {
    props: {
      pokemonDetails: pokemonDetails.result,
    },
  };
}
