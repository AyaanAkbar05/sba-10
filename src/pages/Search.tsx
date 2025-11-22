import { useFetch } from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';


type Meal = { idMeal: string; strMeal: string; strMealThumb: string };


type SearchResponse = { meals: Meal[] };


export default function Search() {
const q = new URLSearchParams(useLocation().search).get('query') || '';
const { data, loading, error } = useFetch<SearchResponse>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`);


if (loading) return <p className="p-4">Loading...</p>;
if (error) return <p className="p-4 text-red-500">Error loading search</p>;
if (!data?.meals) return <p className="p-4">No results for "{q}"</p>;


return (
<div className="p-4 grid grid-cols-2 gap-4">
{data.meals.map(m => (
<RecipeCard key={m.idMeal} id={m.idMeal} name={m.strMeal} img={m.strMealThumb} />
))}
</div>
);
}