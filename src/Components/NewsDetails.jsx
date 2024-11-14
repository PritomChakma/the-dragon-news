import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";
import RightAsside from "./Layout-Component/RightAsside";
import Navbar from "./Navbar";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
        <Navbar className="space-y-10"></Navbar>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12">
        <section className="col-span-9">
          <h2 className="font-semibold text-lg mb-3">Dragon News</h2>

          <div className="card bg-base-100 shadow-xl p-5">
            <figure className="px-10 pt-10">
              <img src={news?.image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news?.category_id}`}
                  className="btn bg-[#D72050] text-white font-semibold"
                >
                  <i class="fa-solid fa-arrow-left"></i> All news in this
                  category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightAsside></RightAsside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
