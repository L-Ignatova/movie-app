
export async function getMovieList() {
    return fetch("https://movie-app-35590-default-rtdb.firebaseio.com/movies/.json")
        .then(resp => resp.json());
}

export async function addMovie({name, id, description, imageUrl, yearOfRelease, price}) {
    const response = await fetch("https://movie-app-35590-default-rtdb.firebaseio.com/movies.json", {
        method: "POST",
        body: JSON.stringify({name, id, description, imageUrl, yearOfRelease, price}),
        headers: {'Content-Type': "application/json"}
    });
    return await response.json();
}
