import { useLoaderData } from "react-router-dom";
import NewsCart from "../Components/NewsCart";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <h1 className="font-bold mb-3 text-xl"> Dragon News Home</h1>
      <p className="text-gray-400 text-sm">
        {news.length} News found on this News
      </p>
      <div>
        {news.map((singleNews) => (
          <NewsCart key={singleNews._id} news={singleNews}></NewsCart>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
