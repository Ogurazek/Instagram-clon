import { useState } from 'react';
import styles from './createPostStyles.module.css'

export function CreatePost( {onClick}: {onClick:any;} ) {
    const [message, setMessage] = useState("");
    const counter = message.length;

    const messageRecu = (event: any) => {
        setMessage(event.target.value)
    }

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
                <div className={styles.section_img}><img src="/Icons/Icon Loading.svg" alt="" /></div>
                <section className={styles.section_form}>
                    <div className={styles.section_span}>
                        <img src="/Icons/Profile Image.jpg" alt="" />
                        <strong>perezelias_</strong>
                    </div>
                    <div className={styles.section_form_textarea} >
                    <textarea name="" id="" value={message} onChange={messageRecu} maxLength={250}></textarea>
                    </div>
                    <section className={styles.section_form_words}>
                        <button><img src="/Icons/Icon Emoji.svg" alt="" /></button>
                        <div><p>{counter}/250</p></div>
                    </section>
                    <div className={styles.container_input}>
                        <span>Imagen(url)</span>
                        <input type="text" placeholder='https://www.ejemplo.com' />
                    </div>
                </section>
                </article>
            </article>
        </div>
        </>
    )
}