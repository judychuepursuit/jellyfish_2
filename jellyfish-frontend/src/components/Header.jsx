import { Link } from "react-router-dom";


export default function Header() {
  return (
    // 
    <jf-page-header>
    {/* <nav> */}
      <h1>
        <Link to="/" className="header-link">Jellyfish</Link>
      </h1>
    </jf-page-header>
    // </nav>
  );
}