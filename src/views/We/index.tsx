import Image from 'next/image';
import { we } from '@assets/img';
import styles from './css/We.module.css';

export const We = () => {
  return (
    <main className='container'>
      <h2 className='heading'>Nosotros</h2>

      <div className={styles.content}>
        <Image
          src={we}
          alt='we-image'
          width={600}
          height={450}
          className={styles.content__image}
        />

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eum
            voluptatum mollitia ratione doloribus in sapiente est facilis, ex,
            aliquam necessitatibus! Aut nulla quaerat vero aspernatur. Atque
            animi ex expedita labore voluptatem neque obcaecati. Nemo est
            necessitatibus excepturi, ipsam illo hic ex odit mollitia harum
            sapiente quos tempora voluptatibus optio corrupti eaque blanditiis
            deleniti, consequuntur esse, possimus nam porro impedit eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eum
            voluptatum mollitia ratione doloribus in sapiente est facilis, ex,
            aliquam necessitatibus! Aut nulla quaerat vero aspernatur. Atque
            animi ex expedita labore voluptatem neque obcaecati. Nemo est
            necessitatibus excepturi, ipsam illo hic ex odit mollitia harum
            sapiente quos tempora voluptatibus optio corrupti eaque blanditiis
            deleniti, consequuntur esse, possimus nam porro impedit eos.
          </p>
        </div>
      </div>
    </main>
  );
};
