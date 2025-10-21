import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = ({ data }) => {
  const breakingNews = (data || []).filter((news) => news.rating.badge === "trending");
  console.log(breakingNews);

  return (
    <div className="flex items-center py-2 bg-base-200 px-2 gap-2 mt-4">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      {breakingNews.length > 0 ? (
        <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
          {breakingNews.map((news, index) => (
            <p key={index} className="font-semibold mx-4">
              🟢 {news.title}
            </p>
          ))}
        </Marquee>
      ) : (
        <p className="text-gray-500">No trending news available.</p>
      )}
    </div>
  );
};

export default LatestNews;
