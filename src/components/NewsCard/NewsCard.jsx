import React from "react";
import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { author, title, details, thumbnail_url, rating, total_view } = news;

  // Format the date
  const date = new Date(news.author.published_date).toISOString().split("T")[0];

  return (
    <div className="card bg-base-100 shadow-md  mb-6">
      {/* Top: Author + Actions */}
      <div className="flex justify-between items-center px-4 py-3 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={news.image_url}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-accent" />
          <FaShareAlt className="cursor-pointer hover:text-accent" />
        </div>
      </div>

      {/* News Image */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-[250px] object-cover"
        />
      </figure>

      {/* News Content */}
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{title}</h2>

        <p className="text-sm text-gray-600">
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}...
              <span className="text-accent cursor-pointer font-semibold underline">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>

        {/* Bottom Section: Rating + Views */}
        <div className="flex justify-between items-center pt-3 border-t text-sm text-gray-600">
          <div className="flex items-center gap-1 text-warning">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < rating.number ? "text-warning" : "text-gray-300"
                }
              />
            ))}
            <span className="text-gray-700 ml-1">{rating.number}</span>
          </div>

          <div className="flex items-center gap-1">
            <FaEye /> {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
