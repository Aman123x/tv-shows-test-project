import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ShowDetails.css";
import TicketModal from "./TicketModal";

const removeHtmlTags = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
};

const ShowDetails = (props) => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const foundShow = props.showData.find(
      (item) => item.show.id.toString() === id
    );
    setShowDetails(foundShow);
  }, [id, props.showData]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="show_container_parent">
      {showDetails && (
        <div className="show_container">
          <h3>{showDetails.show.name}</h3>
          <div className="show_child">
            <div className="image">
              <img
                src={showDetails.show.image.medium}
                alt={`Poster for ${showDetails.show.name}`}
              />
            </div>
            <div className="show_summary">
              <p>
                <strong>Summary:</strong>{" "}
                {removeHtmlTags(showDetails.show.summary)}
              </p>

              <div className="Show_genre">
                <button>Genres: {showDetails.show.genres.join(", ")}</button>
                <button>Premiered On: {showDetails.show.premiered}</button>
              </div>
              <div className="Show_genre">
                <button>Type: {showDetails.show.type}</button>
                <button>Language: {showDetails.show.language}</button>
              </div>
            </div>
          </div>
          <button onClick={handleOpenModal} className="book_ticket">
            Book Ticket
          </button>
        </div>
      )}
      {isModalOpen === true && (
        <TicketModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          movieName={showDetails.show.name}
        />
      )}
    </div>
  );
};

export default ShowDetails;
