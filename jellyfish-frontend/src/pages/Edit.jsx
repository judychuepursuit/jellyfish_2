import EditJellyfish from "../components/EditJellyfish";
import { useEffect } from 'react';
import "../pages/Edit.css";
import "./Index.css";


function Edit() {
  useEffect(() => {
    document.body.classList.add("second-background");

    // return () => {
    //   document.body.classList.remove("second-background");
    // };
  }, []);

  return (
    <div className="Edit">
    <div className="second-background"></div>
      <div className="inner">
        <h2>Edit Jellyfish</h2>
      </div>
      <EditJellyfish />
    </div>
  );
}

export default Edit;


// return (
//   <div className="Index">
//     <div className="Index-bg"></div>
//     <div className="inner">
//       <h2>Jellyfish List</h2>
//       <Link to="/jellyfish/new" className="header-link">
//         <button className="new-btn">NEW Jellyfish</button>
//       </Link>
//     </div>
//     <AllJellyfish />
//   </div>
// );
// }
// export default Index;












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