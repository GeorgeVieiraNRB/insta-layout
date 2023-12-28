import Postagem from "./Postagem";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-0 m-0">
      <Postagem
        postUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6w5X9n8bfGBVPKZUvA27Eukf6zo5xJiMSfdk2EPdsw&s"
        userUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/S%C3%A9rgio_Sacani_na_Campus_Party_Brasil_2015_%28cropped%29.jpg/640px-S%C3%A9rgio_Sacani_na_Campus_Party_Brasil_2015_%28cropped%29.jpg"
        userLocation="CT da Max Titanium"
        userName="Sérgio Sacani"
        content="Os verdadeiros foguetes são os pesos que levantamos no caminho"
        hashtags="#foguetenaodare"
        like={true}
      ></Postagem>
      <Postagem
        postUrl="https://i0.wp.com/www.wikimetal.com.br/wp-content/uploads/2020/12/Angra.png?resize=1170%2C658&ssl=1"
        userUrl="https://whiplash.net/imagens_promo_22/angra_rafael_bittencourt_vocal_por_gustavo_maiato.jpg?nocache"
        userLocation="Curitiba"
        userName="Rafael Bittencourt"
        content="Lançamento do album 'Circles of Pain'"
        like={false}
        hashtags="#ANGRA"
      ></Postagem>
      <Postagem
        postUrl="https://i.pinimg.com/originals/74/4b/46/744b46fd75a94a7633abf127a93ce945.jpg"
        userUrl="https://i.redd.it/okqs6p8kabl61.jpg"
        userLocation="Shibuya"
        userName="Aoi Todo"
        content="My Besto Friendo"
        like={true}
      ></Postagem>
    </main>
  );
}
