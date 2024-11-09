import styles from "./homeStyles.module.css";
import Card from "../Card/card";
import { useState } from "react";
import { Footer } from "../Footer/footer";
import { CreatePost } from "../CreatePost/createPost";


interface CardInfo {
  title: string;
  img: string;
  background: string;
  hours: string;
}
interface PostInfo {
  description: string;
  imagePost: string;
  name: string;
  imgProfile: string;
}
interface HomeProps {
  actualizarEstado: (NewState: boolean) => void;
  actualizarEstadoModal: (NewState: boolean) => void;
  EstadoModal: boolean;

}
export function Home({ actualizarEstado, EstadoModal, actualizarEstadoModal }: HomeProps) {
  // 1 - Estado para guardar la información de la tarjeta seleccionada
  const [selectedCardInfo, setSelectedCardInfo] = useState<CardInfo | null>(null);
  const [postHome, setPost] = useState<Array<PostInfo>>([]);

  // 2 - Función para guardar la información en el estado
  const handleCardClick = (info: CardInfo) => {
    setSelectedCardInfo(info);
    actualizarEstado(true); // Muestra la información de la tarjeta
  };
  const handleCardClickClose = () => {
    setSelectedCardInfo(null); // Resetea la tarjeta seleccionada
    actualizarEstado(false); // Oculta la información de la tarjeta // Muestra la información de la tarjeta
  };

  const handleClickCloseModal = () => {
    actualizarEstadoModal(false)
  }


  return (
    <>
      {!selectedCardInfo &&
        <main className={styles.containerHome}>
          <header className={styles.home_header}>
            {/* Muestra las tarjetas solo si no hay tarjeta seleccionada */}
            {stories.map(story => (
              <CardHistory
                key={story.id}
                title={story.title}
                image={story.img}
                onClick={() => handleCardClick(story)}
              />
            ))}

          </header>
          {!selectedCardInfo &&
            <>
              {posts.map(post => (
                <Card
                  name={post.name}
                  key={post.id}
                  profileImage={post.profileImage}
                  imagePost={post.imagePost}
                  numberOfLikes={post.numberOfLikes}
                  description={post.description}
                  hours={post.hours}
                  verify={post.verify}
                />
              ))}
              {postHome.map((post) => (
                <Card
                  name={post.name || "perezelias_"}
                  key={post.imgProfile}
                  profileImage={post.imgProfile || "/Icons/Profile Image.jpg"}
                  imagePost={post.imagePost || "/Icons/Icon Loading.svg"}
                  description={post.description || "La nada absoluta mi rey"}
                  hours={"4"}
                  numberOfLikes={"0"}
                />
              ))}

              <Footer />
            </>
          }

        </main>
      }
      {/* Muestra la información de la tarjeta seleccionada */}
      {selectedCardInfo && (
        <article className={styles.history_container}>
          <div className={styles.history_container_div}><img src="/Icons/Instagram.svg" alt="Instagram" onClick={handleCardClickClose} />
          </div>
          <article className={styles.img_container_history} style={{ backgroundImage: `url(${selectedCardInfo.background})` }}>
            <header className={styles.header_history}>
              <div className={styles.header_line_time_1}></div>
              <div className={styles.header_line_time_2}></div>
            </header>
            <section className={styles.section_info_history}>
              <img className={styles.nav_info_history_img1} src={selectedCardInfo.img} alt="" />
              <span>{selectedCardInfo.title}&nbsp;<span style={{ opacity: 0.5 }}>•&nbsp;{selectedCardInfo.hours}&nbsp;h</span></span>
              <img className={styles.nav_info_history_img2} src="/Icons/Icon Three Points.svg" alt="" />
            </section>
            <footer className={styles.footer_container}>
              <div className={styles.input_footer_container}>
                <input className={styles.input_footer} type="text" placeholder="Respondele al vago" maxLength={30} />
              </div>
              <div className={styles.footer_icon_container}>
                <img src="/Icons/Icon Favourite.svg" alt="Fav" />
                <img src="/Icons/Icon Messanger.svg" alt="Msj" />
              </div>
            </footer>
          </article>
          <div className={styles.button_x}><button onClick={handleCardClickClose}><img className={styles.nav_out_img} src="/Icons/Icon X.svg" alt="Salir" /></button></div>
        </article>
      )}
      {EstadoModal ? <CreatePost postHome={postHome} setPost={setPost} onClick={handleClickCloseModal} closeModal={actualizarEstadoModal} /> : ""}

    </>
  );
}
{/* // 5- manejar bien el OnClick obvio en este componente ya que acá esta nuestra card*/ }

export function CardHistory({ image, title, onClick }: { image: string, title: string, onClick: any; }) {

  return (
    <>
      <article className={styles.containerCardHistory_article}>
        <section className={styles.containerCardHistory} onClick={onClick}>
          <img src={image} alt={title} />
        </section>
        <strong>{title}</strong>
      </article>
    </>
  )
}


const stories = [

  {
    id: '1',
    title: 'Capítulo 1',
    img: '/img/Logo Historia.png',
    background: "/img/cap0.png",
    hours: '1',
  },
  {
    id: '2',
    title: 'Capítulo 2',
    img: '/img/Logo Historia 2.png',
    background: "/img/cap0.png",
    hours: '2',
  },
  {
    id: '3',
    title: 'Capítulo 3',
    img: '/img/Logo Historia 3.png',
    background: "/img/cap0.png",
    hours: '3',
  },
  {
    id: '4',
    title: 'Capítulo 4',
    img: '/img/Logo Historia 4.png',
    background: "/img/cap0.png",
    hours: '4',
  },
  {
    id: '5',
    title: 'Capítulo 5',
    img: '/img/Logo Historia 5.png',
    background: "/img/cap0.png",
    hours: '5',
  },
  {
    id: '6',
    title: 'Capítulo 6',
    img: '/img/Logo Historia 6.png',
    background: "/img/cap0.png",
    hours: '6',
  },
  {
    id: '7',
    title: 'Capítulo 7',
    img: '/img/Logo Historia 7.png',
    background: "/img/cap0.png",
    hours: '7',
  },
  {
    id: '8',
    title: 'Capítulo 8',
    img: '/img/Logo Historia 8.png',
    background: "/img/cap0.png",
    hours: '8',
  },


];



const posts = [

  {
    id: '1',
    name: 'Oculto',
    profileImage: '/img/profileOgurazek.jpg',
    imagePost: "https://i.pinimg.com/originals/9e/f4/71/9ef47118655c14682cbc57aaf69f7702.jpg",
    numberOfLikes: "1.000.000",
    description: "No podes ver esto aún",
    hours: "0",
    verify: "",
  },
];





