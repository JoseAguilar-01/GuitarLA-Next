import { Guitar } from '@models/guitar.model';
import { FormEvent } from 'react';

export type TGuitar = React.FC<GuitarProps>;

export interface GuitarProps {
  quantity: number;
  handleSubmit: (e: FormEvent) => void;
  changeQuantity: (quantity: number) => void;
  guitar?: Guitar;
}
