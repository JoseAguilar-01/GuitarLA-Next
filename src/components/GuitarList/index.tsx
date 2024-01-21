import { Guitar } from './Guitar';
import { TGuitarList } from './models/GuitarList.model';
import styles from './css/GuitarList.module.css';

export const GuitarList: TGuitarList = ({ guitars }) => {
  return (
    <div className={styles.list}>
      {guitars.map(guitar => (
        <Guitar guitar={guitar} key={guitar.id} />
      ))}
    </div>
  );
};
