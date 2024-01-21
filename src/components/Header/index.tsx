'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { THeader } from './models/Header.model';
import { brand, cart, header_guitar } from '@assets/img';
import styles from './css/Header.module.css';

export const Header: THeader = ({ guitar }) => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.bar}>
          <Link href='/'>
            <Image
              className={styles.brand_image}
              width={400}
              height={100}
              src={brand}
              alt='brand-image'
            />
          </Link>

          <nav className={styles.navigation}>
            <Link href='/'>Inicio</Link>
            <Link href='/nosotros'>Nosotros</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/tienda'>Tienda</Link>
            <Link href='/carrito'>
              <Image src={cart} width={35} height={25} alt='cart-image' />
            </Link>
          </nav>
        </div>

        {guitar && (
          <div className={styles.model}>
            <h2>Modelo {guitar.name}</h2>

            <p>{guitar.description}</p>
            <p className={styles.price}>${guitar.price}</p>

            <Link href={`/guitars/${guitar.url}`}>Ver Producto</Link>
          </div>
        )}
      </div>

      {pathname === '/' && (
        <div className={styles.guitar}>
          <Image
            width={400}
            height={800}
            src={header_guitar}
            alt='header-image'
          />
        </div>
      )}
    </header>
  );
};
