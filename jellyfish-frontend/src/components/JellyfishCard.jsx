import noImage from '../components/image/no-Image.jpg';
import { Link } from "react-router-dom";

function JellyfishCard({ jellyfish }) {
  return (
    <div className="jellyfish-card">
      <div>
        <img src={jellyfish.image_link ? jellyfish.image_link : noImage } alt="jellyfish"/>
      </div>
      <div>
        <h4>
          <Link to={`/jellyfish/${jellyfish.id}`} >{jellyfish.is_venomous ? "☠" : "♡"} {jellyfish.name}</Link>
        </h4>
      </div>
    </div>
  );
}

export default JellyfishCard;