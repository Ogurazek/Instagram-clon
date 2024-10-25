import styles from "./homeStyles.module.css"
import Card from "../Card/card"

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
            <Card
            name="Perez Elías 😎"
            profileImage="/Icons/Profile Image.jpg"
            imagePost="/Icons/Profile Image.jpg"
            numberOfLikes="200"
            description="Estoy buscando un nuevo laburo, ayuda..."
            hours="4"
            />
            <Card
            name="Lionel Messi"
            profileImage="https://img.olympics.com/images/image/private/t_1-1_300/f_auto/v1687307644/primary/cqxzrctscdr8x47rly1g"
            imagePost="https://cdn.motor1.com/images/mgl/1ZQwYp/s3/hennessey-chevrolet-camaro-zl1-exorcist-final-edition.jpg"
            numberOfLikes="23123.213012313.123"
            description="Miren el auto chavales que me compre, ni CR7 se animo a tanto.. Boee chicos, así esta messi?"
            hours="9"
            />
            <Card
            name="Lionel Messi"
            profileImage="https://img.olympics.com/images/image/private/t_1-1_300/f_auto/v1687307644/primary/cqxzrctscdr8x47rly1g"
            imagePost="https://cdn.motor1.com/images/mgl/1ZQwYp/s3/hennessey-chevrolet-camaro-zl1-exorcist-final-edition.jpg"
            numberOfLikes="23123.213012313.123"
            description="Miren el auto chavales que me compre, ni CR7 se animo a tanto.. Boee chicos, así esta messi?
            Miren el auto chavales que me compre, ni CR7 se animo a tanto.. Boee chicos, así esta messi?"
            hours="24"
            />
        </main>
        </>
    )
}


export function CardHistory({ image, title }: {image:string, title:string}) {

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