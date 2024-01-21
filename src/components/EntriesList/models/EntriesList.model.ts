import { Entry } from '@models/entry.model';

export type TEntriesList = React.FC<EntriesListProps>;

export interface EntriesListProps {
  entries: Entry[];
}
