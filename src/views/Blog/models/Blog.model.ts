import { Entry } from '@models/entry.model';

export type TBlog = React.FC<BlogProps>;

export interface BlogProps {
  entries: Entry[];
}
