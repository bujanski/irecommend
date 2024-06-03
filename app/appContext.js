import { createContext } from "react";

export const appContext = createContext(null);

export const appInitialData = {
    recCategories: {
        books: {
            title: "Books",
            description:
                "Explore a wide range of books from different genres and authors.",
            url: "https://example.com/books",
        },
        movies: {
            title: "Movies",
            description:
                "Find recommendations for the latest and greatest movies.",
            url: "https://example.com/movies",
        },
        musicians: {
            title: "Musicians",
            description:
                "Discover new music and artists across various genres.",
            url: "https://example.com/musicians",
        },
        tabletopGames: {
            title: "Tabletop Games",
            description:
                "Dive into the world of board games and tabletop adventures.",
            url: "https://example.com/tabletop-games",
        },
        tvShows: {
            title: "TV Shows",
            description:
                "Catch up on the most popular and critically acclaimed TV shows.",
            url: "https://example.com/tv-shows",
        },
        videoGames: {
            title: "Video Games",
            description:
                "Stay updated with the latest video games and industry news.",
            url: "https://example.com/video-games",
        },
    },
};
