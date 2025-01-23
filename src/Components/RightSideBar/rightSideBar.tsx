
import styles from './rightSideBar.module.css'



export function RightSideBar() {
    return (
        <>
            <article className={styles.container_art_main}>
                <CardItem
                    img='/img/imgProfile.png'
                    name='Elías Pérez'
                    username='Ogurazek'
                    subInfo='Cambiar'
                    verify=''
                />
                <div className={styles.container_suggestions_title}>
                    <span>Sugerencias para ti</span>
                    <a className={styles.container_suggestions_title_a} href="">Ver todo</a>
                </div>
                <article className={styles.container_suggestions}>
                    {suggestions.map(suggestion => (
                        <CardItem
                            key={suggestion.id}
                            img={suggestion.img}
                            name={suggestion.name}
                            username={suggestion.username}
                            subInfo={suggestion.subInfo}
                            verify={suggestion.verify}
                        />
                    ))}

                </article>
                <footer className={styles.container_footer}>
                    <p>Información • Ayuda • Prensa • API • Empleo • Privacidad • Condiciones • Ubicaciones • Idioma • Meta • Verified</p>
                    <p><br />© 2024 INSTAGRAM FROM Perez Elías</p>
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
    verify?: string,
}

function CardItem({ img, name, username, subInfo, verify }: CardItemsProps) {
    return (
        <>
            <header className={styles.header_sideBar}>
                <div className={styles.image_profile_sideBar}>
                    <img src={img} alt={name} />
                </div>
                <div className={styles.box_info}>
                    <strong>{name}<img src={verify} /></strong>
                    <span>@{username}</span>
                </div>
                <a href="">{subInfo}</a>
            </header>
        </>
    )
}


const suggestions = [
    {
        id: "1",
        name: "Emma roberts",
        username: "emmaroberts",
        subInfo: "Seguir",
        verify: "/Icons/Icon Verify.svg",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueor2IdcxI1_FBSGMdpd-x4XE6I9p5VUj6Q&s",
    },
    {
        id: "4",
        name: "Mark Zuckerberg",
        username: "markzuckerberg",
        subInfo: "Seguir",
        img: "https://assets.entrepreneur.com/content/3x2/2000/1736872453-mark-zuckerberg-0125-g-2019207157.jpg",
    },
    {
        id: "2",
        name: "Kristen Stewart",
        username: "kristenstewart",
        subInfo: "Seguir",
        verify: "/Icons/Icon Verify.svg",
        img: "https://th.bing.com/th/id/OIP.sBUriZ95eCyDFn3JHsGamgHaLH?rs=1&pid=ImgDetMain",
    },
    {
        id: "3",
        name: "Robert Pattinson",
        username: "robertpattinson",
        subInfo: "Seguir",
        verify: "/Icons/Icon Verify.svg",
        img: "https://media.gq.com.mx/photos/61eae22d5def32c5619cf082/3:2/w_3000,h_2000,c_limit/GettyImages-1183868862.jpg",
    },
    {
        id: "5",
        name: "Elon Musk",
        username: "elonmusk",
        subInfo: "Seguir",
        img: "https://media.cnn.com/api/v1/images/stellar/prod/cnne-1755949-elon-musk.jpg?c=original",
    },
]