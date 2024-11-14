import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftAsside from "../Components/Layout-Component/LeftAsside";
import RightAsside from "../Components/Layout-Component/RightAsside";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-10/12 mx-auto mt-5">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="mt-5">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto grid md:grid-cols-12 mt-10 gap-5">
        <aside className="left col-span-3">
          <LeftAsside></LeftAsside>
        </aside>
        <section className="col-span-6"><Outlet></Outlet></section>
        <aside className="Right col-span-3">
          <RightAsside></RightAsside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
