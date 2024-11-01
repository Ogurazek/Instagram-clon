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
interface HomeProps {
  actualizarEstado: (NewState: boolean) => void; 
  actualizarEstadoModal: (NewState: boolean) => void; 
  EstadoModal: boolean; 

}
export function Home({ actualizarEstado, EstadoModal, actualizarEstadoModal }: HomeProps) {
  // 1 - Estado para guardar la información de la tarjeta seleccionada
  const [selectedCardInfo, setSelectedCardInfo] = useState<CardInfo | null>(null);

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
            <Footer/>
        </>
        }

        </main>
          }
        {/* Muestra la información de la tarjeta seleccionada */}
        {selectedCardInfo && (
          <article className={styles.history_container}>
            <div className={styles.history_container_div}><img src="/Icons/Instagram.svg" alt="Instagram" onClick={handleCardClickClose}/>
            </div>
            <article className={styles.img_container_history} style={{  backgroundImage: `url(${selectedCardInfo.background})`}}>
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
                <input className={styles.input_footer} type="text" placeholder="Respondele al vago" maxLength={30}/>
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
          {EstadoModal ? <CreatePost onClick={handleClickCloseModal}/> : ""}
          
    </>
  );
}
{/* // 5- manejar bien el OnClick obvio en este componente ya que acá esta nuestra card*/}

export function CardHistory({ image, title, onClick }: {image:string, title:string, onClick:any;}) {

    return(
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

    { id: '1',
      title: 'Capítulo 1',
      img: '/img/Logo Historia.png',
      background: "/img/cap1.png",
      hours: '3',
     },
    { id: '2',
      title: 'Capítulo 1',
      img: '/img/Logo Historia 2.png',
      background: "https://media.tenor.com/2l4-h42qnmcAAAAj/toothless-dancing-toothless.gif",
      hours: '3',
     },
    { id: '3',
      title: 'Capítulo 1',
      img: '/img/Logo Historia 3.png',
      background: "https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/417121172_2533256406875649_4157780593792047600_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEQUwCHNGP20cH9ov5RypC2jjN1FqiNz9eOM3UWqI3P19fWI5o8_q2eQJzUb1rHS0E5eEoYSBmonowUT7K7vpFm&_nc_ohc=dTBi2MBpCbkQ7kNvgFivENF&_nc_zt=23&_nc_ht=scontent.fcnq2-1.fna&_nc_gid=A_VbF7a5vs-Vsa1Oao8qh_x&oh=00_AYAizRhcpQrikLMDjr5U4b24BGYpuY1F4Tlm5jFJQMWF6A&oe=67223A43",
      hours: '3',
     },
    { id: '4',
      title: 'Capítulo 1',
      img: '/img/Logo Historia 4.png',
      background: "https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/417121172_2533256406875649_4157780593792047600_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEQUwCHNGP20cH9ov5RypC2jjN1FqiNz9eOM3UWqI3P19fWI5o8_q2eQJzUb1rHS0E5eEoYSBmonowUT7K7vpFm&_nc_ohc=dTBi2MBpCbkQ7kNvgFivENF&_nc_zt=23&_nc_ht=scontent.fcnq2-1.fna&_nc_gid=A_VbF7a5vs-Vsa1Oao8qh_x&oh=00_AYAizRhcpQrikLMDjr5U4b24BGYpuY1F4Tlm5jFJQMWF6A&oe=67223A43",
      hours: '3',
     },
    { id: '5',
      title: 'Capítulo 1',
      img: '/img/Logo Historia 5.png',
      background: "https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/417121172_2533256406875649_4157780593792047600_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEQUwCHNGP20cH9ov5RypC2jjN1FqiNz9eOM3UWqI3P19fWI5o8_q2eQJzUb1rHS0E5eEoYSBmonowUT7K7vpFm&_nc_ohc=dTBi2MBpCbkQ7kNvgFivENF&_nc_zt=23&_nc_ht=scontent.fcnq2-1.fna&_nc_gid=A_VbF7a5vs-Vsa1Oao8qh_x&oh=00_AYAizRhcpQrikLMDjr5U4b24BGYpuY1F4Tlm5jFJQMWF6A&oe=67223A43",
      hours: '3',
     },
    { id: '6',
      title: 'Capítulo 1',
      img: '/img/Logo Historia 6.png',
      background: "https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/417121172_2533256406875649_4157780593792047600_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEQUwCHNGP20cH9ov5RypC2jjN1FqiNz9eOM3UWqI3P19fWI5o8_q2eQJzUb1rHS0E5eEoYSBmonowUT7K7vpFm&_nc_ohc=dTBi2MBpCbkQ7kNvgFivENF&_nc_zt=23&_nc_ht=scontent.fcnq2-1.fna&_nc_gid=A_VbF7a5vs-Vsa1Oao8qh_x&oh=00_AYAizRhcpQrikLMDjr5U4b24BGYpuY1F4Tlm5jFJQMWF6A&oe=67223A43",
      hours: '3',
     },
    { id: '7',
      title: 'Capítulo 1',
      img: '/img/Logo Historia 7.png',
      background: "https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/417121172_2533256406875649_4157780593792047600_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEQUwCHNGP20cH9ov5RypC2jjN1FqiNz9eOM3UWqI3P19fWI5o8_q2eQJzUb1rHS0E5eEoYSBmonowUT7K7vpFm&_nc_ohc=dTBi2MBpCbkQ7kNvgFivENF&_nc_zt=23&_nc_ht=scontent.fcnq2-1.fna&_nc_gid=A_VbF7a5vs-Vsa1Oao8qh_x&oh=00_AYAizRhcpQrikLMDjr5U4b24BGYpuY1F4Tlm5jFJQMWF6A&oe=67223A43",
      hours: '3',
     },
    { id: '8',
      title: 'Capítulo 1',
      img: '/img/Logo Historia 8.png',
      background: "https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/417121172_2533256406875649_4157780593792047600_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEQUwCHNGP20cH9ov5RypC2jjN1FqiNz9eOM3UWqI3P19fWI5o8_q2eQJzUb1rHS0E5eEoYSBmonowUT7K7vpFm&_nc_ohc=dTBi2MBpCbkQ7kNvgFivENF&_nc_zt=23&_nc_ht=scontent.fcnq2-1.fna&_nc_gid=A_VbF7a5vs-Vsa1Oao8qh_x&oh=00_AYAizRhcpQrikLMDjr5U4b24BGYpuY1F4Tlm5jFJQMWF6A&oe=67223A43",
      hours: '3',
     },
   
   
  ];



  const posts = [

    {   
      id: '1', 
        name: 'Perez Elías', 
        profileImage: 'https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/319706151_3198051160453508_7252669332661865411_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFGcwFEX9bSTjnIMUmESLvZSem7barRGrhJ6bttqtEauJspGLuKE3RmZ_U3GX9cEpe6Vw0hLTbtY3-egW4d8MxR&_nc_ohc=8sv38S8dsdsQ7kNvgHCwioM&_nc_zt=23&_nc_ht=scontent.fcnq2-1.fna&_nc_gid=APcQsxXBii2EH6U1_45awd2&oh=00_AYAGWbctMwQEY1axOEPlCBGDDWSLOT21uOjffxL9H_KTCg&oe=672585B7',
        imagePost: "https://i.pinimg.com/originals/9e/f4/71/9ef47118655c14682cbc57aaf69f7702.jpg", 
        numberOfLikes: "200",
        description: "El día más lendo del mundo ❤️",
        hours: 5,
        verify: "",
     },
    
  ];





