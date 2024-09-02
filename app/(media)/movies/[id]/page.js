import styles from './page.module.css'
export default function Movie ({params}) {
    return (
        <div id={styles.container}>
            Movie: {params.id}
        </div>
    );
}