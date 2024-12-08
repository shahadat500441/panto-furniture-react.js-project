import bannerImg from "../../assets/banner.png";
import Products from "./Products";

const Shop = () => {
  return (
    <section className="min-h-screen-">
      {/* banner */}
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1 className="text-5xl font-bold">Shop Our Products</h1>
      </div>
      <Products headline="What's Yours Choice"/>
    </section>
  );
};

export default Shop;
