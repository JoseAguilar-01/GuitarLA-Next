import { Entry } from './Entry';
import styles from './css/EntriesList.module.css';
import { TEntriesList } from './models/EntriesList.model';

export const EntriesList: TEntriesList = ({ entries }) => {
  return (
    <div>
      <h2 className={styles.title}>Blog</h2>

      <div className={styles.blog}>
        {entries.map(entry => (
          <Entry key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
};
