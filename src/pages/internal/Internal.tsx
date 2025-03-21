import React from 'react';
import Card from '../../components/cards/Card';
import { wrap } from 'module';
// import img1 from "../../assets/cardImg/panchakarma.jpg";
// import img2 from "../../assets/cardImg/h.jpg";
import { Navigate, useNavigate } from 'react-router-dom';
import img1 from "../../assets/internal/teacher.jpg";
import img2 from "../../assets/internal/student.jpg";
import img3 from "../../assets/internal/asram.jpg";
import img4 from "../../assets/internal/security.jpg";
import img5 from "../../assets/internal/shop.jpg";



function Internal() {
  const navigate = useNavigate();

  
  // const internal = [
  //   { Contents: "VVMVP School", Links: "http://aolic.org/vvmvpschools", img: img1 },
  //   { Contents: "Ashram HRMS", Links: "http://aolic.org/hrmslogin" , img : img2},
    
  // ];

  return (
    <div className="flex gap-12 flex-wrap justify-around">
      {/* {internal.map((item, index) => (
        <Card key={index} link={item.Links} name={item.Contents} img={item.img}
         />
      ))} */}

<div
      className="bg-white rounded-lg shadow-2xl h-40 flex  p-10 
                 transition-all duration-500 ease-in-out 
                 hover:text-yellow-700 hover:font-bold hover:shadow-2xl hover:scale-105 
                 w-full md:w-1/3  cursor-pointer"
                 onClick={() => navigate('/internal2')}
      style={{
        backgroundImage: "linear-gradient(45deg, rgb(23, 22, 21), rgb(255, 132, 0), rgb(255, 173, 58))",
        color: "white",
        boxShadow: "10px 10px 20px 0 rgb(97 75 66 / 70%)",
      }}
    >
      <img src={img1} alt=""
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
         Teacher
        </a>
    
    </div>
    <div
      className="bg-white rounded-lg shadow-2xl h-40 flex  p-10 
                 transition-all duration-500 ease-in-out 
                 hover:text-yellow-700 hover:font-bold hover:shadow-2xl hover:scale-105 
                 w-full md:w-1/3  cursor-pointer"
                 onClick={() => navigate('/internal2')}
      style={{
        backgroundImage: "linear-gradient(45deg, rgb(23, 22, 21), rgb(255, 132, 0), rgb(255, 173, 58))",
        color: "white",
        boxShadow: "10px 10px 20px 0 rgb(97 75 66 / 70%)",
      }}
    >
      <img src={img2} alt=""
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
         Student
        </a>
    
    </div>
    <div
      className="bg-white rounded-lg shadow-2xl h-40 flex  p-10 
                 transition-all duration-500 ease-in-out 
                 hover:text-yellow-700 hover:font-bold hover:shadow-2xl hover:scale-105 
                 w-full md:w-1/3  cursor-pointer"
                 onClick={() => navigate('/internal2')}
      style={{
        backgroundImage: "linear-gradient(45deg, rgb(23, 22, 21), rgb(255, 132, 0), rgb(255, 173, 58))",
        color: "white",
        boxShadow: "10px 10px 20px 0 rgb(97 75 66 / 70%)",
      }}
    >
      <img src={img3} alt=""
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
         Ashram Employe
        </a>
    
    </div>
    <div
      className="bg-white rounded-lg shadow-2xl h-40 flex  p-10 
                 transition-all duration-500 ease-in-out 
                 hover:text-yellow-700 hover:font-bold hover:shadow-2xl hover:scale-105 
                 w-full md:w-1/3  cursor-pointer"
                 onClick={() => navigate('/internal2')}
      style={{
        backgroundImage: "linear-gradient(45deg, rgb(23, 22, 21), rgb(255, 132, 0), rgb(255, 173, 58))",
        color: "white",
        boxShadow: "10px 10px 20px 0 rgb(97 75 66 / 70%)",
      }}
    >
      <img src={img4} alt=""
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
         Security
        </a>
    
    </div>
    <div
      className="bg-white rounded-lg shadow-2xl h-40 flex  p-10 
                 transition-all duration-500 ease-in-out 
                 hover:text-yellow-700 hover:font-bold hover:shadow-2xl hover:scale-105 
                 w-full md:w-1/3  cursor-pointer"
                 onClick={() => navigate('/internal2')}
      style={{
        backgroundImage: "linear-gradient(45deg, rgb(23, 22, 21), rgb(255, 132, 0), rgb(255, 173, 58))",
        color: "white",
        boxShadow: "10px 10px 20px 0 rgb(97 75 66 / 70%)",
      }}
    >
      <img src={img5} alt=""
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
         Shop Keeper
        </a>
    
    </div>
    <div
      className="bg-white rounded-lg shadow-2xl h-40 flex  p-10 
                 transition-all duration-500 ease-in-out 
                 hover:text-yellow-700 hover:font-bold hover:shadow-2xl hover:scale-105 
                 w-full md:w-1/3  cursor-pointer"
                //  onClick={() => navigate('/internal2')}
      style={{
        backgroundImage: "linear-gradient(45deg, rgb(23, 22, 21), rgb(255, 132, 0), rgb(255, 173, 58))",
        color: "white",
        boxShadow: "10px 10px 20px 0 rgb(97 75 66 / 70%)",
        opacity:"0"
      }}
    >
      <img src={img2} alt=""
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
         {/* Student */}
        </a>
    
    </div>
    </div>
  );
}

export default Internal;
