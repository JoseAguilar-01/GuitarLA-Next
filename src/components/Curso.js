import Link from 'next/link';
import styles from '../styles/Curso.module.css';

const Curso = ({ curso }) => {
  const { title, description, image_url } = curso;

  return (
    <section>
      <div className={`container ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className={styles.title}>{title}</h2>

          <p className={styles.texto}>{description}</p>

          <Link href='#' className={styles.enlace}>
            Más información
          </Link>
        </div>
      </div>

      <style jsx>{`
        section {
          padding: 10rem 0;
          margin-top: 10rem;
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 / 0.63),
              rgb(0 0 0 / 0.7)
            ),
            url(${image_url});
          background-size: cover;
          background-repeat: no-repeat;
        }
      `}</style>
    </section>
  );
};

export default Curso;
