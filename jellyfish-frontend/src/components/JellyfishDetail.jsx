import noImage from '../components/image/no-Image.jpg';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './JellyfishDetail.css';
import "../pages/Show.css";


function JellyfishDetail() {
const API = import.meta.env.VITE_API_URL;
const [jellyfish, setJellyfish] = useState({});
let navigate = useNavigate();
let { id } = useParams();

useEffect(() => {
  axios
    .get(`${API}/jellyfish/${id}`)
    .then(response => {
      setJellyfish(response.data);
    })
    .catch(() => navigate("/not-found"));
}, [id, navigate]);

const handleDelete = () => {
  axios
    .delete(`${API}/jellyfish/${id}`)
    .then(() => navigate(`/jellyfish`))
    .catch((e) => console.error(e));
};

return (
  <div className="outer-grid-container">
    <div className="wrapper">
      <div className="navigation">
        <div>
          {" "}
          <Link to={`/jellyfish`}>
            <button>BACK</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/jellyfish/${id}/edit`}>
            <button>EDIT</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </div>
      <div className="jf-name">
        <h2>{jellyfish.is_venomous ? "💀" : "♡"} {jellyfish.name}</h2>
      </div>
      <div className="jf-images">
        <img className="jf-show-image" src={jellyfish.image_link ? jellyfish.image_link : noImage} alt="jellyfish" />
      </div>
      <div className="jf-info-1">
        <p>
          <span>Scientific Name:</span> <em>{jellyfish.scientific}</em>
        </p>
        <p>
          INFORMATION: {jellyfish.information}
        </p>
      </div>
      <div className="jf-info-2">
        <p>
        Official Website: <a href={jellyfish.website} target="_blank" rel="noreferrer" className="custom-link">{jellyfish.website}</a>
  </p>
      </div>
      </div>
  );
}

{/* <div className="navigation">
        <div>
          {" "}
          <Link to={`/jellyfish`}>
            <button>BACK</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/jellyfish/${id}/edit`}>
            <button>EDIT</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </div>
  );
} */}


export default JellyfishDetail;




