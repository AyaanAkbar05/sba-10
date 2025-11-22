import { Link } from 'react-router-dom';
export default function RecipeCard({ id, name, img }: { id: string; name: string; img: string }) {
return (
<Link to={`/recipe/${id}`} className="border rounded p-2 shadow hover:bg-gray-100">
<img src={img} alt={name} className="rounded" />
<p className="font-semibold mt-2">{name}</p>
</Link>
);
}