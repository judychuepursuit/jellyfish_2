import { Link } from "react-router-dom";
{/* <img src="/Pelagia_noctiluca.jpeg" alt="Main Jellyfish Image"/> */}
import image from '/jellyfish icon.jpg';
import "./Home.css";

function Home() {
  return (
    <div className="Home">
          <body class="home"></body>
      <div className="Content">
        <h2>Welcome to the Jellyfish App</h2>
        <h3 className="AllJellyfishLinks"><Link to="/jellyfish">{`‣ Click for Jellyfish`}</Link></h3>
      </div>
      <div className="ImageContainer">
      <img src={image} alt="jellyfish icon.jpg"/>
      </div>
      <div className="jellyfish-description">
        <p>Welcome to my Jellyfish site!, here we explore the captivating world of jellyfish, offering a glimpse into their mysterious and mesmerizing existence. While we only scratch the surface of what there is to learn, you can delve deeper and discover more about these fascinating and beautiful marine dwellers by clicking on the links provided below &#x25BC;. There you can explore and find one that you find interesting, you may add it to this repository by clicking on the "NEW Jellyfish" on the NavBar or the index page then add the Jellyfish information required.</p>
        <p>Jellyfish are a diverse group of marine invertebrates belonging to the phylum Cnidaria. They are characterized by their gelatinous, umbrella-shaped bodies called bells, and trailing tentacles equipped with stinging cells called nematocysts. Jellyfish have been in existence for over 500 million years, making them one of the oldest living organisms on Earth.</p>
        <p>Jellyfish play several important roles in marine ecosystems. They are a crucial part of the food chain, serving as prey for larger marine animals such as fish, turtles, and birds. Some species of jellyfish are also efficient predators, helping to control populations of smaller planktonic organisms. In addition, jellyfish blooms can influence nutrient cycling and energy flow within marine environments.</p>
        <p>Overall, jellyfish are fascinating creatures with a long evolutionary history, ecological significance, and a range of venomous capabilities that have intrigued scientists and the public alike.</p>
    </div>
    </div>
  );
}

export default Home;