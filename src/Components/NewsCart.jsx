import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

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
        {news.details}
        <span className="text-blue-500 cursor-pointer"> Read More</span>
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
