import { TCourse } from './models/Course.model';
import styles from './css/Course.module.css';

export const Course: TCourse = props => {
  const { course } = props;

  if (!course) return;

  const { title, content, image_url } = course;

  return (
    <section
      className={styles['container--section']}
      style={{
        backgroundImage: `
        linear-gradient(
            to right,
            rgb(0 0 0 / 0.63),
            rgb(0 0 0 / 0.7)
          ),
          url(${image_url})`,
      }}
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>

          <p className={styles.text}>{content}</p>

          {/* <Link href='#' className={styles.link}>
            Más información
          </Link> */}
        </div>
      </div>
    </section>
  );
};
