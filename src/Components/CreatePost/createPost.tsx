import styles from './createPostStyles.module.css'


export function CreatePost( {onClick}: {onClick:any;} ) {



    return(
        <>
        <div className={styles.modal}>
            <article className={styles.container_crp}>
                <header className={styles.header_crp}>
                <div className={styles.button_share_crp}>
                <button >Compartir</button>
                </div>
                <span className={styles.span_crp}>
                <strong>Crea una nueva publicación</strong>
                </span>
                <div className={styles.button_arrow_crp}>
                <button onClick={onClick}>
                    <img className={styles.nav_out_img} src="/Icons/Icon X.svg" alt="Salir" />
                </button>
                </div>
                </header>
                <article className={styles.article_container_form}>
                <div className={styles.section_img}><img src="https://i.pinimg.com/originals/9e/f4/71/9ef47118655c14682cbc57aaf69f7702.jpg" alt="" /></div>
                <section className={styles.section_form}>
                    <textarea name="" id=""></textarea>

                </section>
                </article>
            </article>
        </div>
        </>
    )
}