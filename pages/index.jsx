import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import CustomPaginationActionsTable from '../components/CustomPaginationActionsTable';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Aquí puedes obtener información de tus Pokemons favoritos!
        </h1>
        <CustomPaginationActionsTable />
      </main>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  );
  const json = await res.json();
  console.log(json.results);
  return { stars: json.results };
};
