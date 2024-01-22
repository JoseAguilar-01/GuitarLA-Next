'use client';

import { HomePresentation } from './HomePresentation';
import { useGuitarLA } from '@hooks/GuitarLA';
import { HomePresentationProps } from '../models/homePresentation.model';

export const HomeContainer = () => {
  const { guitars, courses, entries } = useGuitarLA();

  const props: HomePresentationProps = {
    guitars,
    courses,
    entries,
  };

  return <HomePresentation {...props} />;
};
