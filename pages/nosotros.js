import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Nosotros.module.css';

const Nosotros = () => {
	return (
		<Layout pagina={'Nosotros'}>
			<main className="contenedor">
				<h2 className="heading">Nosotros</h2>

				<div className={styles.contenido}>
					<Image
						layout="responsive"
						src="/img/nosotros.jpg"
						alt="nosotros image"
						width={600}
						height={450}
					/>

					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eum
							voluptatum mollitia ratione doloribus in sapiente est facilis, ex,
							aliquam necessitatibus! Aut nulla quaerat vero aspernatur. Atque
							animi ex expedita labore voluptatem neque obcaecati. Nemo est
							necessitatibus excepturi, ipsam illo hic ex odit mollitia harum
							sapiente quos tempora voluptatibus optio corrupti eaque blanditiis
							deleniti, consequuntur esse, possimus nam porro impedit eos.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eum
							voluptatum mollitia ratione doloribus in sapiente est facilis, ex,
							aliquam necessitatibus! Aut nulla quaerat vero aspernatur. Atque
							animi ex expedita labore voluptatem neque obcaecati. Nemo est
							necessitatibus excepturi, ipsam illo hic ex odit mollitia harum
							sapiente quos tempora voluptatibus optio corrupti eaque blanditiis
							deleniti, consequuntur esse, possimus nam porro impedit eos.
						</p>
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default Nosotros;
