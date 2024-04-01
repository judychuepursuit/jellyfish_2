import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <jf-page-header>
      <h1>
        <Link to="/" className="jellyfish-headline">Jellyfish</Link>
      </h1>
    </jf-page-header>
  );
}

// export default function Header() {
//   return (

//     <jf-page-header>

//       <h1>
//         <Link to="/" className="jellyfish-headline">Jellyfish</Link>
//         {/* <Link to="/" className="jellyfish-headline no-hover">Jellyfish</Link> */}
//       </h1>
//     </jf-page-header>

//   );
// }

