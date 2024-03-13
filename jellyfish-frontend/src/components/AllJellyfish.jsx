import axios from "axios";
import { useState, useEffect } from "react";
import JellyfishCard from "./JellyfishCard";


function AllJellyfish() {
  const API = import.meta.env.VITE_API_URL;
  console.log(API)
  const [allJellyfish, setAllJellyfish] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/jellyfish`)
      .then((response) => setAllJellyfish(response.data))
      .catch((e) => console.error("catch", e));
  }, []);


  return (
    <div className="all-jellyfish">
      {allJellyfish.map(jellyfish =>
        <JellyfishCard key={jellyfish.id} jellyfish={jellyfish}/>
      )}
    </div>
  );
}

export default AllJellyfish;
