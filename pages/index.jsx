import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Container } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matias Pokemon App</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>

      <main>
        <Container className="home">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
            height="150"
            width="400"
          />
          <h1 data-testid="title">Bienvenido a Matias Pokemon</h1>
          <Link href="./pokemon">
            <a className="link">
              <Button variant="contained" size="large">
                Ver listado de Pokemones
              </Button>
            </a>
          </Link>
        </Container>
      </main>
    </div>
  );
}
