import { GuitarList } from '@components/GuitarList';
import { TStore } from '../models/Store.model';

export const StorePresentation: TStore = ({ guitars }) => {
  return (
    <main className='container'>
      <h1 className='heading'>Nuestra Colección</h1>

      <GuitarList guitars={guitars} />
    </main>
  );
};
