import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import img1 from '../../assets/images/sri.jpg';
import img2 from '../../assets/images/sri1.jpg';
import img3 from '../../assets/images/sri2.jpeg';

const MyCarousel = () => {
  return (
    <Swiper
      style={{ margin: "5rem 2rem" }}
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
      spaceBetween={20}  // Space between slides
      slidesPerView={3}   // Show 3 slides at a time
      loop={true}         // Infinite scrolling
      grabCursor={true}   // Smooth scrolling experience
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto-scroll every 2s
    >
      <SwiperSlide>
        <img 
          src={img1} 
          style={{ height: "40vh", width: "100%", objectFit: "cover" }} 
          alt="Slide 1" 
        />
      </SwiperSlide>
      <SwiperSlide>
        <img 
          src={img2}
          style={{ height: "40vh", width: "100%", objectFit: "cover" }} 
          alt="Slide 2" 
        />
      </SwiperSlide>
      <SwiperSlide>
        <img 
          src={img3}
          style={{ height: "40vh", width: "100%", objectFit: "cover" }} 
          alt="Slide 3" 
        />
      </SwiperSlide>
      <SwiperSlide>
        <img 
          src={img2}
          style={{ height: "40vh", width: "100%", objectFit: "cover" }} 
          alt="Slide 2" 
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MyCarousel;
