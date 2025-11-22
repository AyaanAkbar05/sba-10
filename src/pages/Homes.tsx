import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';


type Cat = { strCategory: string; strCategoryThumb: string };


type CatResponse = { categories: Cat[] };


export default function Home() {
const { data, loading, error } = useFetch<CatResponse>('https://www.themealdb.com/api/json/v1/1/categories.php');


if (loading) return <p className="p-4">Loading...</p>;
if (error) return <p className="p-4 text-red-500">Error loading categories</p>;


return (
<div className="p-4 grid grid-cols-2 gap-4">
{data?.categories?.map(c => (
<Link key={c.strCategory} to={`/category/${c.strCategory}`} className="border p-2 rounded shadow">
<img src={c.strCategoryThumb} className="rounded" />
<p className="font-semibold text-center mt-2">{c.strCategory}</p>
</Link>
))}
</div>
);
}