import { Course, EntriesList, GuitarList } from '@components/index';
import { THomePresentation } from '../models/homePresentation.model';

export const HomePresentation: THomePresentation = props => {
  const { guitars, courses, entries } = props;

  return (
    <>
      <main className='container'>
        <h1 className='heading'>Nuestra Colección</h1>

        <GuitarList guitars={guitars} />
      </main>

      <Course course={courses[0]} />

      <section className='container'>
        <EntriesList entries={entries} />
      </section>
    </>
  );
};
