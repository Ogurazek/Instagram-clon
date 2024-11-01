import styles from './createPostStyles.module.css'


export function CreatePost( {onClick}: {onClick:any;} ) {



    return(
        <>
        <div className={styles.modal}>
            <article className={styles.container_crp}>
                <header className={styles.header_crp}>
                <button className={styles.button_arrow_crp}>Flecha</button>
                <button className={styles.button_arrow_crp}>Flecha</button>
                <button className={styles.button_arrow_crp} onClick={onClick}>X</button>
                </header>
                <div><img src="" alt="" /></div>
                <section></section>
            </article>
        </div>
        </>
    )
}