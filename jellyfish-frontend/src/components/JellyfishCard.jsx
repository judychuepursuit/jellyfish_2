import noImage from '../components/image/no-Image.jpg';
import { Link } from "react-router-dom";

function JellyfishCard({ jellyfish }) {
  return (
    <div className="jellyfish-card">
      <div>
        <div className="jf-card-image"></div>
        <img src={jellyfish.image_link ? jellyfish.image_link : noImage } alt="jellyfish"/>
      </div>
      {/* <div>
        <img src={jellyfish.image_link ? jellyfish.image_link : noImage } alt="jellyfish"/>
      </div> */}
      <div>
        <h5 className="jf-card-link">
          <Link to={`/jellyfish/${jellyfish.id}`} className="custom-hover">{jellyfish.is_venomous ? "☠" : "♡"} {jellyfish.name}</Link>
        </h5>
      </div>
    </div>
  );
}

export default JellyfishCard;