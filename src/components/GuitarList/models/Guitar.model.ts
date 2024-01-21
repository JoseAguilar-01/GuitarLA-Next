import { Guitar } from '@models/guitar.model';

export type TGuitar = React.FC<GuitarProps>;

export interface GuitarProps {
  guitar: Guitar;
}
