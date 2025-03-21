import { useNavigate } from "react-router-dom";
import Card from "../components/cards/Card";
import MyCarousel from "../components/cards/Carousel";
import img1 from "../assets/cardImg/guruji1.jpg";
import img2 from "../assets/cardImg/mandap2.jpg";
import img3 from "../assets/cardImg/audio.jpg";
import img4 from "../assets/cardImg/vertual.jpg";
import img5 from "../assets/cardImg/map2.jpg";
import img6 from "../assets/cardImg/Visitor.jpg";
import img7 from "../assets/cardImg/register.jpg";
import img8 from "../assets/cardImg/bring.jpg";
import img9 from "../assets/cardImg/internal.png";
import img10 from "../assets/cardImg/sri-sri-bangalore.png";
import img11 from "../assets/cardImg/product.jpg";
import MyCarousel1 from "../components/cards/Carousel1";

const Home = () => {
  const navigate = useNavigate();
  const items = [
    { Contents: "Our Founder", Links: "https://gurudev.artofliving.org/", img: img1 },
    { Contents: "Bengaluru International Center", Links: "https://bangaloreashram.org/" ,img: img2},
    { Contents: "Audio Tour", Links: "" ,img: img3},
    { Contents: "Virtual Tour of the Center", Links: "http://aolic.org/360" ,img: img4},
    { Contents: "Digital Maps", Links: "https://delhimetrorail.com/map" ,img: img5},
    { Contents: "Visitor Service", Links: "http://aolic.org/kiosk" ,img: img6},
    { Contents: "Register for Programs", Links: "https://programs.vvmvp.org/" ,img: img7},
    { Contents: "Bring your group", Links: "" ,img: img8},
    // { Contents: "Daily Events and Activites", Links: "" },
    // { Contents: "Upcoming programs and mega events news corner", Links: "" },
    // { Contents: "Media coverage and bites", Links: "" },
    // { Contents: "Whats new at the center and launches", Links: "" },

  ];

  return (
    <div>
      <div className="flex gap-12 flex-wrap justify-around">
        {items.map((item, index) => (
          <Card key={index} link={item.Links} name={item.Contents} img={item.img} />
        ))}

<div
      className="bg-white rounded-lg shadow-2xl h-40 flex  p-10 
                 transition-all duration-500 ease-in-out 
                 hover:text-yellow-700 hover:font-bold hover:shadow-2xl hover:scale-105 
                 w-full md:w-1/3  cursor-pointer"
                 onClick={() => navigate('/internal')}
      style={{
        backgroundImage: "linear-gradient(45deg, rgb(23, 22, 21), rgb(255, 132, 0), rgb(255, 173, 58))",
        color: "white",
        boxShadow: "10px 10px 20px 0 rgb(97 75 66 / 70%)",
      }}
    >
      <img src={img9} alt=""
      style={{
        height: "5rem",
        width: "5rem",
        margin: "auto",
        borderRadius: "5rem"
      }}
      />
       {/* <ToastContainer /> */}
     
        <a
          // href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center m-auto text-xl"
        >
          Internal Logins
        </a>
    
    </div>

    <div
      className="bg-white rounded-lg shadow-2xl h-40 flex  p-10 
                 transition-all duration-500 ease-in-out 
                 hover:text-yellow-700 hover:font-bold hover:shadow-2xl hover:scale-105 
                 w-full md:w-1/3  cursor-pointer"
                 onClick={() => navigate('/sistertrust')}
      style={{
        backgroundImage: "linear-gradient(45deg, rgb(23, 22, 21), rgb(255, 132, 0), rgb(255, 173, 58))",
        color: "white",
        boxShadow: "10px 10px 20px 0 rgb(97 75 66 / 70%)",
      }}
    >
      <img src={img10} alt=""
      style={{
        height: "5rem",
        width: "5rem",
        margin: "auto",
        borderRadius: "5rem"
      }}
      />
       {/* <ToastContainer /> */}
     
        <a
          // href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center m-auto text-xl"
        >
         Sister Trust
        </a>
    
    </div>

    {/* <div
      className="bg-white rounded-lg shadow-2xl h-40 flex  p-10 
                 transition-all duration-500 ease-in-out 
                 hover:text-yellow-700 hover:font-bold hover:shadow-2xl hover:scale-105 
                 w-full md:w-1/3  cursor-pointer"
                 onClick={() => navigate('/advertisement')}
      style={{
        backgroundImage: "linear-gradient(45deg, rgb(23, 22, 21), rgb(255, 132, 0), rgb(255, 173, 58))",
        color: "white",
        boxShadow: "10px 10px 20px 0 rgb(97 75 66 / 70%)",
      }}
    >
      <img src={img11} alt=""
      style={{
        height: "5rem",
        width: "5rem",
        margin: "auto",
        borderRadius: "5rem"
      }}
      />
        <a
         
          target="_blank"
          rel="noopener noreferrer"
          className="text-center m-auto text-xl"
        >
         Advertisement Bar
        </a>
    
    </div> */}

    {/* <div
      className="bg-white rounded-lg shadow-2xl h-40 flex  p-10 
                 transition-all duration-500 ease-in-out 
                 hover:text-yellow-700 hover:font-bold hover:shadow-2xl hover:scale-105 
                 w-full md:w-1/3  cursor-pointer"
                
      style={{
        backgroundImage: "linear-gradient(45deg, rgb(23, 22, 21), rgb(255, 132, 0), rgb(255, 173, 58))",
        color: "white",
        boxShadow: "10px 10px 20px 0 rgb(97 75 66 / 70%)", opacity:"0",
      }}
    >
      <img src="" alt=""
      style={{
        height: "5rem",
        width: "5rem",
        margin: "auto",
        borderRadius: "5rem"
      }}
      />
      
        <a
   
          target="_blank"
          rel="noopener noreferrer"
          className="text-center m-auto text-xl"
        >
        
        </a>
    
    </div> */}

        {/* Internal Logins */}
        {/* <div
          className="rounded-lg shadow-2xl h-40 flex contrnt-center p-10 justify-between
                     transition-all duration-500 ease-in-out cursor-pointer
                     hover:text-yellow-700 hover:font-bold hover:shadow-2xl hover:scale-105 
                     w-full md:w-1/3 text-white text-center flex items-center justify-center"
          style={{  
            color:"white",
            backgroundImage: "linear-gradient(45deg, rgb(23, 22, 21), rgb(255, 132, 0), rgb(255, 173, 58))",
            boxShadow: "10px 10px 20px 0 rgba(68, 35, 21, 0.58)"
          }}
          onClick={() => navigate('/internal')}
        >
          <img src={img9} alt=""
      style={{
        height: "5rem",
        width: "5rem",
        margin: "auto",
        borderRadius: "5rem"
      }}
      />
          <div className="text-xl">Internal Logins</div>
        </div> */}

        {/* Sister Trust */}
        {/* <div
        
          className="rounded-lg shadow-2xl h-40 flex content-center  justify-between p-10 
                     transition-all duration-500 ease-in-out cursor-pointer
                     hover:text-yellow-700 hover:font-bold hover:shadow-2xl hover:scale-105 
                     w-full md:w-1/3 text-white text-center flex items-center justify-center"
          style={{  
            color:"white",
            backgroundImage: "linear-gradient(45deg, rgb(23, 22, 21), rgb(255, 132, 0), rgb(255, 173, 58))",
              boxShadow: "10px 10px 20px 0 rgba(68, 35, 21, 0.53)"
          }}
          onClick={() => navigate('/sistertrust')}
        >
                <img src={img10} alt=""
      style={{
        height: "5rem",
        width: "5rem",
        margin: "auto",
        borderRadius: "5rem"
      }}
      />
          <div className="text-xl">Sister Trust</div>
        </div> */}
      </div>

      {/* Carousel */}
      <MyCarousel />
      {/* <MyCarousel1 /> */}
    </div>
  );
};

export default Home;
