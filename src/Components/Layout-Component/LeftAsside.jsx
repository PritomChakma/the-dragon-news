import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAsside = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
  }, []);

  return (
    <div>
      <h2 className="font-bold">All Caterogy({category.length})</h2>
      <div className="flex flex-col gap-2 mt-3">
        {category.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="btn"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftAsside;
