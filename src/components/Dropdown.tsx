import React from "react";

const Dropdown = ({ onSortChange }: { onSortChange: (option: string) => void }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value);
  };

  return (
    <select onChange={handleSelectChange} className="bg-slate-800 h-10 my-4 border outline-none px-6 rounded-md">
      <option value="default">Sort By</option>
      <option value="price-low-to-high">Price: Low to High</option>
      <option value="price-high-to-low">Price: High to Low</option>
    </select>
  );
};

export default Dropdown;
