const URL = '/api';

export async function getContinents() {  
    const url = `${URL}/continents`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}
