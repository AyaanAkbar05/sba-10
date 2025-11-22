import { useEffect, useState } from 'react';


export function useFetch<T>(url: string) {
const [data, setData] = useState<T | null>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);


useEffect(() => {
let ignore = false;
setLoading(true);
fetch(url)
.then(res => res.json())
.then(json => {
if (!ignore) {
setData(json);
setLoading(false);
}
})
.catch(() => {
if (!ignore) {
setError('Failed to load data');
setLoading(false);
}
});
return () => { ignore = true }; // cleanup
}, [url]);


return { data, loading, error };
}