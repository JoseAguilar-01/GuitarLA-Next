import Image from 'next/image';
import Link from 'next/link';
import { formatearFecha } from '../helpers';
import styles from '../styles/Entrada.module.css';

const Entrada = ({ entrada }) => {
	const { title, description, image_url, published_at, url } = entrada;

	return (
		<article className={styles.entrada}>
			<Image
				priority={true}
				layout="responsive"
				src={image_url}
				width={800}
				height={600}
				alt={`Imagen blog ${title}`}
			/>

			<div className={styles.contenido}>
				<h3>{title}</h3>
				<p className={styles.fecha}>{formatearFecha(published_at)}</p>
				<p className={styles.resumen}>{description}</p>
				<Link href={`/blog/${url}`}>
					<a className={styles.enlace} type="button">
						Leer entrada
					</a>
				</Link>
			</div>
		</article>
	);
};

export default Entrada;
