import Image from 'next/image';
import Link from 'next/link';
import { formatearFecha } from '../helpers';
import styles from '../styles/Entrada.module.css';

const Entrada = ({ entrada }) => {
	const { Titulo, Resumen, Imagen, published_at, url } = entrada;

	return (
		<article>
			<Image
				priority="true"
				layout="responsive"
				src={Imagen.url}
				width={800}
				height={600}
				alt={`Imagen blog ${Titulo}`}
			/>

			<div className={styles.contenido}>
				<h3>{Titulo}</h3>
				<p className={styles.fecha}>{formatearFecha(published_at)}</p>
				<p className={styles.resumen}>{Resumen}</p>
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
