const API_BASE_URL = 'https://superheroapi.com/';
const API_KEY = '5995732007165992';

export async function apiGet(queryString) {
  // https://superheroapi.com/api/5995732007165992/search/name
  // ?maxResults=${maxResults}&startIndex=${startIndex}

  const response = await fetch(
    `${API_BASE_URL}api.php/${API_KEY}/${queryString}`
  ).then(res => res.json());

  return response;
}
