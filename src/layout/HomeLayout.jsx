import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-10/12 mx-auto mt-5">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav></nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;
