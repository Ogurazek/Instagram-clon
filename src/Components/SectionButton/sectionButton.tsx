import styles from "./sectionStyle.module.css"

export function SectionHome() {



    return (
        <>
            <div className={styles.container}>
                <div className={styles.container_p}>
                    <p>Estamos trabajando en ello, disculpe las molestías</p>
                    <p className={styles.sectionHome_p}>(Funciona solo Crear e Inicio por el momento ❤️😎)</p>
                </div>
                <section className={styles.section_img}><img src="https://media.tenor.com/2l4-h42qnmcAAAAj/toothless-dancing-toothless.gif" alt="" />
                </section>
            </div>
        </>
    )

}