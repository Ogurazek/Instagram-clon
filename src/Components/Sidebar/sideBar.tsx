
import styles from "./sideBar.module.css"

interface sideBarProps {
    actualizarEstadoHome: (NewState: boolean) => void;
}

export function SideBar ({ actualizarEstadoHome }: sideBarProps) {

    const handleClick = () => {
        actualizarEstadoHome(true)
    }
    const handleClickComeBack = () => {
        actualizarEstadoHome(false)
    }
   

    return(
        <>
            <div className={styles.container_div_main}>
                <header className={styles.header_logo}>
                    <a href=""><img src="/Icons/Instagram.svg" alt="Instagram" /></a>
                </header>
            <ButtonNavigation name="Inicio" icon="/Icons/Icon Home.svg" OnClick={handleClickComeBack} />
            <ButtonNavigation name="Buscar" icon="/Icons/Icon Search.svg" OnClick={handleClick}/>
            <ButtonNavigation name="Reels" icon="/Icons/Icons Reels.svg" OnClick={handleClick}/>
            <ButtonNavigation name="Mensajes" icon="/Icons/Icon Messanger.svg" OnClick={handleClick}/>
            <ButtonNavigation name="Notificaciones" icon="/Icons/Icon Favourite.svg" OnClick={handleClick}/>
            <ButtonNavigation name="Crear" icon="/Icons/Icon more.svg" OnClick={handleClick}/>
            <ButtonNavigation name="Perfil" icon="/Icons/Profile Image.jpg" OnClick={handleClick}/>
            <section className={styles.section_menu}>
                <ButtonNavigation name="Más" icon="/Icons/Icon Menu.svg" OnClick={handleClick}/>
            </section>
            </div>
            
        </>
    )
}


function ButtonNavigation({name, icon, OnClick}: {name: string, icon?: string, OnClick?: any,}) {
    const isProfile = name === "Perfil"; //Si el nombre es Perfil... Este tomara otra clase así le puedo agregar el radius

    return(
        <>
         <nav className={styles.nav_container}>
                    <button onClick={OnClick} className={isProfile ? styles.profile_button : ""}>
                        <div className={styles.icon_img}>
                        <img src={icon} alt="Icon" />{name}
                        </div>
                    </button>
            </nav>
        </>
    )
}