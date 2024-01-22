'use client';

import { useGuitarLA } from '@hooks/GuitarLA';
import { useParams } from 'next/navigation';
import { BlogEntryPresentation } from './BlogEntryPresentation';

export const BlogEntryContainer = () => {
  const { url } = useParams();

  const { entries } = useGuitarLA();

  const entryToShow = entries.find(entry => entry.url === url);

  if (!entryToShow) return;

  return <BlogEntryPresentation entry={entryToShow} />;
};
