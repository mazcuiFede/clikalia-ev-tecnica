import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { TextField, Container } from '@mui/material';
import CustomPaginationActionsTable from '../../components/CustomPaginationActionsTable';
import { getPokemons } from '../../services/pokemon.services';

export default function Pokemon({ pokemons }) {
  const [pokemonsFiltered, setPokemonsFiltered] = React.useState(pokemons);

  const filterPokemons = (e) => {
    setPokemonsFiltered(
      pokemons.filter((x) => x.name.includes(e.target.value.toLowerCase()))
    );
  };

  return (
    <div>
      <Head>
        <title>Matias Pokemon App</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>

      <main>
        <Container className="pokemon">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
            height="150"
            width="400"
          />
          <h3>Aquí puedes obtener información de tus Pokemons favoritos!</h3>
          <TextField
            id="filter"
            label="Filtro"
            variant="outlined"
            onKeyUp={filterPokemons}
          />
          <CustomPaginationActionsTable pokemons={pokemonsFiltered} />
        </Container>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const pokemons = await getPokemons();
  pokemons.result.sort((a, b) => a.name.localeCompare(b.name));
  return {
    props: { pokemons: pokemons.result },
  };
}
