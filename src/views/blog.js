import Layout from '../components/Layout';
import ListadoBlog from '../components/ListadoBlog';

const Blog = ({ entradas }) => {
  return (
    <Layout pagina={'Blog'}>
      <main>
        <ListadoBlog entradas={entradas} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs`;
  const response = await fetch(url, {
    headers: { apikey: process.env.API_KEY },
  });
  const entradas = await response.json();

  return {
    props: {
      entradas,
    },
  };
}

export default Blog;
