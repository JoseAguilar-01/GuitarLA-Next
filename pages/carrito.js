import Image from 'next/image';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Carrito.module.css';

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const calculoTotal = carrito.reduce(
			(total, producto) => total + producto.cantidad * producto.precio,
			0
		);

		setTotal(calculoTotal);
	}, [carrito]);

	return (
		<Layout pagina={'Carrito de Compras'}>
			<h1 className="heading">Carrito</h1>
			<main className={`contenedor ${styles.contenido}`}>
				<div className={styles.carrito}>
					<h2>Artículos</h2>
					{carrito.length === 0
						? 'Carrito Vacío'
						: carrito.map((producto) => (
								<div key={producto._id} className={styles.producto}>
									<div>
										<Image
											src={producto.imagen}
											layout="responsive"
											width={250}
											height={500}
											alt={producto.nombre}
										/>
									</div>
									<div>
										<p className={styles.nombre}>{producto.nombre}</p>

										<div className={styles.cantidad}>
											<p>Cantidad: </p>

											<select
												value={producto.cantidad}
												className={styles.select}
												onChange={(e) =>
													actualizarCantidad({
														cantidad: e.target.value,
														_id: producto._id,
													})
												}
											>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
												<option value="6">6</option>
												<option value="7">7</option>
											</select>
										</div>

										<p className={styles.precio}>
											$<span>{producto.precio}</span>
										</p>
										<p className={styles.subtotal}>
											Subtotal: $
											<span>{producto.precio * producto.cantidad}</span>
										</p>
									</div>

									<button
										type="button"
										onClick={() => eliminarProducto(producto._id)}
										className={styles.eliminar}
									>
										X
									</button>
								</div>
						  ))}
				</div>
				<div className={styles.resumen}>
					{total > 0 ? (
						<>
							<h3>Resumen del Pedido</h3>
							<p>Total a pagar: ${total} </p>
						</>
					) : (
						<p>No hay productos en el carrito</p>
					)}
				</div>
			</main>
		</Layout>
	);
};

export default Carrito;
