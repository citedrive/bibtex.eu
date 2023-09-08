import * as React from "react";
import styled from "styled-components";

const CiteDrive = () => {
  return (
    <>

      <iframe
        style={{borderRadius: 15, border: "5px solid #776cfe"}}
        width="100%"
        height="615"
        src="https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default CiteDrive;
