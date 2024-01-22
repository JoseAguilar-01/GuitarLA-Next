import { EntriesList } from '@components/index';
import { TBlog } from '../models/Blog.model';

export const BlogPresentation: TBlog = ({ entries }) => {
  return (
    <main>
      <EntriesList entries={entries} />
    </main>
  );
};
