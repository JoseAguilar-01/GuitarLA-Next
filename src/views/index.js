'use client';

import { useEffect, useState } from 'react';
import Curso from '../components/Curso';
import Layout from '../components/Layout';
import Listado from '../components/Listado';
import ListadoBlog from '../components/ListadoBlog';

const Home = () => {
  const [guitarras, setGuitarras] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const urlGuitarras = `${process.env.API_URL}/guitarras`;
    const urlCursos = `${process.env.API_URL}/cursos`;
    const urlBlog = `${process.env.API_URL}/blogs`;

    const options = {
      headers: { apikey: process.env.API_KEY },
    };

    const [resGuitarras, resCursos, resBlog] = await Promise.all([
      fetch(urlGuitarras, options),
      fetch(urlCursos, options),
      fetch(urlBlog, options),
    ]);

    const [guitarras, cursos, entradas] = await Promise.all([
      resGuitarras.json(),
      resCursos.json(),
      resBlog.json(),
    ]);

    console.log(cursos);

    setGuitarras(guitarras);
    setCursos(cursos);
    setEntradas(entradas);
  };

  return (
    <Layout>
      <main className='container'>
        <h1 className='heading'>Nuestra Colección</h1>

        <Listado guitarras={guitarras} />
      </main>

      {/* <Curso curso={cursos[0]} /> */}

      <section className='container'>
        <ListadoBlog entradas={entradas} />
      </section>
    </Layout>
  );
};

export default Home;
