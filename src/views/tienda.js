import Layout from '../components/Layout';
import Listado from '../components/Listado';

const Tienda = ({ guitarras }) => {
  return (
    <Layout pagina={'Tienda Virtual'}>
      <main className='container'>
        <h1 className='heading'>Nuestra Colección</h1>

        <Listado guitarras={guitarras} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras`;
  const respuesta = await fetch(url, {
    headers: { apikey: process.env.API_KEY },
  });
  const guitarras = await respuesta.json();

  return {
    props: {
      guitarras,
    },
  };
}

export default Tienda;
