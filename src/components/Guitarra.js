import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Guitarra.module.css';

const Guitarra = ({ guitarra }) => {
  const { name, description, image_url, price, url } = guitarra;

  return (
    <div className={styles.guitarra}>
      <Image
        priority={true}
        src={image_url}
        layout='responsive'
        width={150}
        height={350}
        alt={`Imagen de la guitarra ${name}`}
      />

      <div className={styles.contenido}>
        <h3>{name}</h3>

        <p className={styles.description}>{description}</p>
        <p className={styles.precio}>${price}</p>

        <Link href={`/guitarras/${url}`} className={styles.enlace}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
