import Curso from '../components/Curso';
import Layout from '../components/Layout';
import Listado from '../components/Listado';
import ListadoBlog from '../components/ListadoBlog';

const Home = ({ guitarras, curso, entradas }) => {
	return (
		<Layout pagina={'Inicio'} guitarra={guitarras[4]}>
			<main className="contenedor">
				<h1 className="heading">Nuestra Colección</h1>

				<Listado guitarras={guitarras} />
			</main>

			<Curso curso={curso[0]} />

			<section className="contenedor">
				<ListadoBlog entradas={entradas} />
			</section>
		</Layout>
	);
};

export async function getServerSideProps() {
	const urlGuitarras = `${process.env.API_URL}/guitarras`;
	const urlCursos = `${process.env.API_URL}/cursos`;
	const urlBlog = `${process.env.API_URL}/blogs`;

	const options = {
		headers: { apikey: process.env.API_KEY },
	};

	const [resGuitarras, resCursos, resBlog] = await Promise.all([
		fetch(urlGuitarras, options),
		fetch(urlCursos, options),
		fetch(urlBlog, options),
	]);

	const [guitarras, curso, entradas] = await Promise.all([
		resGuitarras.json(),
		resCursos.json(),
		resBlog.json(),
	]);

	console.log(guitarras[4]);

	return {
		props: {
			guitarras,
			curso,
			entradas,
		},
	};
}

export default Home;
