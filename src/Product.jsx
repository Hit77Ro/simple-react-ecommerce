import { Link } from "react-router-dom";

export default function Product({ product, showBtn }) {
  const { id, image: img, title, description } = product;
  //   const cutText = (text, max) => text.split(" ", max).join(" ");

  return (
    <div className="product">
      <div className="img">
        <img src={img} alt={title} />
      </div>
      <div className="body">
        {" "}
        <h1>{title} </h1>
        <p> {description} </p>
      </div>
      <div className="footer">
        {showBtn ? (
          <>
            <Link className="btn" to={`/products/${id}`}>
              {" "}
              view details{" "}
            </Link>
          </>
        ) : (
            <button className="btn back">back</button>
        )}
      </div>
    </div>
  );
}
