import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Pokemon-details.module.css';

export default function PokemonDetail() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/">
          <a>Volver</a>
        </Link>
        <h1 className={styles.title}>
          Aquí puedes obtener información de tus Pokemons favoritos!
        </h1>
      </main>
    </div>
  );
}
