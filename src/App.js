import React, { useState } from 'react';
import './App.css'; 
import CartModal from "./components/CartModal";
import Header from "./components/Header";
import Cart from "./components/Cart"; 
import GameList from "./components/GameList";



function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [isCartOpen, setIsCartOpen] = useState(false); 

  const gamesData = [
    { id: 1, name: 'Teraia', description: 'Копайте, сражайтесь, исследуйте, стройте! Нет ничего невозможного в этой насыщенной событиями приключенческой игре. Также доступен комплект для четверых!', price: 7, image: '/images/teraria.jpg' },
    { id: 2, name: 'Factorio', description: 'Factorio - это игра о создании автоматизированных фабрик по производству вещей все более возрастающей сложности, в пределах бесконечного 2D мира. Используйте свое воображение для проектирования фабрик, комбинируйте простые элементы в комплексные.', price: 20, image: '/images/factorio.jpg' },
    { id: 3, name: 'Black Myth: Wukong', description: 'Black Myth: Wukong — ролевой боевик по мотивам китайской мифологии. Став Избранным, вы отправитесь в приключение, полное испытаний и чудес, в котором вам предстоит приподнять завесу тайны над великой легендой.', price: 60, image: '/images/wucong.jpg' },
    { id: 4, name: 'Euro Truck Simulator 2', description: 'Станьте королем европейских дорог — водителем грузовика, который доставляет важные грузы на немалые расстояния! Вас ждут десятки городов Великобритании, Бельгии, Германии, Италии, Нидерландов, Польши и не только. Испытайте свои умения, выносливость и скорость.', price: 11, image:'/images/evrotrack.jpg' },
    { id: 5, name:'S.T.A.L.K.E.R. 2: Heart of Chornobyl', description:'Исследуйте Чернобыльскую Зону Отчуждения полную опасных врагов, смертельных аномалий и мощных артефактов. Напишите собственную эпическую историю, прокладывая тропы к Сердцу Чернобыля. Выбирайте свой путь обдуманно, ведь он определит вашу судьбу в конце.', price: 46, image:'/images/stalker2.jpg'},
    { id: 6, name:'EA SPORTS FC™ 25', description:'EA SPORTS FC™ 25 открывает больше возможностей побеждать за клуб. Играйте с друзьями в ваших любимых режимах в новом Rush 5 на 5. Ведите клуб к победе с FC IQ, предоставляющим больше тактического контроля.', price: 60, image:'/images/fifa.jpg'},
    { id: 7, name:'F1® 24', description:'Выезжайте на старт и попадите в 20-ку. Станьте величайшим пилотом в EA SPORTS™ F1® 24, официальной видеоигре чемпионата мира FIA Formula One World Championship™ 2024.', price: 70, image:'/images/f1.jpg'},
    { id: 8, name:'DOOM Eternal', description:'Армии ада вторглись на Землю. Станьте Палачом Рока и убейте демонов во всех измерениях, чтобы спасти человечество. Они боятся только… тебя.', price: 24, image:'/images/Doom.jpg'},
    { id: 9, name:'Red Dead Redemption 2', description:'Игра RDR2, получившая более 175 наград и 250 высших оценок от игровых изданий, – это грандиозная история о судьбе бандита Артура Моргана и банды Ван дер Линде, бегущих от закона через всю Америку на заре современной эпохи.', price:19 , image:'/images/reddead.jpg'},
    { id: 10, name:'Dead Space', description:'Классический научно-популярный хоррор с элементами выживания возвращается: игра была воссоздана с нуля и предлагает ещё глубже погрузиться в обволакивающую атмосферу мёртвого космоса.', price: 15, image:'/images/deadspase.jpg'},
  ];

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

 
  const addToCart = (game) => {
    setCart([...cart, game]);
  };

  const removeFromCart = (gameId) => {
    setCart(cart.filter(game => game.id !== gameId));
  };

  const filteredGames = gamesData.filter(game => 
    game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.description.toLowerCase().includes(searchTerm.toLowerCase())
  );


  

  return (
    <div className="App">
      <header>
        <div className="App">
          {}
          <Header onOpenCart={openCart} cartLength={cart.length} />
          
          {}
          {isCartOpen && (
            <Cart
              items={cart}
              onClose={closeCart}
              removeFromCart={removeFromCart}
            />
          )}
        </div>

        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </header>

      <div className="game-list">
        {filteredGames.length > 0 ? (
          filteredGames.map(game => (
            <div key={game.id} className="game-card">
              <img src={game.image} alt={game.name} className="game-image" />
              <h2>{game.name}</h2>
              <p>{game.description}</p>
              <p>Price: ${game.price}</p>
              <button onClick={() => addToCart(game)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No games found</p>
        )}




        
      </div>
    </div>
  );
}

export default App;
