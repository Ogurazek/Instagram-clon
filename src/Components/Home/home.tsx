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
    title: 'Capítulo 1',
    img: '/img/Logo Historia.png',
    background: "/img/cap1.png",
    hours: '1',
  },
  {
    id: '2',
    title: 'Capítulo 2',
    img: '/img/Logo Historia 2.png',
    background: "/img/cap2.png",
    hours: '2',
  },
  {
    id: '3',
    title: 'Capítulo 3',
    img: '/img/Logo Historia 3.png',
    background: "/img/cap3.png",
    hours: '3',
  },
  {
    id: '4',
    title: 'Capítulo 4',
    img: '/img/Logo Historia 4.png',
    background: "/img/cap4.png",
    hours: '4',
  },
  {
    id: '5',
    title: 'Capítulo 5',
    img: '/img/Logo Historia 5.png',
    background: "/img/cap5.png",
    hours: '5',
  },
  {
    id: '6',
    title: 'Capítulo 6',
    img: '/img/Logo Historia 6.png',
    background: "/img/cap6.png",
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
    id: '7',
    name: 'Tiziana Monzón',
    profileImage: 'https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/420599396_1467172770526540_6401626036944713059_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHIAnbssqJ1YM57xw3PN-jU-JoY5IHVqrX4mhjkgdWqtbHlEN60BK2psZ94Z4A1YTPp8QPE0YR4-tbxoSN0rZYl&_nc_ohc=KKipdvrn0_oQ7kNvgESrStO&_nc_zt=23&_nc_ht=scontent.fcnq2-2.fna&_nc_gid=A0QF1dXuuthP3sz10rptF7U&oh=00_AYBymNVkFWrDoagVl4G8bWfjCmRKtZk0y4pXumW8KZXKsw&oe=67403C50',
    imagePost: "/img/Post7.jpg",
    numberOfLikes: "5.000.000",
    description: ` 
    Después de tantos días feos y tantos malos momentos, llegó el día de tu cumple y con nulas esperanzas de q algo pase, el milagro surgió y pudimos estar juntos para tu día tan especial y encima pasamos una noche re linda en family y con las personas que tanto querés. Espero pasar muchos cumpleaños y muchas fechas importantes mas juntitos, te amo un montón, felices 18 mi amor, sigamos construyendo nuestro futuro juntos y pasándola tan lindo como solo nosotros sabemos ❤️
    `,
    hours: "1",
    verify: "/Icons/Icon Verify.svg",
  },
  {
    id: '6',
    name: 'Perez Elías',
    profileImage: '/img/profileOgurazek.jpg',
    imagePost: "/img/Post6.jpg",
    numberOfLikes: "2.000",
    description: ` 
    La verdad el desayuno lo recordaba muchísimo más lindo jasjas, pero bueno. Fue algo muy especial y muy lindo de vivir.
    Las medialunas y el juguito estaban ricos. Es algo humilde, yo lo sé, pero fue bastante hermoso 🥺. También
    no quiero dejar de lado esa vez que prepare los sandwichitos y comimos en la plaza, tooppp desayunos de mi vida. Espero
    verdaderamente, que esas cositas no se acaban nunca ❤️
    `,
    hours: "10",
    verify: "",
  },
  {
    id: '5',
    name: 'Perez Elías',
    profileImage: '/img/profileOgurazek.jpg',
    imagePost: "/img/Post5.jpg",
    numberOfLikes: "250.000",
    description: ` 
    "Todo va a estar bien" Suena tan simple, pero a la vez, por lo menos para mi, tiene un signficado gigante. 
    Me trae un alivio, me devuelve el alma al cuerpo, hace que todos mis problemas por un momento desaparezcan y cuando vos
    lo decís, es lo único que me puede calmar en mis momentos más tensos. Verdaderamente, para mi, no es solo un estar bien
    es un sentimiento de seguridad, de tranquilidad y de mucho amor que me das. Y nadie nunca me hizo sentir así
    con una simple frase 🥺❤️
    `,
    hours: "13",
    verify: "",
  },
  {
    id: '4',
    name: 'Oriana Sabatini',
    profileImage: 'https://assets.dev-filo.dift.io/img/2018/01/14/oriana_sq.jpg',
    imagePost: "/Icons/Profile Image.jpg",
    numberOfLikes: "250.000",
    description: ` 
    Con Paulo le mandamos muchísimos besos ya que nos enteramos de que ya falta muy poco para su aniversario ❤️
    Espero que tengan una linda relación, y sepan cuidarse y amarse tanto como nosotros 😊 (Mensaje para Tizi ---> No te peles las cejas
    como yo, te vas a arrepentir)
    `,
    hours: "13",
    verify: "/Icons/Icon Verify.svg",
  },
  {
    id: '3',
    name: 'Perez Elías',
    profileImage: '/img/profileOgurazek.jpg',
    imagePost: "/img/Post3.jpg",
    numberOfLikes: "2.000.000",
    description: `La belleza que tenías ese día era inexplicable. Hasta me quedaba sin palabras cuando te vía.
    estaba super nervioso, mi corazón latía a mil. Estabas vos ahí, con esa carita, con esos ojitos, con ese vestido
    que tan hermoso te quedaba, con esos zapatos, con esas uñas y mil adjetivos más que te podría decir
    . Eras, y sos la chica más hermosa, resaltabas tanto que tenía tanto miedo de que otro hombre te mirará. 
    Vamos a la foto, era una foto que no recordaba que tenía, pero sin duda es una de mis fotos favoritas... Me trae muchos
    sentimientos, y me trae a ese momento exacto, donde ibamos a pasar, y sin duda, como lo dije, y lo vuelvo a recalcar, ese momento
     no se menciona mucho, pero esta en mi mente todos los días. 

    `,
    hours: "24",
    verify: "",
  },
  {
    id: '2',
    name: 'Robert Pattinson',
    profileImage: 'https://media.gq.com.mx/photos/61eae22d5def32c5619cf082/3:2/w_3000,h_2000,c_limit/GettyImages-1183868862.jpg',
    imagePost: "/img/Post2.jpg",
    numberOfLikes: "1.000.000",
    description: `Le mando un muy feliz cumple a mi seguidora número 1. 
    Me entere que ayer era el cumpleaños, y le quería felicitar y también por supuesto
    a su novio, porque gracias a él me entere. 
    Espero que la hayan pasado super, y que viva su amor por siempre ❤️. Voy a dejar una frase mía:

    El amor es irracional, cuanto más quieres a alguien, menos lógica tiene todo. 
    `,
    hours: "1",
    verify: "/Icons/Icon Verify.svg ",
  },
  {
    id: '1',
    name: 'Perez Elías',
    profileImage: '/img/profileOgurazek.jpg',
    imagePost: "/img/Post1.jpg",
    numberOfLikes: "1.111.024",
    description: `Feliz, feliz en tu día, mi Noviecita que dios te bendiga, que reine la paz en tus días y que vivas muchos más!! ❤️
    Feliz cumpleaños a la persona que hace que cada día sea especial para mí, a quien logra sacar mi mejor versión y me hace el más feliz. 
    No tengo suficientes palabras para agradecerte por permitirme estar a tu lado en un día tan especial. 
    No sabes lo afortunado que me siento de estar con vos y cuánto valoro cada momento, cada sonrisa y cada muestra
    de cariño.
    Gracias por tu paciencia, por entenderme, por estar a mi lado aun en mis días difíciles y por darme tanto. Un millón de gracias a vos, Mi 
    Tiziana Yazmín Monzón.
    Te amo con todo mi corazón, y prometo cuidarte y estar siempre a tu lado. Vamos por muchos años más juntos, mi Princesa 👑😙
    `,
    hours: "5",
    verify: "",
  },
];





