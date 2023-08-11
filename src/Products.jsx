import { useEffect, useState } from "react";
import Product from "./Product";
import fetcher from "./fetcher";
import { Link, Outlet } from "react-router-dom";
const api = "https://fakestoreapi.com/products";
const caterogies_url = "https://fakestoreapi.com/products/categories";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [caterogies, setCategories] = useState([]);
  const handleCategories = (name) => {
    fetcher("https://fakestoreapi.com/products/category/" + name)
      .then((res) => setProducts(res))
      .catch((error) => console.log(error));
  };
  const getCaterories = () => {
    fetcher(api + "/categories")
      .then((res) => setCategories(res))
      .catch((error) => console.log(error));
  };

  const getProducts = async () => {
    try {
      const data = await fetcher(api);
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log("Error => : ", error);
    }
  };
  useEffect(() => {
    getProducts();
    getCaterories();
  }, []);
  return (
    <div className="products">
      <div className="caterogies">
        {caterogies.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategories(cat)}
            className="btn"
          >
            {cat}{" "}
          </button>
        ))}
      </div>
      <div className="container">
        {products.length > 0 ? (
          products.map((product) => (
            <Product product={product} key={product.id} showBtn={true} />
          ))
        ) : (
          <h1>no products yet</h1>
        )}
        <nav>
          <Link className="btn" to="text">
            go to text{" "}
          </Link>
          <Link className="btn" to="contact">
            go to contact{" "}
          </Link>
        </nav>

        <Outlet/>
      </div>
    </div>
  );
}
