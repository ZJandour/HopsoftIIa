import { useState } from "react";
import allPortfolio from "./dataCategories";
import categories from "./categories";
import "./AllCategories.css";

const AllCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("Ligihiting  |");

  const endProduct = allPortfolio.filter((oneProduct) => {
    return oneProduct["category"] === selectedCategory;
  });

  return (
    <div>
      <div className="all-buttons">
        {categories.map((oneCategory) => {
          return (
            <button className={`one-button ${ oneCategory === selectedCategory ? "selected" : ""}`}
              onClick={() => {
                setSelectedCategory(oneCategory);
              }}
            >
              {oneCategory}
            </button>
          );
        })}
      </div>

      <div className="all-portfolio">
        {endProduct.map((oneProduct) => {
          const {id, icon, MainTitle, image, title, date, text, description, description2, link,} = oneProduct;

          return (
            <div className="" key={id}>
              <div className={`header-portfolio ${icon && MainTitle ? "has-color" : "" }`}>
                {icon}
                {MainTitle}
              </div>
              <div className="text-image">
                <div className="one-portfolio">
                  <h2>{title}</h2>
                  <p>{date}</p>
                  <p>{text}</p>
                  <p>{description}</p>
                  <p>{description2}</p>
                  <button className="download">{link}</button>
                </div>
                  <img src={image} alt="" className="image" />
                
              </div>
              <div className="line"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCategories;