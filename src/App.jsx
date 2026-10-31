import React from 'react'
import { useEffect } from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/NavBar'
import Project from './components/projects/Project'
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/PopUp';


const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    AOS.init(
      {
        duration: 800,
        offset: 100,
        easing: "ease-in-sine",
        delay: 100
      }
    );
    AOS.refresh();
  }, [])
  return (
//  

    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Project />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Project />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup}
        setOrderPopup={setOrderPopup} />
    </div>


  )
}

export default App
