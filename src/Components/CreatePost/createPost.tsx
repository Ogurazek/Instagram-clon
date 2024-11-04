import { useState } from 'react';
import styles from './createPostStyles.module.css'

export function CreatePost({ onClick }: { onClick: any; }) {
    const [message, setMessage] = useState("");
    const [urlImage, setUrlImage] = useState("");
    const [namePost, setNamePost] = useState("");
    const [imgProfile, setImgProfile] = useState("");
    const counter = message.length;

    const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrlImage(event.target.value)
    }
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNamePost(event.target.value)
    }
    const handleChangeImageProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImgProfile(event.target.value)
    }

    const messageRecu = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value)
        console.log(message)

    }


    return (
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
                        <div className={styles.section_img}><img src={urlImage || "/Icons/Icon Loading.svg"} alt="" /></div>
                        <section className={styles.section_form}>
                            <form action="">
                                <div className={styles.section_span}>
                                    <img src={imgProfile || "/Icons/Icon Loading.svg"} alt="" />
                                    <strong>{namePost || "Sin nombre"}</strong>
                                </div>
                                <div className={styles.section_form_textarea} >
                                    <textarea
                                        name=""
                                        id=""
                                        value={message}
                                        onChange={messageRecu}
                                        maxLength={250}></textarea>
                                </div>
                                <section className={styles.section_form_words}>
                                    <button><img src="/Icons/Icon Emoji.svg" alt="" /></button>
                                    <div><p>{counter}/250</p></div>
                                </section>
                                <div className={styles.container_input}>
                                    <div>
                                        <label>Imagen(url)</label>
                                        <input
                                            type="text"
                                            placeholder='https://www.ejemplo.com'
                                            value={urlImage}
                                            onChange={handleChangeImage}
                                        />
                                    </div>
                                    <div>
                                        <label>Nombre</label>
                                        <input
                                            type="text"
                                            placeholder='perezelias_'
                                            value={namePost}
                                            onChange={handleChangeName}
                                            maxLength={12}
                                        />
                                    </div>
                                    <div>
                                        <label>Img Perfil</label>
                                        <input
                                            type="text"
                                            placeholder='https://www.ejemplo.com'
                                            value={imgProfile}
                                            onChange={handleChangeImageProfile}
                                        />
                                    </div>
                                </div>
                            </form>
                        </section>
                    </article>
                </article>
            </div>
        </>
    )
}