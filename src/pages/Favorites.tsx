import { useFavorites } from '../context/FavoritesContext';
import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';


type Meal = { idMeal: string; strMeal: string; strMealThumb: string };


type DetailResponse = { meals: Meal[] };


export default function Favorites() {
const { favorites } = useFavorites();
const [recipes, setRecipes] = useState<Meal[]>([]);


useEffect(() => {
async function loadAll() {
const results: Meal[] = [];
for (const id of favorites) {
const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
const json: DetailResponse = await res.json();
if (json.meals) results.push(json.meals[0]);
}
setRecipes(results);
}
loadAll();
}, [favorites]);


if (!favorites.length) return <p className="p-4">No favorites yet.</p>;


return (
<div className="p-4 grid grid-cols-2 gap-4">
{recipes.map(m => (
<RecipeCard key={m.idMeal} id={m.idMeal} name={m.strMeal} img={m.strMealThumb} />
))}
</div>
);
}