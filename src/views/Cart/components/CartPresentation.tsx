import Image from 'next/image';
import { TCart } from '../models/Cart.model';
import styles from '../css/Cart.module.css';

export const CartPresentation: TCart = props => {
  const { cart, total, deleteProduct, updateQuantity } = props;

  return (
    <>
      <h1 className='heading'>Carrito</h1>
      <main className={`container ${styles.content}`}>
        <div className={styles.cart}>
          <h2>Artículos</h2>
          <div className={styles.cart__container_products}>
            {!cart.length
              ? 'Carrito Vacío'
              : cart.map(producto => (
                  <div key={producto.id} className={styles.product}>
                    <div>
                      <Image
                        src={producto.image}
                        width={250}
                        height={500}
                        alt={producto.name}
                      />
                    </div>
                    <div>
                      <p className={styles.name}>{producto.name}</p>

                      <div className={styles.quantity}>
                        <p>Cantidad: </p>

                        <select
                          value={producto.quantity}
                          className={styles.select}
                          onChange={e =>
                            updateQuantity({
                              quantity: Number(e.target.value),
                              productId: producto.id,
                            })
                          }
                        >
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                          <option value='6'>6</option>
                          <option value='7'>7</option>
                        </select>
                      </div>

                      <p className={styles.price}>
                        $<span>{producto.price}</span>
                      </p>
                      <p className={styles.subtotal}>
                        Subtotal: $
                        <span>{producto.price * producto.quantity}</span>
                      </p>
                    </div>

                    <button
                      type='button'
                      onClick={() => deleteProduct(producto.id)}
                      className={styles.delete}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>
        </div>
        <div className={styles.resume}>
          {total ? (
            <>
              <h3>Resumen del Pedido</h3>
              <p>Total a pagar: ${total} </p>
            </>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      </main>
    </>
  );
};
