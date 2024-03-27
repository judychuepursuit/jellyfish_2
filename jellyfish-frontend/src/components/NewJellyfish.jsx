import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function NewJellyfish() {
  // const API = process.env.REACT_APP_API_URL;
  const API = import.meta.env.VITE_API_URL;
  console.log(API)
  let navigate = useNavigate();
  const [submitError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [jellyfish, setJellyfish] = useState({
    name: "",
    is_venomous: false,
    scientific: "",
    information: "",
    website: "",
    image_link: ""
  });

  const addJellyfish = (newJellyfish) => {
    axios
      .post(`${API}/jellyfish`, newJellyfish)
      .then(
        (res) => {
          navigate(`/jellyfish/${res.data.id}`);
          setError(false);
        },
        (error) => {
          console.error(error);
          setError(true);
          setErrorMessage(error);
        }
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setJellyfish({ ...jellyfish, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setJellyfish({ ...jellyfish, is_venomous: !jellyfish.is_venomous });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addJellyfish(jellyfish);
  };

  return (
    <div className="NewEdit">
      {submitError ? <h2>There was an error : {errorMessage.Error}</h2> : null}
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
        <label htmlFor="instructions">Jellyfish Information:</label>
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
        />
        <br />
        <input type="submit"  value="SUBMIT"/>
      </form>
      <Link to={`/jellyfish`}>
      <button className="new-back-button">BACK</button>
        {/* <button>BACK</button> */}
      </Link>
    </div>
  );
}

export default NewJellyfish;
