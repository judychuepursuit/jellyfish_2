import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";    
import { useState, useEffect } from "react";


function EditJellyfish() {
  // const API = process.env.REACT_APP_API_URL;
  const API = import.meta.env.VITE_API_URL;
  console.log(API)
  let { id } = useParams();
  const navigate = useNavigate();

  const [jellyfish, setJellyfish] = useState({
    name: "",
    is_venomous: false,
    scientific: "",
    information: "",
    website: "",
    image_link: ""
  });

  const updateJellyfish = (updatedJellyfish) => {
    axios
      .put(`${API}/jellyfish/${id}`, updatedJellyfish)
      .then(() => {
          navigate(`/jellyfish/${id}`);
        },
        (error) => console.error(error))
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setJellyfish({ ...jellyfish, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setJellyfish({ ...jellyfish, is_venomous: !jellyfish.is_venomous });
  };

  useEffect(() => {
    axios
      .get(`${API}/jellyfish/${id}`)
      .then(
        (response) => setJellyfish(response.data),
        (error) => navigate(`/not-found`)
      );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateJellyfish(jellyfish, id);
  };

  return (
    <div className="new-edit-jellyfish">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Jellyfish Name:</label>
        <input
          id="name"
          value={jellyfish.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Jellyfish"
          required
        />
        <label htmlFor="is_venomous">Is Venomous?:</label>
        <input
          id="is_venomous"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={jellyfish.is_venomous}
          required
        />
        <label htmlFor="scientific">Scientific Name:</label>
        <input
          id="scientific"
          type="text"
          name="scientific"
          value={jellyfish.scientific}
          placeholder="Scientific Name"
          onChange={handleTextChange}
        />
        <label htmlFor="information">Jellyfish Information:</label>
        <input
          id="information"
          name="information"
          type="text"
          value={jellyfish.information}
          onChange={handleTextChange}
          placeholder="Jellyfish Information"
        />
        <label htmlFor="website">Website:</label>
        <input
          id="website"
          name="website"
          type="url"
          value={jellyfish.website}
          onChange={handleTextChange}
          placeholder="https://"
          required
        />
        <label htmlFor="image_link">Image Link:</label>
        <input
          id="image_link"
          name="image_link"
          type="url"
          value={jellyfish.image_link}
          onChange={handleTextChange}
          placeholder="https://"
          required
        />
        <br />
        <input type="submit" value="SUBMIT"/>
      </form>
      <Link to={`/jellyfish/${id}`}>
      <button className="edit-back-button">BACK</button>
      {/* <button>BACK</button> */}
      </Link>
    </div>
  );
}

export default EditJellyfish;

