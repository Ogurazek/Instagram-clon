import { useState } from 'react';
import styles from './createPostStyles.module.css'

export function CreatePost({ onClick, postHome, setPost, closeModal }: { onClick: any; postHome: any, setPost: any, closeModal: any }) {
    const [description, setDescription] = useState("");
    const [imagePost, setimagePost] = useState("");
    const [name, setName] = useState("");
    const [imgProfile, setImgProfile] = useState("");
    const counter = description.length;

    const handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setimagePost(event.target.value)
    }
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const handleChangeImageProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImgProfile(event.target.value)
    }

    const messageRecu = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value)


    }

    const handleSubmite = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newItem = {
            description: description || "La nada absoluta mi rey",
            imagePost: imagePost || "/Icons/Icon Loading.svg",
            name: name || "perezelias_",
            imgProfile: imgProfile || "/Icons/Profile Image.jpg",

        };
        setPost([...postHome, newItem]);
        console.log(postHome);
        closeModal(false)

    }


    return (
        <>
            <form action="" onSubmit={handleSubmite}>
                <div className={styles.modal}>
                    <article className={styles.container_crp}>
                        <header className={styles.header_crp}>
                            <div className={styles.button_share_crp}>
                                <button type="submit">Compartir</button>
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
                            <div className={styles.section_img}><img src={imagePost || "/Icons/Icon Loading.svg"} alt="" /></div>
                            <section className={styles.section_form}>
                                <div className={styles.section_span}>
                                    <img src={imgProfile || "/Icons/Icon Loading.svg"} alt="" />
                                    <strong>{name || "Sin nombre"}</strong>
                                </div>
                                <div className={styles.section_form_textarea} >
                                    <textarea
                                        name=""
                                        id=""
                                        value={description}
                                        onChange={messageRecu}
                                        maxLength={350}></textarea>
                                </div>
                                <section className={styles.section_form_words}>
                                    <button disabled><img src="/Icons/Icon Emoji.svg" alt="" /></button>
                                    <div><p>{counter}/350</p></div>
                                </section>
                                <div className={styles.container_input}>
                                    <div>
                                        <label>Imagen(url)</label>
                                        <input
                                            type="text"
                                            placeholder='https://www.ejemplo.com'
                                            value={imagePost}
                                            onChange={handleChangeImage}
                                        />
                                    </div>
                                    <div>
                                        <label>Nombre</label>
                                        <input
                                            type="text"
                                            placeholder='perezelias_'
                                            value={name}
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
                            </section>
                        </article>
                    </article>
                </div>
            </form>
        </>
    )
}