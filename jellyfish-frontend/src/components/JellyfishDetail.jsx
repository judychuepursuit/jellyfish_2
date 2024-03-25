
import noImage from '../components/image/no-Image.jpg';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function JellyfishDetail() {
  // const API = process.env.REACT_APP_API_URL;
  const API = import.meta.env.VITE_API_URL;
  const [jellyfish, setJellyfish] = useState({});
  let navigate = useNavigate();
  let { id } = useParams();
  console.log(API, id);

  useEffect(() => {
    axios
      .get(`${API}/jellyfish/${id}`)
      .then(response => {
        setJellyfish(response.data)
        console.log(response)
      })
      .catch(() => navigate("/not-found"));
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/jellyfish/${id}`)
      .then(() => navigate(`/jellyfish`))
      .catch((e) => console.error(e));
  };

  console.log(jellyfish)
  return (
    <article className="jellyfish-page">
      <div>
{/* somthing is wrong w line 39 worked w Jose - he suggest its the css issue*/}
      {/* <div className="jellyfish-detail"> */}
        <div className="image">
      {/* <h1>test</h1> */}
          <img src={jellyfish.image_link ? jellyfish.image_link : noImage}  alt="jellyfish"/>
        </div>
        {/* console.log(jellyfish) */}
        <div className="detail">
          <h2>{jellyfish.is_venomous ? "☠" : "♡"} {jellyfish.name}</h2>
          <p>
            <span>Scientific Name:</span> <em>{jellyfish.scientific}</em>
          </p>

          INFORMATION: {jellyfish.information}
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
