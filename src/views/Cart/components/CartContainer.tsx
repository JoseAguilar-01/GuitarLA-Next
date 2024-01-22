'use client';

import { useMemo } from 'react';
import { useGuitarLA } from '@hooks/GuitarLA';
import { CartPresentation } from './CartPresentation';
import { CartProps } from '../models/Cart.model';

export const CartContainer = () => {
  const { cart, deleteProduct, updateQuantity } = useGuitarLA();

  const total = useMemo(() => {
    const result = cart.reduce(
      (total, product) => total + product.quantity * product.price,
      0,
    );

    return result;
  }, [cart]);

  const props: CartProps = {
    total,
    cart,
    deleteProduct,
    updateQuantity,
  };

  return <CartPresentation {...props} />;
};
