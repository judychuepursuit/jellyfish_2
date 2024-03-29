import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    // 
    <jf-page-header>
    {/* <nav> */}
      <h1>
        <Link to="/" className="jellyfish-headline no-hover">Jellyfish</Link>
      </h1>
    </jf-page-header>
    // </nav>
  );
}