import React from "react";
import StrapiImage from "./image";
import ReactMarkdown from 'react-markdown'
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

  const Card = ({portfolio}) => {

    const [showModal, hideModal] = useModal(() => (
      <ReactModal isOpen>
            <div>
              <StrapiImage image={portfolio.image}/>
              <div className="container">
                <h1 id="title">
                    {portfolio.title}
                  </h1>
                  <p id="category">
                    Stack : {portfolio.category.name}
                  </p>
                <div>
                  <ReactMarkdown source={portfolio.content} escapeHtml={false} linkTarget="_blank" />
                </div>
              </div>
            </div>
        <span onClick={hideModal}>X</span>
      </ReactModal>
    ));
      return(

          <article onClick={showModal}>
            <StrapiImage image={portfolio.image}/>
            <div>
              <h2>
                  {portfolio.title}
              </h2>
              <p>
                {portfolio.category.name}
              </p>
            </div>
          </article>
          
      );
  }

  export default Card;