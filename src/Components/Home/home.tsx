import styles from "./homeStyles.module.css"

export function Home() {
    return(
        <>
        <main className={styles.containerHome}>
            <header className={styles.home_header}>
            <CardHistory image="/Icons/Profile Image.jpg" title="Capítulo 1"/>
            <CardHistory image="/Icons/Profile Image.jpg" title="Capítulo 2"/>
            <CardHistory image="/Icons/Profile Image.jpg" title="Capítulo 3"/>
            <CardHistory image="/Icons/Profile Image.jpg" title="Capítulo 4"/>
            <CardHistory image="/Icons/Profile Image.jpg" title="Capítulo 5"/>
            <CardHistory image="/Icons/Profile Image.jpg" title="Capítulo 6"/>
            <CardHistory image="/Icons/Profile Image.jpg" title="Capítulo 7"/>
            <CardHistory image="/Icons/Profile Image.jpg" title="Capítulo 8"/>
            </header>
            <h1>hola</h1>
        </main>
        </>
    )
}


function CardHistory({ image, title }: {image:string, title:string}) {

    return(
        <>
        <article className={styles.containerCardHistory_article}>
        <section className={styles.containerCardHistory}>
            <img src={image} alt={title} />
                
        </section>
        <strong>{title}</strong>
        </article>
        </>
    )
}