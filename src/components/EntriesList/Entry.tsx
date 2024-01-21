import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@utilities/functions';
import { TEntry } from './models/Entry.model';
import styles from './css/Entry.module.css';

export const Entry: TEntry = ({ entry }) => {
  const { title, content, image_url, published_at, url } = entry;

  return (
    <article className={styles.entry}>
      <Image
        priority={true}
        src={image_url}
        width={800}
        height={200}
        alt={`entry-${title}-image`}
      />

      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{formatDate(published_at)}</p>
        <p className={styles.resume}>{content}</p>
        <Link href={`/blog/${url}`} className={styles.link}>
          Leer entrada
        </Link>
      </div>
    </article>
  );
};
