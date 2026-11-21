import React from "react";
import "./Watch.styles.scss";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
function Watch() {
 
 const location = useLocation()
  const navigate = useNavigate();
 const {title, description, video } = location.state || {}
  return (
    <div className="watch-page">
      <button className="watch-back" onClick={() => navigate(-1)}>
        <ArrowLeft size={22} />
        Back
      </button>

      <div className="watch-player">
        <video
          src={video}
          controls
          autoPlay
          className="watch-video"
        />

        <div className="watch-details">
          <h2>{title}</h2>
          <p>{description }</p>
        </div>
      </div>
    </div>
  );
}

export default Watch;
