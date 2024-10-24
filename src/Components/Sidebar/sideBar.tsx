import styles from "./sideBar.module.css"


export function SideBar () {
    return(
        <>
            <div className={styles.container_div_main}>
                <header className={styles.header_logo}>
                    <a href=""><img src="/Icons/Instagram.svg" alt="Instagram" /></a>
                </header>
            <ButtonNavigation name="Inicio" icon="/Icons/Icon Home.svg"/>
            <ButtonNavigation name="Buscar" icon="/Icons/Icon Search.svg"/>
            <ButtonNavigation name="Favoritos" icon="/Icons/Icon Favourite.svg"/>
            <ButtonNavigation name="Mensajes" icon="/Icons/Icon Messanger.svg"/>
            <ButtonNavigation name="Explorar" icon="/Icons/Icon more.svg"/>
            <ButtonNavigation name="Reels" icon="/Icons/Icons Reels.svg"/>
            <ButtonNavigation name="Perfil" icon="/Icons/Profile Image.jpg"/>
            <section className={styles.section_menu}>
                <ButtonNavigation name="Menú" icon="/Icons/Icon Menu.svg"/>
            </section>
            </div>
            
        </>
    )
}


function ButtonNavigation({name, icon}: {name: string, icon?: string}) {
    const isProfile = name === "Perfil"; //Si el nombre es Perfil... Este tomara otra clase así le puedo agregar el radius

    return(
        <>
         <nav className={styles.nav_container}>
                    <button className={isProfile ? styles.profile_button : ""}>
                        <div className={styles.icon_img}>
                        <img src={icon} alt="Icon" />{name}
                        </div>
                    </button>
            </nav>
        </>
    )
}