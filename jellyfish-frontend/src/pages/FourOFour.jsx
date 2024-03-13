// <!-- this refers to the no image pose not a yoga pose -->

import noImage from '../components/image/no-Image.jpg';

function FourOFour() {
    return (
      <div className="not-found">
        <img src={noImage}alt="jellyfish"/>
        <h1>Sorry, Page not found!</h1>
      </div>
    );
  }

  export default FourOFour;