'use client';

import { useGuitarLA } from '@hooks/GuitarLA';
import { StorePresentation } from './StorePresentation';

export const StoreContainer = () => {
  const { guitars } = useGuitarLA();

  return <StorePresentation guitars={guitars} />;
};
