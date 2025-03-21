import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import img1 from '../../assets/Slide/part1.jpg';
import img2 from '../../assets/Slide/part2.png';
import img3 from '../../assets/Slide/part3.png';

const MyCarousel1 = () => {
  return (
    <Swiper
      style={{ width: "100%", margin: "2rem 0" }} // Full width of the container
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
      spaceBetween={0}   // Remove gap between slides
      slidesPerView={1}   // Show one slide at a time
      loop={true}        // Infinite scrolling
      grabCursor={true}  // Smooth scrolling experience
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll every 3s
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {[img1, img2, img3, img2].map((img, index) => (
        <SwiperSlide key={index}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "70vh", // Adjust height as needed
            backgroundColor: "#222", // Background color for contrast
            borderRadius: "15px", // Rounded corners
            overflow: "hidden",
          }}>
            <img 
              src={img} 
              alt={`Slide ${index + 1}`} 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover" 
              }} 
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MyCarousel1;
