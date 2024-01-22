import { ContextValues } from '@context/GuitarLA/models/context.model';
import { Cart } from '@models/cart.model';

export type TCart = React.FC<CartProps>;

export interface CartProps {
  total: number;
  cart: Cart;
  deleteProduct: ContextValues['deleteProduct'];
  updateQuantity: ContextValues['updateQuantity'];
}
