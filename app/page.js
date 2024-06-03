import Image from "next/image";
import styles from "./page.module.css";
import TopBar from "./components/TopBar";
import ColorPalette from "./components/ColorPalette";
import MovieEntry from "./components/dataEntry/MovieEntry";
export default function Home() {
    return (
        <div>
            <ColorPalette />
        </div>
    );
}
