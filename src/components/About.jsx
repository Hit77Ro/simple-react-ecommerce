import { Outlet, Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>about page</h1>
      <nav>
        <Link className="btn" to="text">
          go to text{" "}
        </Link>
        <Link className="btn" to="contact">
          go to contact{" "}
        </Link>
      </nav>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
