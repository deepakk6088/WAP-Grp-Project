const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = "https://api.pexels.com/v1";

// High-quality mock data for each category to ensure the app "just works"
const MOCK_DATA = {
  Nature: [
    { id: 100, photographer: "Nature Pro", src: { large2x: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg" }, alt: "Nature inspiration" },
    { id: 101, photographer: "Eco Shot", src: { large2x: "https://images.pexels.com/photos/15286/pexels-photo.jpg" }, alt: "Forest vibes" },
  ],
  Travel: [
    { id: 200, photographer: "Globe Trotter", src: { large2x: "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg" }, alt: "Travel goals" },
    { id: 201, photographer: "Wanderlust", src: { large2x: "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg" }, alt: "Mountain view" },
  ],
  Food: [
    { id: 300, photographer: "Chef Master", src: { large2x: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" }, alt: "Delicious meal" },
    { id: 301, photographer: "Foodie", src: { large2x: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" }, alt: "Healthy breakfast" },
  ],
  // Default fallback for other categories
  Default: [
    { id: 999, photographer: "Pixora Creator", src: { large2x: "https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg" }, alt: "Modern inspiration" },
    { id: 998, photographer: "Visual Artist", src: { large2x: "https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg" }, alt: "Creative design" },
  ]
};

function getMockResponse(query, page, perPage) {
  const category = query || "Nature";
  const photos = MOCK_DATA[category] || MOCK_DATA.Default;
  return {
    photos: photos.map(p => ({ ...p, id: p.id + (page * 1000) })), // Unique IDs per page
    page,
    per_page: perPage,
    total_results: 100
  };
}

export async function fetchSearchPins({ query, page = 1, perPage = 30, signal }) {
  // If no API key, use the high-quality mock data
  if (!API_KEY || API_KEY === "your_api_key_here" || API_KEY === "PASTE_YOUR_KEY_HERE") {
    console.warn("Using high-quality mock data because API Key is missing.");
    return getMockResponse(query, page, perPage);
  }

  const url = `${BASE_URL}/search?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`;

  const res = await fetch(url, {
    headers: { Authorization: API_KEY },
    signal,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || `API Error: ${res.status}`);
  }

  return await res.json();
}

export async function fetchCuratedPins({ page = 1, perPage = 30, signal }) {
  if (!API_KEY || API_KEY === "your_api_key_here" || API_KEY === "PASTE_YOUR_KEY_HERE") {
    console.warn("Using high-quality mock data because API Key is missing.");
    return getMockResponse("Nature", page, perPage);
  }

  const url = `${BASE_URL}/curated?page=${page}&per_page=${perPage}`;

  const res = await fetch(url, {
    headers: { Authorization: API_KEY },
    signal,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || `API Error: ${res.status}`);
  }

  return await res.json();
}