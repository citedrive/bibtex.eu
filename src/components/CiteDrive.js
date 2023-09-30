import React, {useState} from "react";
import styled from "styled-components";

const CiteDrive = () => {
  const [loadVideo, setLoadVideo] = useState(false);
  return (
    <>

      <iframe
        style={{borderRadius: 15}}
        loading="lazy"
        width="100%"
        height="615"
        src="https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

    </>
  );
};

export default CiteDrive;
