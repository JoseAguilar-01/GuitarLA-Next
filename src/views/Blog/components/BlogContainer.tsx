'use client';

import { useGuitarLA } from '@hooks/GuitarLA';
import { BlogPresentation } from './BlogPresentation';

export const BlogContainer = () => {
  const { entries } = useGuitarLA();

  return <BlogPresentation entries={entries} />;
};
