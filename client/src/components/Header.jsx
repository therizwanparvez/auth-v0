import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">MERN AUTH</h1>
        </Link>
        <nav>
          <ul className="flex gap-4 items-center">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/signin">
              {" "}
              <li>Sign In</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
