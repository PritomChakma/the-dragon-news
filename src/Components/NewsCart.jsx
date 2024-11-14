import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  return (
    <div className="border rounded-lg p-4 shadow-md max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={news.author.img}
            alt="Author"
            className="rounded-full w-10 h-10"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{news.author.name}</h2>
            <p className="text-gray-500 text-sm">2022-08-21</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <FaBookmark className="text-gray-500 cursor-pointer" />
          <FaShareAlt className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg text-gray-800 mb-3">{news.title}</h3>

      {/* Image */}
      <img
        src={news.image_url}
        alt="News Thumbnail"
        className="rounded-lg mb-4"
      />

      {/* Description */}
      <p className="text-gray-600 text-sm mb-3 overflow-y-scroll h-48">
      Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) — U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a...
        <Link to={`/news/${news._id}`} className="text-blue-500 cursor-pointer"> Read More</Link>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-yellow-500">
          <FaStar />
          <span className="ml-1 font-semibold text-gray-700">4.9</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaEye />
          <span className="ml-1">499</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
