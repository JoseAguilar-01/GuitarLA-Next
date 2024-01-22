'use client';

import { createContext, useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { Product, Course, Entry, Guitar } from '@models/index';
import { TGuitarLAProvider } from './models/provider.model';
import { ContextValues } from './models/context.model';

export const GuitarLAContext = createContext<ContextValues>({
  cart: [],
  guitars: [],
  courses: [],
  entries: [],
  addProduct: () => {},
  updateQuantity: () => {},
  deleteProduct: () => {},
});

export const GuitarLAProvider: TGuitarLAProvider = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [guitars, setGuitars] = useState<Guitar[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem('cart') || '[]');

    if (cartLS.length) {
      setCart(cartLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const getData = async () => {
    const [guitars, courses, entries] = await Promise.all([
      getGuitars(),
      getCourses(),
      getEntries(),
    ]);

    setGuitars(guitars);
    setCourses(courses);
    setEntries(entries);
  };

  async function httpGet<T>(props: {
    url: string;
    options: AxiosRequestConfig;
  }) {
    const { url, options } = props;

    try {
      const { data } = await axios<T>(url, options);

      return data;
    } catch (error) {
      console.log('🚀 ~ httpGet ~ error:', error);
    }
  }

  const getGuitars = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/guitars`;

    const guitars =
      (await httpGet<Guitar[]>({ url, options: asyncCallsOptions })) ?? [];

    return guitars;
  };

  const getCourses = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/courses`;

    const courses =
      (await httpGet<Course[]>({ url, options: asyncCallsOptions })) ?? [];

    return courses;
  };

  const getEntries = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/posts`;

    const entries =
      (await httpGet<Entry[]>({ url, options: asyncCallsOptions })) ?? [];

    return entries;
  };

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

  const asyncCallsOptions = {
    headers: { apikey: process.env.NEXT_PUBLIC_API_KEY || '' },
  };

  const value = {
    cart,
    guitars,
    courses,
    entries,
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
