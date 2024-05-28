import { Link } from "react-router-dom";
import ShoppingImage from "../assets/shopping.jpg";
const HomePage = () => {
  return (
    <main className="w-screen sm:w-full flex gap-x-6 flex-col md:flex-row items-center justify-center py-20 px-16 bg-slate-800 text-slate-50">
      <div className="w-[95%] py-4 mx-auto flex flex-col items-center justify-center gap-y-5">
        <h1 className="text-3xl sm:text-5xl font-bold text-center ">
          Welcome to ramailo ecommerce
        </h1>
        <p className="text-center">
          Your only marketplace to buy and sell the products.
        </p>
        <div className="mt-4 text-center">
          <Link
            to="/products"
            className=" block border rounded-md py-1 px-4 sm:px-6 sm:py-2 hover:bg-slate-100 hover:text-slate-900 text-center cursor-pointer"
          >
            Shop now
          </Link>
        </div>
      </div>
      <div>
        <img src={ShoppingImage} alt="shopping image" className="h-40 w-80 sm:h-[20rem] sm:w-[50rem]"/>
      </div>
    </main>
  );
};

export default HomePage;
