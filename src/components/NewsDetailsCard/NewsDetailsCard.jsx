import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news)
    return (
      <div className="space-y-5">
        <img src={news.image_url} alt="" />

        <h2 className="text-2xl">{news.title}</h2>

        <p>{news.details}</p>

        <Link
          className="btn btn-secondary"
          to={`/category/${news.category_id}`}
        >
          {" "}
          <GoArrowLeft />
          All News in this category{" "}
        </Link>
      </div>
    );
};

export default NewsDetailsCard;