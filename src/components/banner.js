import * as React from 'react';
import CiteDriveBanner from "../../static/img/citedrive_banner.svg";


const Banner = () => {

    return (
    <>
       <div style={{cursor: "pointer", padding: 15}}  onClick={() => {
            window.open("https://www.citedrive.com/?via_bibtex.eu", "_blank");
          }}><CiteDriveBanner ></CiteDriveBanner></div>
    </>
     );
}

export default Banner;