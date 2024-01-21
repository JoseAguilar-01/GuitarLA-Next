'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Entry } from '@models/entry.model';
import { Course, Guitar } from '@models/index';
import { HomePresentation } from './HomePresentation';
import { HomePresentationProps } from '../models/homePresentation.model';

export const HomeContainer = () => {
  const [guitars, setGuitarras] = useState<Guitar[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const guitarsUrl = `${process.env.NEXT_PUBLIC_API_URL}/guitars`;
    const coursesUrl = `${process.env.NEXT_PUBLIC_API_URL}/courses`;
    const entriesUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts`;

    const options = {
      headers: { apikey: process.env.NEXT_PUBLIC_API_KEY || '' },
    };

    const [guitarsResponse, coursesResponse, entriesResponse] =
      await Promise.all([
        axios<Guitar[]>(guitarsUrl, options),
        axios<Course[]>(coursesUrl, options),
        axios<Entry[]>(entriesUrl, options),
      ]);

    setGuitarras(guitarsResponse.data);
    setCourses(coursesResponse.data);
    setEntries(entriesResponse.data);
  };

  const props: HomePresentationProps = {
    courses,
    entries,
    guitars,
  };

  return <HomePresentation {...props} />;
};
