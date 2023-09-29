import React, {useState} from "react";
import styled from "styled-components";

const CiteDrive = () => {
  const [loadVideo, setLoadVideo] = useState(false);
  return (
    <>
      {loadVideo ? 
      <iframe
        style={{borderRadius: 15}}
        width="100%"
        height="615"
        src="https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      :
         <div onClick={() => setLoadVideo(true)} style={{ width: '100%', height: '615px', position: 'relative', cursor: 'pointer' }}>
      <img 
        src={`https://img.youtube.com/vi/bHD94qM0vyg/maxresdefault.jpg`} 
        alt="Video Thumbnail" 
        style={{ borderRadius: 15,width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ color: "white", background: "red", paddingLeft: "2rem", paddingRight: "2rem", borderRadius: 15, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '40px' }}>
        ►
      </div>
    </div>
}
    </>
  );
};

export default CiteDrive;
