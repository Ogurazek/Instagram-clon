
import styles from "./cardStyles.module.css"

type CardProps = {
    profileImage: string, 
    name: string, 
    imagePost: string, 
    numberOfLikes: string, 
    description: string;
}


export default function Card({ profileImage, name, imagePost, numberOfLikes, description }: CardProps) {
    return(
        <>
        <article className={styles.article_container}>
            <header className={styles.header_profile}>
                <section className={styles.section_img_profile}><img src={profileImage} alt="nada" />
                <strong>{name}</strong>
                </section>
                <span>...</span> {/*Se me hace innecesario configurarlo porque no le voy a dar utilidad*/}
            </header>
            <section className={styles.section_image_post}><img src={imagePost} alt="" /></section>
            <section className={styles.section_icons_navigation}>
                <div className={styles.section_icons_navigation_imagen}>
            <img src="/Icons/Icon Favourite.svg" alt="" /> 
            <img src="/Icons/Icon Comment.svg" alt="" />
            <img src="/Icons/Icon Messanger.svg" alt="" />
                </div>
                <img src="/Icons/Icon Saved.svg" alt="" />
            </section>
                <div className={styles.div_numberOfLikes}>
                    <span>{numberOfLikes} Me gusta</span>
                </div>
                <div className={styles.div_description}>
                    <p><strong>{name}&nbsp;&nbsp;</strong>{description}</p>
                </div>
            
        </article>
        </>
            )    
    }