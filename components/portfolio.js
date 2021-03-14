import { ModalProvider } from "react-modal-hook";
import Card from "./card";

const Portfolio = ({ portfolios }) => {return (
    <section id='portfolio'>
      <div>
      <h2>Mes Projets</h2>
            {portfolios.map((portfolio) => {
              return (
                <ModalProvider>
                <Card 
                portfolio={portfolio}
                key={portfolio.slug}
                />
                </ModalProvider>
              );
            })}
        </div>
    </section>
  );
};

export default Portfolio;
