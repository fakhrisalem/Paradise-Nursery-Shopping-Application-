import React from "react";
import "./shopall.css";
import ImageOne from "./images/photo1.jpg";
import ImageTwo from "./images/photo2.jpg";
import ImageThree from "./images/photo3.jpg";
import ImageFour from "./images/photo4.jpg";
import ImageFive from "./images/photo5.jpg";
import ImageSix from "./images/photo6.jpg";
import ImageSeven from "./images/photo7.jfif";
const ShopAllData = [
  {
    projectName: "I work at Google",
    image: ImageTwo,
  },
  {
    projectName: "Mountaineering",
    image: ImageThree,
  },
  {
    projectName: "Hajj Kaaba",
    image: ImageFour,
  },
  {
    projectName: "Animal shelter",
    image: ImageFive,
  },
  {
    projectName: "Doctor from Oxford",
    image: ImageSix,
  },
  {
    projectName: "I work at Google",
    image: ImageSeven,
  },
];

const ShopAll = () => {
  return (
    <section id="ShopAll" className="ShopAll">
      {}
      <div className="featured-image">
        <img src={ImageOne} alt="Featured" />
      </div>

      {}
      <div className="ShopAll_content">
        <div className="ShopAll__content__cards">
          {ShopAllData.map((item, index) => (
            <div key={index} className="ShopAll_content__cards__item">
              <div className="ShopAll__content__cards__item__img-wrapper">
                <img
                  src={item.image}
                  alt={item.projectName || "Project Image"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopAll;
