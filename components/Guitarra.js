import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Guitarra.module.css';

const Guitarra = ({ guitarra }) => {
	const { nombre, description, imagen, precio, url } = guitarra;

	return (
		<div className={styles.guitarra}>
			<Image
				src={imagen.url}
				layout="responsive"
				width={150}
				height={350}
				alt={`Imagen de la guitarra ${nombre}`}
			/>

			<div className={styles.contenido}>
				<h3>{nombre}</h3>

				<p className={styles.description}>{description}</p>
				<p className={styles.precio}>${precio}</p>

				<Link href={`/guitarras/${url}`}>
					<a className={styles.enlace} type="button">
						Ver Producto
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Guitarra;
