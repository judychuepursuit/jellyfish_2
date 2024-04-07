// <!-- this refers to the no image pose not a yoga pose -->

import './FourOFour.css';
import noImage from '../components/image/no-Image.png';

function FourOFour() {
    return (
      <div className="not-found">
        <h1 className="text-not-found">Sorry, Page not found!</h1>
        {/* <h1>Sorry, Page not found!</h1> */}
        <img src={noImage}alt="jellyfish"/>
      </div>
    );
  }

  export default FourOFour;