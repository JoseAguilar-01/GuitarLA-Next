import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import styles from '/styles/Guitarra.module.css';

const Producto = ({ guitarra, agregarCarrito }) => {
	const [cantidad, setCantidad] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (cantidad < 1) {
			alert('Cantidad no válida');
		}

		// Agregar al carrito

		const guitarraSeleccionada = {
			id: guitarra.id,
			name: guitarra.name,
			image: guitarra.image_url,
			price: guitarra.price,
			cantidad,
		};

		alert('Agregado exitosamente al carrito');

		agregarCarrito(guitarraSeleccionada);

		return;
	};

	return guitarra === null ? (
		<div className={styles.no_encontrado}>
			<h1 className="heading">Página no encotrada</h1>

			<Link href="/">Volver a Inicio</Link>
		</div>
	) : (
		<Layout pagina={`Guitarra ${guitarra.name}`}>
			<div className={styles.guitarra}>
				<Image
					priority="true"
					src={guitarra.image_url}
					layout="responsive"
					width={170}
					height={350}
					alt={`Imagen de la guitarra ${guitarra.name}`}
				/>

				<div className={styles.contenido}>
					<h3>{guitarra.name}</h3>

					<p className={styles.description}>{guitarra.description}</p>
					<p className={styles.precio}>${guitarra.price}</p>

					<form className={styles.formulario} onSubmit={handleSubmit}>
						<label>Cantidad:</label>

						<select
							value={cantidad}
							onChange={(e) => setCantidad(parseInt(e.target.value))}
						>
							<option value="0">-- Seleccione --</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
						</select>

						<input type="submit" value="Agregar al Carrito" />
					</form>
				</div>
			</div>
		</Layout>
	);
};

export async function getServerSideProps({ query: { url } }) {
	const urlGuitarra = `${process.env.API_URL}/guitarras?url=eq.${url}`;
	const response = await fetch(urlGuitarra, {
		headers: { apikey: process.env.API_KEY },
	});
	const guitarra = await response.json();

	return {
		props: {
			guitarra: guitarra[0] || null,
		},
	};
}

export default Producto;
