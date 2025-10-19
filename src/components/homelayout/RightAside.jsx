import React from 'react';
import LoginMethod from './LoginMethod/LoginMethod';
import FindUs from './FindUs/FindUs';
import QZone from './QZone/QZone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <LoginMethod></LoginMethod>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;