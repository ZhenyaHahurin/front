import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import InputMask from 'react-input-mask';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';
import Carousel from 'better-react-carousel'





function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [showOrderForm, setShowOrderForm] = useState(false);


  const image1Url = `${process.env.PUBLIC_URL}/photos/photo1.jpg`;
  const image6Url = `${process.env.PUBLIC_URL}/photos/photo3.jpg`;
  const image9Url = `${process.env.PUBLIC_URL}/photos/photo6.jpg`;
  const image11Url = `${process.env.PUBLIC_URL}/photos/photo8.jpg`;
  const image19Url = `${process.env.PUBLIC_URL}/photos/photo16.jpg`;
  

  const image2Url = `${process.env.PUBLIC_URL}/photos/toolbar1.jpg`;
  const image3Url = `${process.env.PUBLIC_URL}/photos/toolbar1.jpg`;
  const image4Url = `${process.env.PUBLIC_URL}/photos/toolbar1.jpg`;
  const image5Url = `${process.env.PUBLIC_URL}/photos/toolbar1.jpg`;

  


 
  

  const openOrderForm = () => {
    setShowOrderForm(true);
  };

  const closeOrderForm = () => {
    setShowOrderForm(false);
  };
  
  function scrollToAdvantages(e) {
    e.preventDefault(); // Забороняємо перехід за посиланням
    
    const advantagesSection = document.getElementById("advantages"); // Отримуємо блок "Наші переваги"
    
    if (advantagesSection) {
      advantagesSection.scrollIntoView({ behavior: "smooth" }); // Прокручуємо до блоку "Наші переваги" плавно
    }
  }

  const scrollToGallery = (e) => {
    e.preventDefault();
    const gallerySection = document.getElementById("gallery-overlay");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSpecialization = (e) => {
    e.preventDefault();
    const specializationSection = document.getElementById("specialization");
    if (specializationSection) {
      specializationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContacts = (e) => {
    e.preventDefault();
    const contactsSection = document.getElementById("contacts");
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch(process.env.REACT_APP_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            productQuantity,
          }),
        });
  
        if (response.status === 201) {
          alert('Замовлення успішно відправлено!');
          setName('');
          setEmail('');
          setPhone('');
          setAddress('');
          setProductQuantity('');
          setShowOrderForm(false);
        } else {
          alert('Помилка при відправленні замовлення.');
        }
      } catch (error) {
        console.error('Помилка при відправленні замовлення:', error);
        alert('Помилка сервера.');
      }
    };

  return (
    <Router>
      <>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/order" onClick={openOrderForm}>Зробити замовлення</Link></li>
            <li><Link to="/advantages" onClick={scrollToAdvantages}>Наші переваги</Link></li>
            <li><Link to="/gallery" onClick={scrollToGallery}>Фотогалерея</Link></li>
            <li><Link to="/specialization" onClick={scrollToSpecialization}>Наша спеціалізація</Link></li>
            <li><Link to="/contacts" onClick={scrollToContacts}>Контакти</Link></li>
          </ul>
        </nav>

      
       
           <div className="photo-container">
            <img src={image1Url} alt="Фото 1" />
            <div className="text-container">
              <div className="text-line">Перша в світі</div>
              <div className="text-line">технологія з видалення</div>
              <div className="text-line">залишків тканини</div>
            </div>
            <button className="order-button" onClick={openOrderForm}>Зробити замовлення</button>
           </div>

           <div className="video-container">
           <h2>Використання пристрою</h2>
           <video controls>
           <source src={`${process.env.PUBLIC_URL}/videos/video.mp4`} type="video/mp4" />
           </video>
           </div>
        
           <div id="advantages" className="advantages">
  <div className="advantage">
  <h3>Ефективність</h3>
    <div className="orange-frame">
      <img src={image2Url} alt="Зображення 1" />
    </div>
    <p>Енергоефективність на вищому рівня: Air tube tex пожирає лише 36w! У порівнянні зі стандартним компресором, який потребує від 1000w, наша новинка дозволяє заощадити на рахунках за електроенергію та захистити довкілля.</p>
  </div>
  <div className="advantage">
  <h3>Надійність</h3>
    <div className="orange-frame">
      <img src={image3Url} alt="Зображення 2" />
    </div>
    <p>Мінімальність і надійність: Завдяки унікальним тестам ми зменшили кількість деталей, схильних до поломки. Air tube tex стоїть на передовій технології завдяки своїм ключовим елементам: нагнітачу повітря та блоку живлення.</p>
  </div>
  <div className="advantage">
  <h3>Комфорт</h3>
    <div className="orange-frame">
      <img src={image4Url} alt="Зображення 3" />
    </div>
    <p>Тиша та спокій: Нехай ваш спокій не порушується! Air tube tex працює настільки тихо, що його робота нагадує ледь чутний шум комп'ютерного кулера.</p>
  </div>
  <div className="advantage">
  <h3>Зручність</h3>
    <div className="orange-frame">
      <img src={image5Url} alt="Зображення 4" />
    </div>
    <p>Швидка установка без клопоту: Встановлюєте за 5 хвилин, і все готово! Air tube tex значно дешевше у сервісі, що робить його ідеальним вибором для розумних споживачів.</p>
  </div>
           </div>

           <div id="gallery-overlay" className="gallery-overlay">
            <div className="gallery-container">
              <h2>Фотогалерея</h2>
              <div className="gallery">
              <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src={image6Url} alt="Фото 6" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={image9Url} alt="Фото 9" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={image11Url} alt="Фото 11" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={image19Url} alt="Фото 19" />
      </Carousel.Item>
    </Carousel>
              </div>
            </div>
           </div>

           <div id="specialization" className="specialization">
           <div className="specialization-content">
            <h2>Ми спеціалізуємось</h2>
            <p></p>
            <div className="guarantee">
            <h3>Гарантуємо!</h3>
            </div>

           </div>
           <div className="specialization-images">
           <div className="specialization-image">
           <h4>Інноваційність</h4>
           <img src={image21Url} alt="Зображення 1" />
           </div>
           <div className="specialization-image">
           <h4>Якість</h4>
           <img src={image22Url} alt="Зображення 2" />
           </div>
           <div className="specialization-image">
           <h4>Швидкість</h4>
           <img src={image23Url} alt="Зображення 3" />
           </div>
           </div>
           </div>

           <div id="contacts" className="contacts">
           <h2>Контакти</h2>
           <div className="contact-info">
           <div className="contact-item">
           <p>Telegram, Viber:</p>
           <span>+380 96 193 48 81</span>
           </div>
           </div>
           </div>


           {showOrderForm && (
           <div className="modal">
                <div className="order-form-container">
                  <button className="close-button" onClick={closeOrderForm}>Закрити</button>
                  <h2>Зробити замовлення</h2>
                  <form onSubmit={handleFormSubmit}>
                  <input type="text" placeholder="Ім'я" value={name} onChange={(e) => setName(e.target.value)} />
                  <input type="email" placeholder="Електронна пошта" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <InputMask mask="+380 99 999 99 99" placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  <input type="text" placeholder="Адреса" value={address} onChange={(e) => setAddress(e.target.value)} />
                  <input type="number" placeholder="Кількість одиниць продукції" value={productQuantity} onChange={(e) => setProductQuantity(Math.max(1, parseInt(e.target.value, 10)))} min="1" />
                  <button type="submit">Відправити замовлення</button>
                  </form>
                </div>
          </div>
           )}



      </div>
      </>
    </Router>
  );
}

export default App;
