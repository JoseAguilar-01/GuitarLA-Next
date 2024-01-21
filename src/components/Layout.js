import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, pagina, guitarra }) => {
  return (
    <div>
      <Head>
        <meta name='description' content='Sitio web de venta de guitarras' />
        <meta name='author' content='José G. Aguilar' />
        <title>GuitarLA - {pagina}</title>
      </Head>
    </div>
  );
};

Layout.defaultProps = {
  guitarra: null,
};

export default Layout;
