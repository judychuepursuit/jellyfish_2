import JellyfishDetail from "../components/JellyfishDetail";
import "../pages/Show.css";
import React, { useEffect } from 'react';

function Show() {
  useEffect(() => {
    document.body.classList.add("second-background");

    return () => {
      document.body.classList.remove("second-background");
    };
  }, []);

  return (
    <div className="outer-grid-container">
      <JellyfishDetail />
    </div>
  );
}

export default Show;







// function Show() {
//   return (
//     <div className="outer-grid-container">
//       <JellyfishDetail />
//     </div>
//   );
// }

// export default Show;