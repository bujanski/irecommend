"use client";
import { createContext, useState, useMemo } from "react";

export const AppContext = createContext(null);

export const appInitialData = {
    // Authentication data
    isAuthenticated: false,
    user: null,
    token: null,
    roles: [],
    permissions: [],
    loading: false,

    // Theme settings
    theme: "light", // or 'dark'
    customStyles: {}, // Custom styles for the theme

    // Localization
    language: "en", // Default language
    translations: {}, // Translation object (usually fetched from a file or API)

    // App state - global state and user settings
    // API data
    // Modal states
};

export const AppContextProvider = ({ children }) => {
    const [state, setState] = useState(appInitialData);

    const contextValue = useMemo(() => ({ state, setState }), [state]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}
