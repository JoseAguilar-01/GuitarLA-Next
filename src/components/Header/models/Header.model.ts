import { Guitar } from '@models/guitar.model';

export type THeader = React.FC<HeaderProps>;

export interface HeaderProps {
  guitar?: Guitar;
}
