import { Guitar } from '@models/guitar.model';

export type TGuitarList = React.FC<GuitarListProps>;

export interface GuitarListProps {
  guitars: Guitar[];
}
