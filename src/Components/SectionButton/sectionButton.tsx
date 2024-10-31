import styles from "./sectionStyle.module.css"

export function SectionHome() {



    return(
        <>
        <div className={styles.container}>
                <p className={styles.sectionHome_p}>Estamos trabajando en ello, disculpe las molestías</p>
                <section className={styles.section_img}><img src="https://media.tenor.com/2l4-h42qnmcAAAAj/toothless-dancing-toothless.gif" alt="" />
                </section>              
        </div>
        </>
    )

}