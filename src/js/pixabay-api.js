const API_KEY = '46065959-261c5874db82aaa09dfa5c313';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 40) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching images');
    }
    return response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
