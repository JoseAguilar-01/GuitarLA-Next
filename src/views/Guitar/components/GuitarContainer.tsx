'use client';

import { useGuitarLA } from '@hooks/GuitarLA';
import { Product } from '@models/product.model';
import { useParams } from 'next/navigation';
import { FormEvent, useMemo, useState } from 'react';
import { GuitarPresentation } from './GuitarPresentation';
import { GuitarProps } from '../models/Guitar.model';

export const GuitarContainer = () => {
  const [quantity, setQuantity] = useState(1);

  const { guitars, addProduct } = useGuitarLA();
  const { url } = useParams();

  const currentGuitar = useMemo(() => {
    const guitar = guitars.find(guitar => guitar.url === url);

    return guitar;
  }, [guitars, url]);

  const changeQuantity = (quantity: number) => {
    setQuantity(quantity);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!currentGuitar) return;

    if (quantity < 1) {
      alert('Cantidad no válida');
      return;
    }

    const { image_url, ...restProps } = currentGuitar;

    const productToAdd: Product = {
      ...restProps,
      image: image_url,
      quantity,
    };

    alert('Agregado exitosamente al carrito');

    addProduct(productToAdd);
  };

  const props: GuitarProps = {
    guitar: currentGuitar,
    quantity,
    changeQuantity,
    handleSubmit,
  };

  return <GuitarPresentation {...props} />;
};
