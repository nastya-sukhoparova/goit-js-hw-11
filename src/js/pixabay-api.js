export async function fetchImages(query, page) {
  const API_KEY = '46065959-261c5874db82aaa09dfa5c313'; 
  const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&safesearch=true`);
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}
