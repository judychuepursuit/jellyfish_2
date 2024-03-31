import EditJellyfish from "../components/EditJellyfish";
import { useEffect } from 'react';
import "../pages/Edit.css"; // Make sure to import the CSS file

function Edit() {
  useEffect(() => {
    document.body.classList.add("second-background");

    return () => {
      document.body.classList.remove("second-background");
    };
  }, []);

  return (
    <div className="Edit">
      <div className="inner">
        <h2>Edit Jellyfish</h2>
      </div>
      <EditJellyfish />
    </div>
  );
}

export default Edit;


// HAD issues same home page image:
// function Edit() {
//   return (
//     <div className="Edit">
//       <div className="inner">
//         <h2>Edit Jellyfish</h2>
//       </div>
//       <EditJellyfish />
//     </div>
//   );
// }

// export default EditJellyfish;