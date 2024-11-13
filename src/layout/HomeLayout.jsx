import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
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
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto grid md:grid-cols-12">
        <aside className="left col-span-3">Left Content</aside>
        <section className="col-span-6">Mid Content</section>
        <aside className="Right col-span-3">Right Content</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
