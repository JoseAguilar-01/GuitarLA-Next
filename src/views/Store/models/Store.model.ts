import { Guitar } from '@models/guitar.model';

export type TStore = React.FC<StoreProps>;

export interface StoreProps {
  guitars: Guitar[];
}
