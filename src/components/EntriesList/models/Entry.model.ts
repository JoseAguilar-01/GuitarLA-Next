import { Entry } from '@models/entry.model';

export type TEntry = React.FC<EntryProps>;

export interface EntryProps {
  entry: Entry;
}
