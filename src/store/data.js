
export async function getMovieList() {
    const movieList = fetch("https://movie-app-35590-default-rtdb.firebaseio.com/movies/.json")
        .then(resp => resp.json())
        .then(data => Object.values(data));
    return movieList;
}

export async function addMovie(movie) {
    const data = await fetch("https://movie-app-35590-default-rtdb.firebaseio.com/movies.json", {
        method: "POST",
        body: JSON.stringify({
            name: movie.name, 
            id: movie.id, 
            description: movie.description, 
            imageUrl: movie.imageUrl, 
            yearOfRelease: movie.year, 
            price: movie.price
        }),
        headers: {'Content-Type': "application/json"}
    }).then(resp => resp.json()).then(data => data);
    return data;
}
