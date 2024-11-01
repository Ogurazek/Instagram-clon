import styles from "./footerStyles.module.css"


export function Footer() {

    return(
        <>
        <article className={styles.container}>
            <header className={styles.header_footer}>
                <img src="/img/Logo Fotter.png" alt="" />
            </header>
            <strong>Estás al día</strong>
            <span>Viste todas las publicaciones nuevas de los últimos 3 días</span>
            <a href="#">Ver Publicaciones anteriores</a>
        </article>
        </>
    )
}