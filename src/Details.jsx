// details.jsx
import { useParams } from "react-router-dom";
import Product from "./Product";
import fetcher from "./fetcher";
import { useEffect, useState } from "react";

const api = "https://fakestoreapi.com/products";
export default function Details() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetcher(`${api}/${productId}`).then((res) => setProduct(res)).catch(error=> console.log(error));
  }, []);
  //   return data;

  return (
    <div className="details">
      <div className="container">
        <Product product={product} showBtn={false} />
       
      </div>
    </div>
  );
}
