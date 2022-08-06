import Entrada from '../components/Entrada';
import styles from '../styles/Blog.module.css';

const ListadoBlog = ({ entradas }) => {
	return (
		<div>
			<h2 className="heading">Blog</h2>

			<div className={styles.blog}>
				{entradas.map((entrada) => (
					<Entrada key={entrada._id} entrada={entrada} />
				))}
			</div>
		</div>
	);
};

export default ListadoBlog;
