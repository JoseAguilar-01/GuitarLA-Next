import Link from 'next/link.js';
import styles from '../styles/NoEncontrado.module.css';

const NoEncotrado = () => {
	return (
		<div className={styles.no_encontrado}>
			<h1 className="heading">Página no encotrada</h1>

			<Link href="/"> Volver a Inicio</Link>
		</div>
	);
};

export default NoEncotrado;
