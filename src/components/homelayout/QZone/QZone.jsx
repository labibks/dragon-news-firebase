import React from 'react';
import swimming from '../../../assets/swimming.png'
import classImg from '../../../assets/class.png'
import ground from '../../../assets/playground.png'

const QZone = () => {
    return (
      <div className="bg-base-200 p-3">
        <h2 className="font-bold">Q Zone</h2>
        <div className='space-y-5'>
          <img src={swimming} alt="" />
          <img src={classImg} alt="" />
          <img src={ground} alt="" />
        </div>
      </div>
    );
};

export default QZone;