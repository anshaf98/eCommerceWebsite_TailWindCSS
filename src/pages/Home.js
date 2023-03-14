import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Product from "../components/Product";

function Home() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  //   console.log(data.data);
  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <>
      <Banner />
      <Product products={products} />
    </>
  );
}

export default Home;
