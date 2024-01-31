import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowDetails.css';

const ShowDetails = (props) => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const foundShow = props.showData.find((item) => item.show.id.toString() === id);
    setShowDetails(foundShow);
  }, [id, props.showData]);

  console.log(showDetails);

  return (
    <div>
      <h2>Show Details</h2>
      {showDetails && (
        <div>
          <h3>{showDetails.show.name}</h3>
          <img src={showDetails.show.image.medium} alt={`Poster for ${showDetails.show.name}`} />
          <p>Genres: {showDetails.show.genres.join(', ')}</p>
          <p>Rating: {showDetails.show.rating.average}</p>
        </div>
      )
      }
    </div>
  );
};

export default ShowDetails;
