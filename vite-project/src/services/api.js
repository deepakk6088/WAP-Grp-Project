export async function fetchPins(query = "nature", page = 1, perPage = 30) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    query
  )}&page=${page}&per_page=${perPage}`;

  const res = await fetch(url, {
    headers: {
      Authorization: import.meta.env.VITE_PEXELS_API_KEY,
    },
  });

  const data = await res.json();

  return data.photos || [];  
}