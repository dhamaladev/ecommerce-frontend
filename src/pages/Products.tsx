import {
  useFilterProductsByTitleQuery,
  useGetAllProductsQuery,
} from "../redux/services/Products";
import productType from "../types/Product";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const notify = () =>
    toast("Added to cart successfully !", {
      position: "top-right",
      autoClose: 2000,
    });

  const [search, setSearch] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("default");
  const { data: allProducts, error, isLoading } = useGetAllProductsQuery();
  const { data: filteredProducts, isLoading: isFiltering } =
    useFilterProductsByTitleQuery(search, {
      skip: !search,
    });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  if (isLoading || isFiltering) return <h1>Loading...</h1>;
  if (error) return <h1>Error loading products</h1>;

  let products = search ? filteredProducts : allProducts;

  if (sortOption === "price-high-to-low") {
    products = products
      ?.slice()
      .sort((a: productType, b: productType) => b.price - a.price);
  } else if (sortOption === "price-low-to-high") {
    products = products
      ?.slice()
      .sort((a: productType, b: productType) => a.price - b.price);
  }

  return (
    <div className="px-10 text-slate-50 bg-slate-800">
      <form className="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={handleSearchChange}
          className="bg-slate-800 h-10 my-4 border outline-none px-6 rounded-md"
          autoFocus
        />
        <Dropdown onSortChange={handleSortChange} />
      </form>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products &&
          products.map((product: productType) => (
            <ProductCard key={product.id} product={product} notify={notify} />
          ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Products;
