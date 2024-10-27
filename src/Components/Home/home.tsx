import styles from "./homeStyles.module.css";
import Card from "../Card/card";
import { useState } from "react";

interface CardInfo {
  title: string;
}
interface HomeProps {
  actualizarEstado: (NewState: boolean) => void; 

}
export function Home({ actualizarEstado }: HomeProps) {
  // Estado para guardar la información de la tarjeta seleccionada
  const [selectedCardInfo, setSelectedCardInfo] = useState<{ title: string; } | null>(null);

  // Función para guardar la información en el estado
  const handleCardClick = (info: CardInfo) => {
    setSelectedCardInfo(info);
    actualizarEstado(true); // Muestra la información de la tarjeta
  };

  return (
    <>
        
      <main className={styles.containerHome}>
        <header className={styles.home_header}>
          {/* Muestra las tarjetas solo si no hay tarjeta seleccionada */}
          {!selectedCardInfo && stories.map(story => (
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
        <Card
              name="Perez Elías 😎"
              profileImage="/Icons/Profile Image.jpg"
              imagePost="/Icons/Profile Image.jpg"
              numberOfLikes="200"
              description="Estoy buscando un nuevo laburo, ayuda..."
              hours="4"
            />
        <Card
              name="Perez Elías 😎"
              profileImage="/Icons/Profile Image.jpg"
              imagePost="/Icons/Profile Image.jpg"
              numberOfLikes="200"
              description="Estoy buscando un nuevo laburo, ayuda..."
              hours="4"
            />
        </>
        }

        {/* Muestra la información de la tarjeta seleccionada */}
        {selectedCardInfo && (
          <div className="card-info">
            <h2>{selectedCardInfo.title}</h2>
            <button onClick={() => {
              setSelectedCardInfo(null); // Resetea la tarjeta seleccionada
              actualizarEstado(false); // Oculta la información de la tarjeta
            }}>Ir para atrás</button>
          </div>
        )}
      </main>

    </>
  );
}
{/* // 5- manejar bien el OnClick obvio en este componente ya que acá esta nuestra card*/}

export function CardHistory({ image, title, onClick}: {image:string, title:string, onClick:any;}) {

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
    { id: '1', title: 'Capítulo 1', img: 'https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/420599396_1467172770526540_6401626036944713059_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHIAnbssqJ1YM57xw3PN-jU-JoY5IHVqrX4mhjkgdWqtbHlEN60BK2psZ94Z4A1YTPp8QPE0YR4-tbxoSN0rZYl&_nc_ohc=vLIeSFCK7PAQ7kNvgGYPzf5&_nc_zt=23&_nc_ht=scontent.fcnq2-2.fna&_nc_gid=AmUZOC_zTGfLm9wt_Ipl71l&oh=00_AYDnadecJE9Y2IeF9eDcXX6tVzbXn1iF3oDhQhNyduWxoA&oe=67222210' },
    { id: '2', title: 'Capítulo 2', img: 'https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/417121172_2533256406875649_4157780593792047600_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEQUwCHNGP20cH9ov5RypC2jjN1FqiNz9eOM3UWqI3P19fWI5o8_q2eQJzUb1rHS0E5eEoYSBmonowUT7K7vpFm&_nc_ohc=dTBi2MBpCbkQ7kNvgFivENF&_nc_zt=23&_nc_ht=scontent.fcnq2-1.fna&_nc_gid=A_VbF7a5vs-Vsa1Oao8qh_x&oh=00_AYAizRhcpQrikLMDjr5U4b24BGYpuY1F4Tlm5jFJQMWF6A&oe=67223A43' },
    { id: '3', title: 'Capítulo 3', img: 'https://scontent.fcnq2-2.fna.fbcdn.net/v/t1.6435-1/192205156_2798269083765053_4598134956862868850_n.jpg?stp=dst-jpg_s160x160&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFxIBWWQKArHPMIvqyiMNHpRi7MPXnqxYhGLsw9eerFiFjq2n9QvnnJz2l6NIyJ0Q20KhOOBp99Hfl8CN362wei&_nc_ohc=ki5MezggLCEQ7kNvgGL4F1_&_nc_zt=24&_nc_ht=scontent.fcnq2-2.fna&_nc_gid=A10msNr37PrO0zMZXoe2n-d&oh=00_AYABZybuSWvkklF71pHTD9ExEyix3RV3qp7rAc98_-udjg&oe=6743E4E8' },
    { id: '4', title: 'Capítulo 4', img: 'https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/356423082_2405961629605128_3084650492854574627_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEUeQ1AUX0OclC9ZiDmiHqls94D309mW6Kz3gPfT2Zbopxzqq1o-lhDNuTSsKstAgDTvhABXTwOb3hd2zwIj2Kj&_nc_ohc=_eaYPgxHylYQ7kNvgGfn9Zm&_nc_zt=23&_nc_ht=scontent.fcnq2-1.fna&_nc_gid=Avz6kuTuZXFviUUT1ghRelE&oh=00_AYB-1XB1YfK1Eb6MvrzbRgpKabz3zNRQYIeYPS6NGGOxsA&oe=67221FD0' },
    { id: '5', title: 'Capítulo 5', img: 'https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/345428313_3328259987438951_424209047685001347_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGmCd1fTswUbUKpBuvvENTIxHtt-VkFgKbEe235WQWApixhWv8_py5ZFwZDrxAJmn97sjBtt15Pij-DdzQI5hrr&_nc_ohc=Cf_iOSvzj5IQ7kNvgF2pl6a&_nc_zt=23&_nc_ht=scontent.fcnq2-2.fna&_nc_gid=AwNuZ7RyIcNKPKe60PNpxrp&oh=00_AYALoFU4ZMtJuJ5HbP5MaSX8GEGf6WTFetoIav7JUcclKg&oe=672230F7' },
    { id: '6', title: 'Capítulo 6', img: 'https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/319706151_3198051160453508_7252669332661865411_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFGcwFEX9bSTjnIMUmESLvZSem7barRGrhJ6bttqtEauJspGLuKE3RmZ_U3GX9cEpe6Vw0hLTbtY3-egW4d8MxR&_nc_ohc=GXWehVIw0gwQ7kNvgFbjZhY&_nc_zt=23&_nc_ht=scontent.fcnq2-1.fna&_nc_gid=ABYfJl4G7ea3N90rElZR-kj&oh=00_AYCReP6hjQ71O7zw6JWvLhlGrb585kMR7V6ruuYM0kP3Jw&oe=672239F7' },
    { id: '7', title: 'Capítulo 7', img: 'https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/294121654_3078996719025620_2742283005822333452_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH9iQgLkzewjvI8q5D8jLwEccINjWeWxKpxwg2NZ5bEqkdSiaJEtZvuJqIRsZfY8975fbU8vePbirEZV1v9wytl&_nc_ohc=55soGGcfLeIQ7kNvgHYs53u&_nc_zt=23&_nc_ht=scontent.fcnq2-1.fna&_nc_gid=AHhre-7PPmz4-gG1iIubhoC&oh=00_AYBLoRPipo_EtqBtNS338vZnrZFp1JecB3uZqZ4nTDrrpg&oe=67222DB1' },
    { id: '8', title: 'Capítulo 8', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGv0ZIrLidHrXmxdSY38qwW3_FyQZhJo-sFQ&s' },
  ];




