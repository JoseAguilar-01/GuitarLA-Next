import Image from 'next/image';
import { NotFound } from '@views/NotFound';
import { TGuitar } from '../models/Guitar.model';
import styles from '@components/GuitarList/css/Guitar.module.css';

export const GuitarPresentation: TGuitar = props => {
  const { guitar, quantity, changeQuantity, handleSubmit } = props;

  return !guitar ? (
    <NotFound />
  ) : (
    <div className={styles.guitar}>
      <Image
        priority
        src={guitar.image_url}
        width={170}
        height={350}
        alt={`guitar-${guitar.name}-image`}
      />

      <div className={styles.content}>
        <h3>{guitar.name}</h3>

        <p className={styles.description}>{guitar.description}</p>
        <p className={styles.price}>${guitar.price}</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>Cantidad:</label>

          <select
            value={quantity}
            onChange={e => changeQuantity(Number(e.target.value))}
          >
            <option value='0'>-- Seleccione --</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
          </select>

          <input type='submit' value='Agregar al Carrito' />
        </form>
      </div>
    </div>
  );
};
