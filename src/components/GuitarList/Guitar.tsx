'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TGuitar } from './models/Guitar.model';
import styles from './css/Guitar.module.css';

export const Guitar: TGuitar = ({ guitar }) => {
  const { name, description, image_url, price, url } = guitar;

  return (
    <div className={styles.guitar}>
      <Image
        priority={true}
        src={image_url}
        width={150}
        height={350}
        alt={`guitar-${name}-image`}
      />

      <div className={styles.content}>
        <h3>{name}</h3>

        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>

        <Link href={`/guitarras/${url}`} className={styles.link}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
};
