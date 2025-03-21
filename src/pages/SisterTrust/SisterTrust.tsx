import React from "react";
import Card from "../../components/cards/Card";
import img1 from "../../assets/cardImg/G1.jpg";
import img2 from "../../assets/cardImg/hospital.jpg";
import img3 from "../../assets/cardImg/cafes.jpg"
import img4 from "../../assets/cardImg/product.jpg";
import img5 from "../../assets/cardImg/book.jpg";

function SisterTrust() {
  const internal = [
    { Contents: "Panchkarma", Links: "https://www.srisriwellbeing.com/?srsltid=AfmBOop8YyEeJ2T6WhO_Wq-iDjW4PazNuviV8VngMc1g0COpHVrcpgH1" ,img: img1},
    { Contents: "Ayurveda Hospital", Links: "https://srisriayurvedahospital.org/" ,img: img2},
    { Contents: "Cafes", Links: "" ,img:img3},
    { Contents: "Sri Sri Tattva Products", Links: "https://www.srisritattva.com/?utm_source=Google&utm_Medium=cpc&utm_campaign=FS_Brand_Seach_200824&utm_source=google&utm_medium=paid&utm_campaign=20229142303&utm_content=154933743732&utm_term=sri%20sri%20tattva&gadid=663095144779&gad_source=1&gclid=Cj0KCQiA8q--BhDiARIsAP9tKI1z4-wCAJ-EnnY7KceqXHzgGrLs9CPJig-hm6rMWjyw5SgbJIJikq0aAu82EALw_wcB" ,img: img4},
    { Contents: "Books and Store", Links: "https://artofliving.store/?srsltid=AfmBOoqZetLThfg6BqB_X3OfC_obTagt20p0HwFuVuO_GkppsHsbHP7O",img: img5 },
    
  ];

  return (
    <div className="flex gap-12 flex-wrap justify-around">
      {internal.map((item, index) => (
        <Card key={index} link={item.Links} name={item.Contents} img={item.img} />
      ))}
    <a
      // href="jjd"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow-2xl h-40 flex flex-col p-10 
                 transition-all duration-500 ease-in-out 
                 hover:text-yellow-700 hover:font-bold hover:shadow-2xl hover:scale-105 
                 w-full md:w-1/3"
                 style={{  backgroundImage: "linear-gradient(45deg,rgb(23, 22, 21),rgb(255, 132, 0),rgb(255, 173, 58))"
                  ,color:"white", boxShadow:"10px 10px 20px 0 rgb(255, 230, 91)"
                  ,opacity: "0"
                 }}
                 onClick={()=>{
                  
                }}
    >
      <div className="text-center m-auto text-xl">
        {/* Sister Trust */}
        </div>
    </a>
    </div>
  );
}

export default SisterTrust;
  