import Curso from '../components/Curso';
import Layout from '../components/Layout';
import Listado from '../components/Listado';
import ListadoBlog from '../components/ListadoBlog';

const Home = ({ guitarras, curso, entradas }) => {
	return (
		<Layout pagina={'Inicio'} guitarra={guitarras[2]}>
			<main className="contenedor">
				<h1 className="heading">Nuestra Colección</h1>

				<Listado guitarras={guitarras} />
			</main>

			<Curso curso={curso} />

			<section className="contenedor">
				<ListadoBlog entradas={entradas} />
			</section>
		</Layout>
	);
};

export async function getServerSideProps() {
	const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:asc`;
	const urlCursos = `${process.env.API_URL}/cursos`;
	const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=createdAt:desc`;

	const [resGuitarras, resCursos, resBlog] = await Promise.all([
		fetch(urlGuitarras),
		fetch(urlCursos),
		fetch(urlBlog),
	]);

	const [guitarras, curso, entradas] = await Promise.all([
		resGuitarras.json(),
		resCursos.json(),
		resBlog.json(),
	]);

	return {
		props: {
			guitarras,
			curso,
			entradas,
		},
	};
}

export default Home;
