'use client';

import { createContext, useEffect, useState } from 'react';
import { Product } from '@models/product.model';
import { TGuitarLAProvider } from './models/provider.model';

export const GuitarLAContext = createContext({});

export const GuitarLAProvider: TGuitarLAProvider = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem('carts') || '[]');

    if (cartLS.length) {
      setCart(cartLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(cart));
  }, [cart]);

  const addProduct = (product: Product) => {
    const existMatchingProduct = cart.some(
      article => article.id === product.id,
    );

    if (existMatchingProduct) {
      updateQuantity(product);
      return;
    }

    setCart([...cart, product]);
  };

  const updateQuantity = (product: Product) => {
    const updatedCart = cart.map(article => {
      if (article.id === product.id) {
        article.quantity = product.quantity;
      }

      return article;
    });

    setCart(updatedCart);
  };

  const deleteProduct = (id: number) => {
    const updatedCard = cart.filter(article => article.id !== id);

    setCart(updatedCard);
  };

  const value = {
    addProduct,
    updateQuantity,
    deleteProduct,
  };

  return (
    <GuitarLAContext.Provider value={value}>
      {children}
    </GuitarLAContext.Provider>
  );
};
