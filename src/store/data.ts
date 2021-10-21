export interface Movie {
    description: string;
    id: string;
    imageUrl: string;
    name: string;
    price: number;
    yearOfRelease: number;
}
type Common = {
    baseUrl: string;
    headers: HeadersInit;
}

const common: Common = {
    baseUrl: "https://movie-app-35590-default-rtdb.firebaseio.com",
    headers: {'Content-Type': "application/json"},
}

export async function getMovieList() {
    const movies = await getRequest<Movie>("movies");
    return movies;
}

function getRequest<T>(endpoint: string): Promise<T[]>{
    return fetch(`${common.baseUrl}/${endpoint}/.json`)
        .then(resp => resp.json())
        .then(data => Object.values(data) as T[]);
}

export async function addMovie<T>(movie: Movie): Promise<T> {
    const data = await fetch(`${common.baseUrl}/movies.json`, {
        method: "POST",
        body: JSON.stringify({
            name: movie.name, 
            id: movie.id, 
            description: movie.description, 
            imageUrl: movie.imageUrl, 
            yearOfRelease: movie.yearOfRelease, 
            price: movie.price
        }),
        headers: common.headers
    })
    .then(resp => resp.json())
    .then(data => data);
    return data;
}
