const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export async function fetchPins(query = "nature", page = 1, perPage = 30) {
  try {
    const url =
      query === "All"
        ? `https://api.pexels.com/v1/curated?per_page=${perPage}&page=${page}`
        : `https://api.pexels.com/v1/search?query=${encodeURIComponent(
            query
          )}&per_page=${perPage}&page=${page}`;

    const res = await fetch(url, {
      headers: {
        Authorization: API_KEY,
      },
    });

    if (!res.ok) {
      throw new Error("API failed");
    }

    const data = await res.json();
    return data.photos || [];
  } catch (error) {
    console.error("API error:", error);
    return [];
  }
}