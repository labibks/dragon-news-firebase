import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
      <div>
        <header>
          <Header></Header>
        </header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <section className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </section>
        <main className="w-11/12 mx-auto   grid grid-cols-12 gap-5 mt-6 ">
          <aside className="col-span-3 sticky top-0 h-fit">
            <LeftAside></LeftAside>
          </aside>
          <section className="main col-span-6">
            <Outlet></Outlet>
          </section>
          <aside className="col-span-3 sticky top-0 h-fit">
            <RightAside></RightAside>
          </aside>
        </main>
      </div>
    );
};

export default HomeLayout;