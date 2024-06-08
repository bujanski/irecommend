import { createContext } from "react";

export const appContext = createContext(null);

export const appInitialData = {
    recCategories: {
        books: {
            title: "Books",
            url: "/books",
        },
        movies: {
            title: "Movies",
            url: "/movies",
        },
        musicians: {
            title: "Musicians",
            url: "/musicians",
        },
        tabletopGames: {
            title: "Tabletop Games",
            url: "/tabletop-games",
        },
        tvShows: {
            title: "TV Shows",
            url: "/tv-shows",
        },
        videoGames: {
            title: "Video Games",
            url: "/video-games",
        },
    },
};
