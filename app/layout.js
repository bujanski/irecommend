import { Cabin } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata = {
    title: "iRecommend",
    description: "find your favorites. share your favorites.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={cabin.className}>
                <TopBar />
                {children}
            </body>
        </html>
    );
}
