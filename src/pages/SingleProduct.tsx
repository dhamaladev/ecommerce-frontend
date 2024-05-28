import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/services/Products";

const SingleProduct = () => {
  const { id: idParam } = useParams<{ id: string | undefined }>();
  const id = idParam || "";
  const { data, error, isLoading } = useGetProductByIdQuery(id);
  console.log(data);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="px-10 py-6 bg-slate-800 text-slate-50">
      <div className="grid md:grid-cols-2">
        <div className="">
          <img src={data.image} alt={data.title} className="h-96 w-96" />
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-[1.75rem] font-semibold">{data.title}</h1>
          <p>{data.description}</p>
          <p>reviews : {data.rating_count}</p>
          <p>ratings : {data.rating_rate}</p>
          <p>price: ${data.price}</p>
          <p>category: {data.category}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
