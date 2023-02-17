import React from "react";
import "./Card.css";
import { img_300, unavailable } from "../../config/config";
import Badge from "../Badge/Badge";
import ContentModal from "../ContentModal/ContentModal";
const Card = ({ id, title, poster, date, media_type, vote_average }) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <div className="card">
        <Badge vote={vote_average} />
        <div className="posterdiv">
          <img
            className="poster"
            src={poster ? `${img_300}/${poster}` : unavailable}
            alt={title}
          />
        </div>
        <div className="title">{title}</div>
        <span className="subtitle">
          <div className="media_type">
            {media_type === "tv" ? "TV Series" : "Movie"}
          </div>
          <div className="date">{date}</div>
        </span>
      </div>
    </ContentModal>
  );
};

export default Card;
