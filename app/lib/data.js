import { Movie } from "./models/Movie";
import { Book } from "./models/Book";
import { dbConnect } from "./utils";

export const getMovies = async () => {
    try {
        dbConnect();
        const movies = await Movie.find();
        return movies;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch movies");
    }
};

export const getBooks = async () => {
    try {
        dbConnect();
        const books = await Book.find();
        return books;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch movies");
    }
};