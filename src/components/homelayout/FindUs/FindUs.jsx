import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiFacebook } from 'react-icons/si';

const FindUs = () => {
    return (
      <div>
        <h2 className="font-bold">Find Us On</h2>
        <div className="">
          <div className="join join-vertical w-full ">
            <button className="btn bg-base-100 justify-start join-item">
              <SiFacebook />
              Facebook
            </button>
            <button className="btn bg-base-100 justify-start join-item">
              <FaTwitter />
              Twitter
            </button>
            <button className="btn bg-base-100 justify-start join-item">
              <FaInstagram />
              Instagram
            </button>
          </div>
        </div>
      </div>
    );
};

export default FindUs;