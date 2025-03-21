import React from 'react';
import Card from '../../components/cards/Card';
import { wrap } from 'module';
import img1 from "../../assets/cardImg/panchakarma.jpg";
import img2 from "../../assets/cardImg/h.jpg";

function Internal2() {
  const internal = [
    { Contents: "VVMVP School", Links: "http://aolic.org/vvmvpschools", img: img1 },
    { Contents: "Ashram HRMS", Links: "http://aolic.org/hrmslogin" , img : img2},
    
  ];

  return (
    <div className="flex gap-12 flex-wrap justify-around">
      {internal.map((item, index) => (
        <Card key={index} link={item.Links} name={item.Contents} img={item.img}
         />
      ))}
    </div>
  );
}

export default Internal2;
