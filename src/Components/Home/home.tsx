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
    title: 'UEFA',
    img: 'https://play-lh.googleusercontent.com/LqweR2ETw35XXsz0YJO8e1gYMozGL-JRqtT1l3ITLS1ncyrWjq9TJmJFP3NCYa5klw',
    background: "https://editorial.uefa.com/resources/0290-1bb9aa185b0a-1972bade03fd-1000/uefa_champions_league_2024_25_league_phase_draw_.jpeg",
    hours: '1',
  },
  {
    id: '2',
    title: 'Messi',
    img: 'https://www.lanacion.com.ar/resizer/v2/lionel-messi-marco-un-gol-en-su-primer-partido-3XGC2X5GTRFUVEOVXFYG5QW33M.jpeg?auth=87435fa6f9b1b5815206c195564768a4cdc2da225486174c2e75f3db217dcf5d&width=420&height=280&quality=70&smart=true',
    background: "https://media.elobservador.com.uy/p/2fafb1e2fb2a84b237c7c14bb8670220/adjuntos/362/imagenes/100/589/0100589431/1000x0/smart/la-reaccion-lionel-messi-los-hinchas-mexicanos.jfif",
    hours: '2',
  },
  {
    id: '3',
    title: 'Cars',
    img: 'https://www.lavoz.com.ar/resizer/v2/QR3HKB45EJHN5NCACG2G3PPI6Y.jpg?quality=75&smart=true&auth=2501a0cd05173db972566d1ce8c41def0e4bca7a40391710c1ca2957e3c4115f&width=980&height=640',
    background: "https://www.lavoz.com.ar/resizer/v2/QR3HKB45EJHN5NCACG2G3PPI6Y.jpg?quality=75&smart=true&auth=2501a0cd05173db972566d1ce8c41def0e4bca7a40391710c1ca2957e3c4115f&width=980&height=640",
    hours: '3',
  },
  {
    id: '4',
    title: 'Argentina',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKKRnYy2X3VMitHX4muPOkAZORbw6536jJ0A&s',
    background: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Argentina_topo_blank.jpg",
    hours: '4',
  },
  {
    id: '5',
    title: 'Programming',
    img: 'https://db0dce98.delivery.rocketcdn.me/es/files/2024/08/Programacion_Procedural_DataScientest.png',
    background: "https://db0dce98.delivery.rocketcdn.me/es/files/2024/08/Programacion_Procedural_DataScientest.png",
    hours: '5',
  },
  {
    id: '6',
    title: 'CR7',
    img: 'https://phantom-marca.unidadeditorial.es/f44f8eaebcbdef265bad672de04515c4/resize/828/f/jpg/assets/multimedia/imagenes/2022/07/30/16591778851898.jpg',
    background: "https://e00-xlk-ue-marca.uecdn.es/uploads/2024/10/11/17258762733519.jpeg",
    hours: '6',
  },
  {
    id: '7',
    title: 'Youtube',
    img: 'https://yt3.googleusercontent.com/8YREjMpJG4lXPc4oAIXZbSL6GniENWwAJIAGQ2yR3yphhJz_0XUoNoj6uMaWPevxVl721QKKnqM=s900-c-k-c0x00ffffff-no-rj',
    background: "https://www.pixelstalk.net/wp-content/uploads/image10/YouTube-Logo-wallpaper-with-clean-lines-and-a-simple-color-palette-for-a-modern-look.jpg",
    hours: '7',
  },
  {
    id: '8',
    title: 'Barcelona',
    img: 'https://imageio.forbes.com/specials-images/imageserve/658147e8df7921209a86740c/FC-Barcelona-could-sell-Vitor-Roque-/960x0.jpg?format=jpg&width=960',
    background: "https://imageio.forbes.com/specials-images/imageserve/658147e8df7921209a86740c/FC-Barcelona-could-sell-Vitor-Roque-/960x0.jpg?format=jpg&width=960",
    hours: '8',
  },


];



const posts = [

  {
    id: '9',
    name: 'Cars',
    profileImage: 'https://www.lavoz.com.ar/resizer/v2/QR3HKB45EJHN5NCACG2G3PPI6Y.jpg?quality=75&smart=true&auth=2501a0cd05173db972566d1ce8c41def0e4bca7a40391710c1ca2957e3c4115f&width=980&height=640',
    imagePost: "https://cdn.topgear.es/sites/navi.axelspringer.es/public/media/image/2017/09/chevrolet-camaro-zl1_2.jpg?tf=3840x",
    numberOfLikes: "1.000.000",
    description: ` 
    the best car in the world, chevrolet camaro zl1
    `,
    hours: "3",
    verify: "/Icons/Icon Verify.svg",
  },
  {
    id: '8',
    name: 'Lionel Messi',
    profileImage: 'https://www.lanacion.com.ar/resizer/v2/lionel-messi-marco-un-gol-en-su-primer-partido-3XGC2X5GTRFUVEOVXFYG5QW33M.jpeg?auth=87435fa6f9b1b5815206c195564768a4cdc2da225486174c2e75f3db217dcf5d&width=420&height=280&quality=70&smart=true',
    imagePost: "https://media.elobservador.com.uy/p/2fafb1e2fb2a84b237c7c14bb8670220/adjuntos/362/imagenes/100/589/0100589431/1000x0/smart/la-reaccion-lionel-messi-los-hinchas-mexicanos.jfif",
    numberOfLikes: "10",
    description: ` 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
    `,
    hours: "4",
    verify: "/Icons/Icon Verify.svg",
  },
];





