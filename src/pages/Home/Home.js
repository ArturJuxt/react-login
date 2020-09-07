import React from "react";
import './Home.scss';
import studio from '../../img/studio-one.jpg';

function Home() {
  return (
    <div className="home">
      <img src={studio} alt="img" />
    </div>
  );
}

export default Home;
