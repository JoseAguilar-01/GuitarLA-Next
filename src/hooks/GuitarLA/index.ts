import { useContext } from 'react';
import { GuitarLAContext } from '@context/GuitarLA';

export const useGuitarLA = () => {
  return useContext(GuitarLAContext);
};
