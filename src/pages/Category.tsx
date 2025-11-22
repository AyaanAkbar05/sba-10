import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import RecipeCard from '../components/RecipeCard';


type Meal = { idMeal: string; strMeal: string; strMealThumb: string };


type MealResponse = { meals: Meal[] };


export default function Category() {
const { categoryName } = useParams();
const { data, loading, error } = useFetch<MealResponse>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);


if (loading) return <p className="p-4">Loading...</p>;
if (error || !data?.meals) return <p className="p-4 text-red-500">Error loading recipes</p>;


return (
<div className="p-4 grid grid-cols-2 gap-4">
{data.meals.map(m => (
<RecipeCard key={m.idMeal} id={m.idMeal} name={m.strMeal} img={m.strMealThumb} />
))}
</div>
);
}