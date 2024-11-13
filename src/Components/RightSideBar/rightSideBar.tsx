
import styles from './rightSideBar.module.css'



export function RightSideBar() {
    return (
        <>
            <article className={styles.container_art_main}>
                <CardItem
                    img='/Icons/Profile Image.jpg'
                    name='Monzón Tiziana'
                    username='tiziana_mnz'
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
        name: "Jose Bullón",
        username: "oblivion12",
        subInfo: "Seguir",
        img: "https://scontent.fcnq2-2.fna.fbcdn.net/v/t1.6435-1/51475071_2046929948694390_7587884151651434496_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeGk0SsoUmMJzw_27XA4MEWj16dyF5f0TLbXp3IXl_RMtv5eAMGOFKt7SnLUF2C0BAby4RlrzxA4wsr-gQHy4O-c&_nc_ohc=U7puoFx9J0cQ7kNvgEQuYTZ&_nc_zt=24&_nc_ht=scontent.fcnq2-2.fna&_nc_gid=A2oHnNtKnoXWWij3a1NdCMY&oh=00_AYAJ5hy3TtiafExhQomFWIPG40n18Y6qxxdpkw7ve-VF2w&oe=674713BE",
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
        name: "Angelica Bullón",
        username: "angelicabullon",
        subInfo: "Seguir",
        img: "/img/rightBarPicture.jpg",
    },
]