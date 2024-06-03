import styles from "./TopBar.module.css";
import Hamburger from "./Hamburger";
export default function TopBar() {
    return (
        <div id={styles.container}>
            <div id={styles.row1}>
                <div id={styles.hamburger}>
                    <Hamburger />
                </div>

                <div id={styles.iRecommend}>iRecommend</div>
                <div id={styles.account}>sign in</div>
            </div>
            <div id={styles.row2}>find your favorites. share your favorites.</div>
        </div>
    );
}
