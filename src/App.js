import './App.css';
import Navbar from "./Components/Navbar";
import Cards from './Components/Cards';

function App() {
  return (
    <div className="main_body">
      <Navbar />
      <h1 className="text-center">List</h1>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* <Cards content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nulla id iure? Laboriosam soluta sapiente aliquam impedit consectetur aspernatur nostrum laborum saepe culpa vero omnis ea corrupti, velit repudiandae doloribus? Enim, alias fuga ullam id perspiciatis culpa repellat ab odio nam velit suscipit maxime et fugiat obcaecati? Sint beatae dolor reprehenderit? Suscipit esse vel magni eum fugiat odio blanditiis omnis, sit nam reiciendis dignissimos veniam tempora sint quod fugit non, pariatur laborum aspernatur asperiores repellat excepturi nobis. Veritatis, fugit quidem dolore qui saepe obcaecati, perferendis, aspernatur voluptas inventore temporibus quibusdam in fugiat similique alias! Eum et quas dolore illo vero est cum. Ullam vitae nostrum tempore facere cupiditate aspernatur. Optio error repellat facere commodi, rem dolorem porro magnam, accusantium, aliquam veniam assumenda! Fugit, tempore, illo earum enim expedita minima similique ab voluptas officiis facere ipsam cumque quae rem, laborum mollitia sit ipsum quis incidunt porro est amet! Dolorum explicabo voluptas ea molestias, voluptatum blanditiis quis, incidunt fugit fuga aperiam fugiat dignissimos quas dolores, sit numquam. Voluptate ullam iste quam, aperiam quae nisi quos vel qui voluptatem iusto deserunt labore voluptas praesentium quas quia sapiente. Modi voluptate sapiente eum eligendi doloribus consectetur officia facilis! Quis expedita eius officiis id laboriosam, eaque tempora et illum dolorum, dolore nesciunt fuga facilis vitae, rem laudantium corporis ducimus error unde labore. Nostrum nihil laborum est quas aut ex nobis quod consequuntur repellat. In dignissimos est fuga architecto recusandae sunt praesentium, enim nisi dolorum minus iusto eius modi reiciendis deleniti laudantium aliquid fugiat quaerat nostrum impedit repudiandae amet. Molestias neque mollitia dolore beatae culpa asperiores excepturi quis eaque doloremque inventore? Nostrum vel at atque reprehenderit totam. Doloremque, voluptatum iste deserunt dolorum nam, ut praesentium consectetur sed alias ullam vero eos illum, amet repellat et! Dolores eum laborum modi alias amet exercitationem, quae repellendus rem at praesentium laboriosam eos labore inventore accusantium quo quidem hic dolorem! Illum aut quaerat, totam nulla omnis deleniti hic dicta deserunt cumque? Sit nesciunt enim adipisci, quae hic reprehenderit? Similique vero voluptate delectus accusantium perferendis, corporis aut ducimus autem est eaque excepturi labore aliquam quia!" /> */}
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
