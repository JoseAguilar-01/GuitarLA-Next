import Image from 'next/image';
import styles from '@components/EntriesList/css/Entry.module.css';
import { formatDate } from '@utilities/functions';
import { TBlogEntry } from '../models/BlogEntry.model';

export const BlogEntryPresentation: TBlogEntry = ({ entry }) => {
  const { title, content, image_url, published_at } = entry;

  return (
    <main className='container'>
      <h1 className='heading'> {title} </h1>

      <article className={styles.entry}>
        <Image
          src={image_url}
          width={800}
          height={600}
          alt={`entry-${title}-image`}
        />

        <div className={styles.content}>
          <p className={styles.date}>{formatDate(published_at)}</p>

          <p className={styles.text}>{content}</p>
        </div>
      </article>
    </main>
  );
};
