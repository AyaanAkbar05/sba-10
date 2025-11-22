import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';


type FavContextType = {
favorites: string[];
addFavorite: (id: string) => void;
removeFavorite: (id: string) => void;
isFavorite: (id: string) => boolean;
};


const FavoritesContext = createContext<FavContextType | null>(null);


export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);


const addFavorite = (id: string) => setFavorites([...favorites, id]);
const removeFavorite = (id: string) => setFavorites(favorites.filter(f => f !== id));
const isFavorite = (id: string) => favorites.includes(id);


return (
<FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
{children}
</FavoritesContext.Provider>
);
};


export const useFavorites = () => useContext(FavoritesContext)!;