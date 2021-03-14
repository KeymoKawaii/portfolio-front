import React from "react";
import Fade from 'react-reveal/Fade';

const Formations = ({ formations }) => {return (
    <section id='formation'>
      <h2>Mes Formations</h2>
      <div>
    {formations.map((formation) => {
        return(
          <Fade clear>
                <div>
                  <h1>{formation.name}</h1>
                  <p>{formation.school}</p>
                  <p>{formation.date}</p>
                </div>
          </Fade>
                )}

  )}
      </div>
    </section>
)};

export default Formations;