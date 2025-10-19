import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
      <div className="flex items-center  py-2 bg-base-200 px-2 gap-2 mt-4">
        <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
        <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
          <p className='font-semibold'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, enim!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error sit culpa ducimus cum magni fuga odit? Facere, nesciunt. Asperiores quibusdam vel voluptas minus dolores tempore, odit architecto nam, voluptates, obcaecati vitae! Provident placeat soluta earum ea voluptates maiores aliquid!!
          </p>
        </Marquee>
      </div>
    );
};

export default LatestNews;