import React from "react";
import "./TvShows.css";

const TvShows = (props) => {
  

  function handleBtn(id){
    const showDetailsUrl = `/details/${id}`;
    window.open(showDetailsUrl, "_target");
  }

  return (
    <div>
      <h1>TV Shows</h1>
      <div className="container" >
      {props.showData &&
        props.showData.map((item) => (
            item.show.image && 
            <div className="container_child" key={item.show.id}>
                {item.show.image && (
                <>
                    <img
                    src={item.show.image.medium}
                    alt={`Poster for ${item.show.name}`}
                    />
                    <p className="showName">{item.show.name}</p>
                    <div className="parent_genre_rat">
                        <p>Genres: {item.show.genres[0]}</p>
                        {
                            item.show.rating.average!==null && 
                            <p>Rating: {item.show.rating.average}</p>
                        }
                    </div>
                    <button onClick={()=>handleBtn(item.show.id)}>Show Details</button>
                </>
                )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvShows;
