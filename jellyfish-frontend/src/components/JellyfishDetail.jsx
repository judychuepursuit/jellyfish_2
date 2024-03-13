
// import noImage from '../components/image/no-Image.jpg';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function JellyfishDetail() {
  // const API = process.env.REACT_APP_API_URL;
  const API = import.meta.env.VITE_API_URL;
  console.log(API)
  const [jellyfish, setJellyfish] = useState([]);
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/jellyfish/${id}`)
      .then(response => setJellyfish(response.data))
      .catch(() => navigate("/not-found"));
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/jellyfish/${id}`)
      .then(() => navigate(`/jellyfish`))
      .catch((e) => console.error(e));
  };
  
  return (
    <article className="jellyfish-page">
      <div className="jellyfish-detail">
        <div className="image">
          <img src={jellyfish.image_link ? jellyfish.image_link : noImage}  alt="jellyfish"/>
        </div>
        {/* console.log(pose) */}
        <div className="detail">
          <h2>{jellyfish.is_venomous ? "☠" : "🌻"} {jellyfish.name}</h2>
          <p>
            <span>Scientific Name:</span> {jellyfish.scientific}
          </p>
          <p>
            Information:
           <a href={jellyfish.infomation} target="_blank" rel="noreferrer">{jellyfish.website}
            </a>
          </p>
          <p>Official Website: <a href={jellyfish.website} target="_blank"rel="noreferrer">{jellyfish.website}</a>
          </p>
        </div>
      </div>
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
    </article>
  );
}

export default JellyfishDetail;
