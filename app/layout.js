import { Cabin } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ColorPalette from "./components/ColorPalette";
import { AppContextProvider } from "./AppContext";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
    title: "iRecommend",
    description: "find your favorites. share your favorites.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={cabin.className}>
                <AppContextProvider>
                    <Header />
                    {children}
                    <ColorPalette />
                </AppContextProvider>
            </body>
        </html>
    );
}