import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = ({ guitarra }) => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className='contenedor'>
        <div className={styles.barra}>
          <Link href='/'>
            <Image
              width={400}
              height={100}
              src='/img/logo.svg'
              alt='Imagen logo'
            />
          </Link>

          <nav className={styles.navegacion}>
            <Link href='/'>Inicio</Link>
            <Link href='/nosotros'>Nosotros</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/tienda'>Tienda</Link>
            <Link href='/carrito'>
              <Image
                layout='fixed'
                src='/img/carrito.png'
                width={35}
                height={25}
                alt='Imagen Carrito'
              />
            </Link>
          </nav>
        </div>

        {guitarra && (
          <div className={styles.modelo}>
            <h2>Modelo {guitarra.name}</h2>

            <p>{guitarra.description}</p>
            <p className={styles.precio}>${guitarra.price}</p>

            <Link href={`/guitarras/${guitarra.url}`}>Ver Producto</Link>
          </div>
        )}
      </div>

      {router.pathname === '/' && (
        <div className={styles.guitarra}>
          <Image
            layout='fixed'
            width={520}
            height={1200}
            src='/img/header_guitarra.png'
            alt='Imagen header'
          />
        </div>
      )}
    </header>
  );
};

export default Header;
