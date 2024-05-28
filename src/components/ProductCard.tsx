import productType from "../types/Product";
import { NavLink } from "react-router-dom";


const ProductCard = ({ product, notify }: { product: productType, notify:any }) => {

  return (
    <div
      key={product.id}
      className="relative bg-slate-700 rounded-lg p-4 flex flex-col items-center shadow-lg transition-transform transform hover:scale-105"
    >
      <NavLink to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <div className="flex justify-between w-full mb-2 text-center">
          <h1 className="text-xl font-semibold">
            {product.title.substring(0, 10)}
          </h1>
          <h1 className="text-xl font-semibold">${product.price}</h1>
        </div>
        <p className="text-sm mb-2">Rating: {product.rating_rate}</p>
        <p className="text-sm mb-2">Category: {product.category}</p>
        <p className="text-sm">Reviews: {product.rating_count}</p>
      </NavLink>
      <div className="grid items-center">
        <button
          className="outline-none px-4 py-1 bg-purple-700 rounded-md mt-3"
          onClick={notify}
        >
          add to cart
        </button>
      </div>

    </div>
  );
};

export default ProductCard;
