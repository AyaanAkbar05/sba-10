import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [query, setQuery] = useState('');
  const nav = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    nav(`/search?query=${query}`);
  };

  return (
    <div className="p-4 bg-gray-800 text-white flex justify-between text-xl font-semibold">
      <a href="/">Recipe Discovery</a>
      <a href="/favorites" className="hover:underline">Favorites</a>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="px-2 py-1 text-white-800"
          placeholder="Search meals..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
