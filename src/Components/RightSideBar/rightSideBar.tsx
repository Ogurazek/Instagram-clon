
import styles from './rightSideBar.module.css'



export function RightSideBar() {
    return(
        <>
        <article className={styles.container_art_main}>
            <CardItem
            img='/Icons/Profile Image.jpg'
            name='Perez Elías'
            username='ogurazek'
            subInfo='Cambiar'
            />
            <div className={styles.container_suggestions_title}>
                <span>Sugerencias para ti</span>
                <a className={styles.container_suggestions_title_a} href="">Ver todo</a>
                </div>
            <article className={styles.container_suggestions}>
                
            <CardItem
            img='/Icons/Profile Image.jpg'
            name='Perez Elías'
            username='ogurazek'
            subInfo='Seguir'
            />
             <CardItem
            img='/Icons/Profile Image.jpg'
            name='Perez Elías'
            username='ogurazek'
            subInfo='Seguir'
            />
             <CardItem
            img='/Icons/Profile Image.jpg'
            name='Perez Elías'
            username='ogurazek'
            subInfo='Seguir'
            />
             <CardItem
            img='/Icons/Profile Image.jpg'
            name='Perez Elías'
            username='ogurazek'
            subInfo='Seguir'
            />
             <CardItem
            img='/Icons/Profile Image.jpg'
            name='Perez Elías'
            username='ogurazek'
            subInfo='Seguir'
            />
            </article>
            <footer className={styles.container_footer}>
                <p>Información • Ayuda • Prensa • API • Empleo • Privacidad • Condiciones • Ubicaciones • Idioma • Meta • Verified</p>
                <p><br/>© 2024 INSTAGRAM FROM Perez Elías</p>
            </footer>
        </article>
        </>
    )
}

type CardItemsProps = {
    img: string,
    name: string,
    username: string,
    subInfo: string,
}

function CardItem({ img, name, username, subInfo }: CardItemsProps) {
    return (
        <>
        <header className={styles.header_sideBar}>
                <div className={styles.image_profile_sideBar}>
                    <img src={img} alt={name} />
                </div>
                <div className={styles.box_info}>
                    <strong>{name}</strong>
                    <span>@{username}</span>
                </div>
                <a href="">{subInfo}</a>
            </header>
        </>
    )
}