import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";

export default function Video() {
  return (
    <MDBContainer >
      <div className="ratio ratio-16x9" style={{ marginBottom: '40px', size:'cover'}}>
        <video controls>
          <source src={require("./myvideo.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </MDBContainer>
  );
}