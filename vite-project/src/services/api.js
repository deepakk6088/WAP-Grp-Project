export async function fetchSearchPins({ query = "nature", page = 1, perPage = 30, signal }) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    query
  )}&page=${page}&per_page=${perPage}`;

  const res = await fetch(url, {
    headers: {
      Authorization: import.meta.env.VITE_PEXELS_API_KEY,
    },
    signal,
  });

  return await res.json();
}

export async function fetchCuratedPins({ page = 1, perPage = 30, signal }) {
  const url = `https://api.pexels.com/v1/curated?page=${page}&per_page=${perPage}`;

  const res = await fetch(url, {
    headers: {
      Authorization: import.meta.env.VITE_PEXELS_API_KEY,
    },
    signal,
  });

  return await res.json();
}