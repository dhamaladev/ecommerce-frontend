import React, { useState } from 'react';
import { useGetAllProductsQuery, useFilterProductsByTitleQuery, useFilterProductsByCategoryQuery } from '../redux/services/Products';
import ProductCard from '../components/ProductCard';
import Dropdown from '../components/Dropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import productType from '../types/Product';

const Products = () => {
  const notify = () => toast("Added to cart successfully!", { position: "top-right", autoClose: 2000 });

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sortOption, setSortOption] = useState('default');

  const { data: allProducts, error, isLoading } = useGetAllProductsQuery();
  const { data: filteredByTitle, isLoading: isFilteringByTitle } = useFilterProductsByTitleQuery(search, { skip: !search });
  const { data: filteredByCategory, isLoading: isFilteringByCategory } = useFilterProductsByCategoryQuery(category, { skip: !category });

  const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleCategoryChange = (e:React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value);
  const handleSortChange = (option:any) => setSortOption(option);

  if (isLoading || isFilteringByTitle || isFilteringByCategory) return <h1>Loading...</h1>;
  if (error) return <h1>Error loading products</h1>;

  let products = search ? filteredByTitle : (category ? filteredByCategory : allProducts);

  if (sortOption === 'price-high-to-low') {
    products = products?.slice().sort((a:any, b:any) => b.price - a.price);
  } else if (sortOption === 'price-low-to-high') {
    products = products?.slice().sort((a:any, b:any) => a.price - b.price);
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
        <input
          type="text"
          placeholder="Filter by category..."
          value={category}
          onChange={handleCategoryChange}
          className="bg-slate-800 h-10 my-4 border outline-none px-6 rounded-md"
        />
        <Dropdown onSortChange={handleSortChange} />
      </form>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products && products.map((product:productType) => (
          <ProductCard key={product.id} product={product} notify={notify} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Products;
