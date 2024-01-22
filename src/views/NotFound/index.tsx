import Link from 'next/link.js';
import styles from './css/NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={styles.not_found}>
      <h1 className='heading'>Página no encotrada</h1>

      <Link href='/' className={styles.link}>
        Volver a Inicio
      </Link>
    </div>
  );
};
