import Guitarra from './Guitarra';
import styles from '../styles/Listado.module.css';

const Listado = ({ guitarras }) => {
	return (
		<div className={styles.listado}>
			{guitarras.map((guitarra) => (
				<Guitarra guitarra={guitarra} key={guitarra.id} />
			))}
		</div>
	);
};

export default Listado;
