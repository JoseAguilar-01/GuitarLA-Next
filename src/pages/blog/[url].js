import Image from 'next/image';
import Layout from '../../components/Layout';
import { formatearFecha } from '../../helpers';
import styles from '../../styles/Entrada.module.css';

const EntradaBlog = ({ entrada }) => {
  const { title, description, image_url, published_at } = entrada;

  return (
    <Layout pagina={title}>
      <main className='contenedor'>
        <h1 className='heading'> {title} </h1>

        <article className={styles.entrada}>
          <Image
            src={image_url}
            layout='responsive'
            width={800}
            height={600}
            alt={`Imagen entrada ${title}`}
          />

          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>

            <p className={styles.texto}>{description}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url, {
    headers: { apikey: process.env.API_KEY },
  });
  const entradas = await respuesta.json();

  const paths = entradas.map(entrada => ({
    params: { url: entrada.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const urlBlog = `${process.env.API_URL}/blogs?url=eq.${url}`;
  const respuesta = await fetch(urlBlog, {
    headers: { apikey: process.env.API_KEY },
  });
  const entrada = await respuesta.json();

  return {
    props: { entrada: entrada[0] },
  };
}

export default EntradaBlog;
