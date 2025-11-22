import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useFavorites } from '../context/FavoritesContext';


type DetailResponse = { meals: any[] };


export default function RecipeDetail() {
const { recipeId } = useParams();
const { data, loading, error } = useFetch<DetailResponse>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
const { addFavorite, removeFavorite, isFavorite } = useFavorites();


if (loading) return <p className="p-4">Loading...</p>;
if (error || !data?.meals) return <p className="p-4 text-red-500">Error loading recipe</p>;


const meal = data.meals[0];
const fav = isFavorite(recipeId!);


return (
<div className="p-4">
<img src={meal.strMealThumb} className="w-full max-w-md rounded" />
<h2 className="text-xl font-bold mt-4">{meal.strMeal}</h2>
<button
className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
onClick={() => (fav ? removeFavorite(recipeId!) : addFavorite(recipeId!))}
>
{fav ? 'Remove from Favorites' : 'Add to Favorites'}
</button>
<p className="mt-4 whitespace-pre-line">{meal.strInstructions}</p>
</div>
);
}